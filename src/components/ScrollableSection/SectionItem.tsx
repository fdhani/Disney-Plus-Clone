import { PropsWithChildren } from "react";
import { SwiperSlide } from "swiper/react";

const SectionItem = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  return <SwiperSlide>{children}</SwiperSlide>;
};

// Need this because <Swiper /> checks child displayName to determine if it's a slide
// function isChildSwiperSlide(child) {
//     return child.type && child.type.displayName && child.type.displayName.includes('SwiperSlide');
// }
SectionItem.displayName = "SwiperSlider";

export default SectionItem;
