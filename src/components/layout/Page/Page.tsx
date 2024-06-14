import { PropsWithChildren } from "react";
import styles from "./Page.module.css";

const Page = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  return <div className={styles.Container}>{children}</div>;
};
export default Page;
