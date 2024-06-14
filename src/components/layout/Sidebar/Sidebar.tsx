import { PropsWithChildren } from "react";
import styles from "./Sidebar.module.css";
import { Link, useLocation, useResolvedPath } from "react-router-dom";

interface MenuItemProps {
  name: string;
  path: string;
}

const MenuItem = (props: PropsWithChildren<MenuItemProps>) => {
  const { children, name, path } = props;
  const _path = useLocation();
  console.log({
    _path,
  });

  const isActivePath = useResolvedPath(path).pathname === _path.pathname;

  return (
    <li className={styles.MenuItem}>
      <Link to={path} className={styles.MenuItem}>
        <span
          data-active={isActivePath}
          className={`material-symbols-outlined ${styles.menuIcon}`}
        >
          {children}
        </span>
        <span className={styles.menuName}>{name}</span>
      </Link>
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
        <MenuItem path="/search" name="Search">
          search
        </MenuItem>
        <MenuItem path="/" name="Home">
          home
        </MenuItem>
        <MenuItem path="/series" name="Series">
          tv_gen
        </MenuItem>
        <MenuItem path="/movies" name="Movies">
          movie
        </MenuItem>
      </ul>
      <div className={styles.Overlay} />
    </nav>
  );
};
export default Sidebar;
