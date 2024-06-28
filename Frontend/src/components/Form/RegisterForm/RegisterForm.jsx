import Form from "../Form";
import RegisterUserService from "../../../service/userService/registerUserService";

const RegisterForm = () => {
  const inputs = [
    { type: "text", name: "username", placeholder: "Nome...", required: true },
    { type: "email", name: "email", placeholder: "Email...", required: true },
    {
      type: "password",
      name: "password",
      placeholder: "Senha...",
      required: true,
    },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirme a senha...",
      required: true,
    },
  ];

  const onSubmit = async (formData) => {
    try {
      const response = await RegisterUserService.registerUserService(formData);
      if (response && response.status === 201) {
        console.log("Registro submetido!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <Form
        h2Content={"Olá, seja bem-vindo(a) ao Nexus!"}
        pContent={"Vamos criar uma conta!?"}
        inputs={inputs}
        buttonContent={"Criar conta"}
        onSubmit={onSubmit}
        rForm={true}
      />
    </section>
  );
};

export default RegisterForm;
