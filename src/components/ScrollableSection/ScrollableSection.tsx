import { PropsWithChildren } from "react";

const ScrollableSection = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  return <div className="scrollable-section">{children}</div>;
};

export default ScrollableSection;
