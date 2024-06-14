import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Section}>
        <h4>Company</h4>
        <ul>
          <li>Supported Devices</li>
          <li>Interest based Ads</li>
        </ul>
      </div>
      <div className={styles.Section}>
        <h4>View Website in</h4>
        <ul>
          <li>English</li>
          <li>Indonesian</li>
        </ul>
      </div>
      <div className={styles.Section}>
        <h4>Need help?</h4>
        <ul>
          <li>Help</li>
          <li>Feedback</li>
        </ul>
      </div>
      <div>
        <h4>Connect with Us</h4>
      </div>
    </div>
  );
};
export default Footer;
