import styles from "./MediaCard.module.css";

interface Props {
  posterImage: string;
  bannerImage: string;
  title: string;
  description: string;
}

const MediaCard = (props: Props) => {
  const { posterImage, bannerImage, title, description } = props;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.posterWrapper}>
          <img width="100%" src={posterImage} />
        </div>
        <div className={styles.detail}>
          <div className={styles.bannerWrapper}>
            <img width="100%" src={bannerImage} />
          </div>
          <div className={styles.detailInfo}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
