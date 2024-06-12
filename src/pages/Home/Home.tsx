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
