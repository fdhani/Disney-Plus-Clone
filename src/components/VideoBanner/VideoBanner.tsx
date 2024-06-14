import styles from "./VideoBanner.module.css";

interface Props {
  imgUrl: string;
}

const VideoBanner = (props: Props) => {
  const { imgUrl } = props;

  return (
    <>
      <div className={styles.VideoContainer}>
        <img height="100%" src={imgUrl} alt="" />
      </div>
    </>
  );
};

export default VideoBanner;
