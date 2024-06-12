import { PropsWithChildren } from "react";
import styles from "./Sidebar.module.css";

interface MenuItemProps {
  name: string;
}

const MenuItem = (props: PropsWithChildren<MenuItemProps>) => {
  const { children, name } = props;
  return (
    <li className={styles.MenuItem}>
      <span className={`material-symbols-outlined ${styles.menuIcon}`}>
        {children}
      </span>
      <span className={styles.menuName}>{name}</span>
    </li>
  );
};

const Sidebar = () => {
  return (
    <nav className={styles.Container}>
      <img
        width={51}
        className={styles.Logo}
        alt="disney plus logo"
        src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1710482713/feature/rebranding/disney-plus-hotstar-logo.svg"
      />
      <ul className={styles.MenuItemWrapper}>
        <MenuItem name="Search">search</MenuItem>
        <MenuItem name="Home">home</MenuItem>
        <MenuItem name="Series">tv_gen</MenuItem>
        <MenuItem name="Movies">movie</MenuItem>
      </ul>
    </nav>
  );
};
export default Sidebar;
