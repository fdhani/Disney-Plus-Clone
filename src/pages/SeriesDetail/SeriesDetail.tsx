import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import VideoBanner from "../../components/VideoBanner";
import Episode from "./Episode";

import styles from "./SeriesDetail.module.css";

const SeriesDetail = () => {
  return (
    <div>
      {/* FIRST LAYER */}
      <VideoBanner />
      {/* SECOND LAYER */}
      <BannerMask maskHeight="53vw" />
      {/* THIRD LAYER */}
      <BannerDetail />
      <h1
        style={{
          marginTop: "80px",
          color: "white",
        }}
      >
        Seasons
      </h1>
      <div className={styles.seasonTabsSection}>
        <h3 className={styles.seasonTab} data-active="true">
          Season 1
        </h3>
        <h3 className={styles.seasonTab}>Season 2</h3>
        <h3 className={styles.seasonTab}>Season 3</h3>
      </div>
      <div>
        <Episode
          title="Example title"
          desc="example desc"
          date="12 Jun 2023"
          season={1}
          episode={1}
          runtime="40m"
          imgUrl={""}
        />
        <Episode
          title="Example title"
          desc="example desc"
          date="12 Jun 2023"
          season={1}
          episode={1}
          runtime="40m"
          imgUrl={""}
        />
        <Episode
          title="Example title"
          desc="example desc"
          date="12 Jun 2023"
          season={1}
          episode={1}
          runtime="40m"
          imgUrl={""}
        />
      </div>
    </div>
  );
};

export default SeriesDetail;
