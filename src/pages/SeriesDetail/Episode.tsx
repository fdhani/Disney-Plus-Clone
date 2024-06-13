import styles from "./Episode.module.css";

interface Props {
  title: string;
  date: string;
  season: number;
  episode: number;
  runtime: string;
  desc: string;
  imgUrl: string;
}

const Episode = (props: Props) => {
  const { title, date, season, episode, runtime, imgUrl, desc } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img
          src={imgUrl}
          width="100%"
          height="100%"
          style={{
            backgroundColor: "gray",
          }}
        />
      </div>
      <div className={styles.detailsWrapper}>
        <h3 className={styles.epTitle}>{title}</h3>
        <p className={styles.epSummary}>
          <span>
            S{season} E{episode}
          </span>
          <b>&#x2022;</b>
          <span>{date}</span>
          <b>&#x2022;</b>
          <span>{runtime}</span>
        </p>
        <p className={styles.epDesc}>{desc}</p>
      </div>
    </div>
  );
};

export default Episode;
