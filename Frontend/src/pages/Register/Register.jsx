import styles from "./Register.module.css";
import Banner from "../../components/Image/Banner";
import RegisterForm from "../../components/Forms/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <section className={styles.registerStyle}>
      <div className={styles.registerBannerStyle}>
        <Banner />
      </div>
      <RegisterForm />
    </section>
  );
};

export default Register;
