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
          <img
            width="100%"
            src={posterImage}
            // src="https://image.tmdb.org/t/p/w342/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
          />
        </div>
        <div className={styles.detail}>
          <div className={styles.bannerWrapper}>
            <img
              width="100%"
              //   src="https://image.tmdb.org/t/p/w342/uVu2fBc114un7F1GD76RBouWyBP.jpg"
              src={bannerImage}
            />
          </div>
          <div className={styles.detailInfo}>
            <button className={styles.button}>Watch Now</button>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
