import styles from "./index.module.css";

interface Props {
  maskHeight?: number | string;
}

const BannerMask = (props: Props) => {
  const { maskHeight = "60vw" } = props;
  return (
    <div className={styles.container}>
      <div
        className={styles.topMask}
        style={{
          height: maskHeight,
        }}
      />
      <div className={styles.bottomMask}></div>
    </div>
  );
};

export default BannerMask;
