import Footer from "./Footer";
import Page from "./Page";
import Sidebar from "./Sidebar";
import styles from "./index.module.css";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className={styles.Container}>
      <Sidebar />
      <Page>
        <Outlet />
      </Page>
      <Footer />
    </div>
  );
};

export default Layout;
