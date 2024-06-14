import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import VideoBanner from "../../components/VideoBanner";

const Home = () => {
  return (
    <div>
      {/* FIRST LAYER */}
      <VideoBanner />
      {/* SECOND LAYER */}
      <BannerMask />
      {/* THIRD LAYER */}
      <BannerDetail
        genres={["Action", "Adventure", "Fantasy"]}
        title="Rise of the planet of the apes"
        overview="NEW EPISODE EVERY WEDNESDAY. “The Acolyte” examines a galaxy of
            secrets and dark-side powers, and all is not what it seems."
        releaseDate="2022-01-01"
        language="English"
      />
      <div
        style={{
          height: "100vh",
          backgroundColor: "gray",
        }}
      >
        PLACEHOLDER CONTENT
      </div>
    </div>
  );
};

export default Home;
