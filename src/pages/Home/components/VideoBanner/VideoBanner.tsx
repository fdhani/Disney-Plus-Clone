import styles from "./VideoBanner.module.css";

const VideoBanner = () => {
  return (
    <>
      <div className={styles.VideoContainer}>
        <img
          height="100%"
          src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7642/1712140907642-i"
          alt=""
        />
      </div>
    </>
  );
};

export default VideoBanner;
