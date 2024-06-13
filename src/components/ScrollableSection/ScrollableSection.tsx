import { PropsWithChildren } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// import required modules
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "./swiper.css";

import styles from "./ScrollableSection.module.css";

const ScrollableSection = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  return (
    <div>
      <h2 className={styles.sectionTitle}>Section Name</h2>

      <Swiper
        spaceBetween={24}
        slidesPerView={7}
        navigation={true}
        modules={[Navigation]}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default ScrollableSection;
