import styles from "./Login.module.css";
import Banner from "../../components/Image/Banner";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

const Register = () => {
  return (
    <section className={styles.loginStyle}>
      <div className={styles.loginBannerStyle}>
        <Banner />
      </div>
      <LoginForm />
    </section>
  );
};

export default Register;
