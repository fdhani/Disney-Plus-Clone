import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Page from "./Page";
import Sidebar from "./Sidebar";
import styles from "./index.module.css";

const Layout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div className={styles.Container}>
      <Sidebar />
      <Page>{children}</Page>
      <Footer />
    </div>
  );
};

export default Layout;
