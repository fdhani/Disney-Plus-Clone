import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import VideoBanner from "../../components/VideoBanner";

import MediaCard from "../../components/MediaCard";
import ScrollableSection, {
  SectionItem,
} from "../../components/ScrollableSection";
import "swiper/css";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { loading, data } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=1f54bd990f1cdfb230adb312546d765d`
  );

  const firstTrendingItem = data?.results?.[0] || {};

  return (
    <div>
      {/* FIRST LAYER */}
      <VideoBanner
        imgUrl={`https://image.tmdb.org/t/p/original${firstTrendingItem.backdrop_path}`}
      />
      {/* SECOND LAYER */}
      <BannerMask />
      {/* THIRD LAYER */}
      <BannerDetail
        genres={["Action", "Adventure", "Fantasy"]}
        title={firstTrendingItem.title}
        language={firstTrendingItem.original_language}
        overview={firstTrendingItem.overview}
        releaseDate={firstTrendingItem.release_date}
      />
      <div>
        <ScrollableSection sectionTitle="Trending">
          {!loading &&
            data?.results.map((media: any) => (
              <SectionItem>
                <MediaCard
                  title="Inside Out"
                  posterImage={`https://image.tmdb.org/t/p/w342${media.poster_path}`}
                  bannerImage={`https://image.tmdb.org/t/p/w342${media.backdrop_path}`}
                  description={media.overview}
                />
              </SectionItem>
            ))}
        </ScrollableSection>
        <ScrollableSection sectionTitle="Trending">
          {!loading &&
            data?.results.map((media: any) => (
              <SectionItem>
                <MediaCard
                  title="Inside Out"
                  posterImage={`https://image.tmdb.org/t/p/w342${media.poster_path}`}
                  bannerImage={`https://image.tmdb.org/t/p/w342${media.backdrop_path}`}
                  description={media.overview}
                />
              </SectionItem>
            ))}
        </ScrollableSection>
      </div>
    </div>
  );
};

export default Home;
