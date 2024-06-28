import Form from "../Form";
import LoginUserService from "../../../service/userService/loginUserService";

const LoginForm = () => {
  const inputs = [
    { type: "email", name: "email", placeholder: "E-mail...", required: true },
    {
      type: "password",
      name: "password",
      placeholder: "Senha...",
      required: true,
    },
  ];

  const onSubmit = async (formData) => {
    try {
      const response = await LoginUserService.loginUserService(formData);
      if (response && response.status === 200) {
        console.log("Login realizado com sucesso!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={styles.loginFormContainer}>
      <Form
        h2Content={"Olá, seja bem-vindo(a) de volta!"}
        pContent={"Entre agora mesmo em sua conta =)"}
        inputs={inputs}
        buttonContent={"Entrar"}
        onSubmit={onSubmit}
        lForm={true}
      />
    </section>
  );
};

export default LoginForm;
