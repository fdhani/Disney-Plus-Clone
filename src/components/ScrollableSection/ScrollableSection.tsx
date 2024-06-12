import { PropsWithChildren } from "react";
import styles from "./ScrollableSection.module.css";

const ScrollableSection = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  return (
    <div>
      <h2 className={styles.sectionTitle}>Section Name</h2>
      {children}
    </div>
  );
};

export default ScrollableSection;
