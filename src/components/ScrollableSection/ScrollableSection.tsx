import { PropsWithChildren } from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// import required modules
import { Pagination } from "swiper/modules";

import styles from "./ScrollableSection.module.css";

const ScrollableSection = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  return (
    <div>
      <h2 className={styles.sectionTitle}>Section Name</h2>

      <Swiper spaceBetween={24} slidesPerView={7}>
        {children}
      </Swiper>
    </div>
  );
};

export default ScrollableSection;
