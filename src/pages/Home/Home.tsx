import MediaCard from "../../components/MediaCard";
import BannerDetail from "./components/BannerDetail";
import BannerMask from "./components/BannerMask";
import VideoBanner from "./components/VideoBanner";

const Home = () => {
  return (
    <div>
      {/* FIRST LAYER */}
      <VideoBanner />
      {/* SECOND LAYER */}
      <BannerMask />
      {/* THIRD LAYER */}
      <BannerDetail />
      <div>
        <MediaCard
          title="Inside Out"
          posterImage="https://image.tmdb.org/t/p/w342/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
          bannerImage="https://image.tmdb.org/t/p/w342/uVu2fBc114un7F1GD76RBouWyBP.jpg"
          description="Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear, Anger, Disgust and Sadness. The emotions live in Headquarters, the control center inside Riley's mind, where they help advise her through everyday life. As Riley and her emotions struggle to adjust to a new life in San Francisco, turmoil ensues in Headquarters. Although Joy, Riley's main and most important emotion, tries to keep things positive, the emotions conflict on how best to navigate a new city, house and school."
        />
        PLACEHOLDER CONTENT
      </div>
    </div>
  );
};

export default Home;