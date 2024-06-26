import React from "react";
import Input from "./Input";

const NewProjectInput = ({
  name,
  setName,
  description,
  setDescription,
  goal,
  setGoal,
  setCoverArt,
  setScreenshots,
}) => {
  return (
    <>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        required={true}
        placeholder="Nome do projeto..."
      />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        required={true}
        placeholder="Uma breve descrição do projeto..."
      />
      <Input
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        type="number"
        required={true}
        placeholder="Meta financeira..."
      />
      <Input
        onChange={(e) => setCoverArt(e.target.files)}
        type="file"
        placeholder="Arte de capa..."
      />
      <Input
        onChange={(e) => setScreenshots(Array.from(e.target.files))}
        type="file"
        placeholder="Screenshots (não obrigatório)..."
        multiple={true}
      />
    </>
  );
};

export default NewProjectInput;
