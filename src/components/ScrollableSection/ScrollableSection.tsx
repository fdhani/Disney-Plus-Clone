import { PropsWithChildren } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./swiper.css";

import styles from "./ScrollableSection.module.css";

interface Props {
  slidesPerView?: number;
  sectionTitle?: string;
}

const ScrollableSection = (props: PropsWithChildren<Props>) => {
  const { children, sectionTitle, slidesPerView = 7.5 } = props;
  return (
    <div>
      <h2 className={styles.sectionTitle}>{sectionTitle}</h2>

      <Swiper
        spaceBetween={24}
        slidesPerView={slidesPerView}
        navigation={true}
        modules={[Navigation]}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default ScrollableSection;
