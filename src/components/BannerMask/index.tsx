import styles from "./index.module.css";

const BannerMask = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topMask} />
      <div className={styles.bottomMask}></div>
    </div>
  );
};

export default BannerMask;
