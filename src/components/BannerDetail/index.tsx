import clsx from "clsx";
import styles from "./index.module.css";

interface Props {
  title: string;
  releaseDate: string;
  language: string;
  overview: string;
  genres: string[];
}

const BannerDetail = (props: Props) => {
  const { title, releaseDate, language, overview, genres } = props;
  return (
    <div className={styles.Container}>
      <div className={styles.VideoDetails}>
        <h1 className={styles.title}>{title}</h1>
        <div className={clsx([styles.DetailSection, styles.Section1])}>
          <span>{releaseDate}</span>
          <i>&#x2022;</i>
          <span>{language}</span>
        </div>
        <div className={clsx([styles.DetailSection, styles.Section2])}>
          <p>{overview}</p>
        </div>
        <div className={clsx([styles.DetailSection, styles.Section3])}>
          {genres.map((genre, index) => (
            <>
              {index > 0 && <span>&#124;</span>}
              <b key={index}>{genre}</b>
            </>
          ))}
        </div>
        <div className={clsx([styles.DetailSection])}>
          <button>Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default BannerDetail;
