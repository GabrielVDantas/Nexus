import styles from "./Home.module.css"
import Welcome from "../../components/Welcome/Welcome";
import Banner from "../../components/Image/Banner";

const Home = () => {
  return (
    <section className={styles.homeStyle}>
      <Welcome />
      <div className={styles.homeBannerStyle}>
        <Banner />
      </div>
    </section>
  );
};

export default Home;
