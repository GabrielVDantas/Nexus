import styles from "./Search.module.css";
import Input from "../Input/Input";
import { useState } from "react";

const Search = () => {

  const [name, setName] = useState("");

  return (
    <section className={styles.searchStyle}>
      <form>
      <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Pesquise um projeto pelo nome..."
        />
      </form>
    </section>
  );
};

export default Search;
