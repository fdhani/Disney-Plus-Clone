import clsx from "clsx";
import styles from "./index.module.css";

const BannerDetail = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.VideoDetails}>
        <div className={styles.VideoLogoWrapper}>
          <img
            height="100%"
            src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/1875/1718153751875-t"
          />
        </div>
        <div className={clsx([styles.DetailSection, styles.Section1])}>
          <span>2024</span>
          <i>&#x2022;</i>
          <span>1 Season</span>
          <i>&#x2022;</i>
          <span>Japanese</span>
        </div>
        <div className={clsx([styles.DetailSection, styles.Section2])}>
          <p>
            NEW EPISODE EVERY WEDNESDAY. “The Acolyte” examines a galaxy of
            secrets and dark-side powers, and all is not what it seems.
          </p>
        </div>
        <div className={clsx([styles.DetailSection, styles.Section3])}>
          <b>Action</b>
          <span>&#124;</span>
          <b>Adventure</b>
          <span>&#124;</span>
          <b>Drama</b>
        </div>
        <div className={clsx([styles.DetailSection])}>
          <button className={styles.button}>Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default BannerDetail;
