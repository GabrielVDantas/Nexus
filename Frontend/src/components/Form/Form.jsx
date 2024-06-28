import styles from "./Form.module.css";
import { useState } from "react";
import H2 from "../Text/H2";
import P from "../Text/P";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Anchor from "../Button/Anchor";

const Form = ({
  rForm,
  lForm,
  h2Content,
  pContent,
  buttonContent,
  inputs,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({});

  const submitForm = async (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className={styles.formContainer}>
      <form onSubmit={submitForm}>
        <H2 text={h2Content} />
        <P text={pContent} />
        {inputs.map((input, index) => (
          <div key={index}>
            <Input
              type={input.type}
              onChange={handleChange}
              required={input.required}
              multiple={input.multiple}
              placeholder={input.placeholder}
              value={formData[input.name] || ""}
              name={input.name}
            />
          </div>
        ))}
        <div>
          <Button text={buttonContent} />
          {lForm ? (
            <Anchor to={"/register-user"} text={"Sou novo aqui"} />
          ) : null}
          {rForm ? (
            <Anchor to={"/login-user"} text={"Já tenho uma conta"} />
          ) : null}
        </div>
      </form>
    </section>
  );
};

export default Form;
