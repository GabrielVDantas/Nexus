import styles from "./Outside.module.css";

const Outside = ({ rightContent, leftContent }) => {
  if (leftContent) {
    return (
      <section className={styles.outside}>
        <div className={styles.leftContent}>{leftContent}</div>
        <div className={styles.banner}>
          <img src="/src/assets/background.png" />
        </div>
      </section>
    );
  } else if (rightContent) {
    return (
      <section className={styles.outside}>
        <div className={styles.banner}>
          <img src="/src/assets/background.png" />
        </div>
        <div className={styles.rightContent}>{rightContent}</div>
      </section>
    );
  }
};

export default Outside;
