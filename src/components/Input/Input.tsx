import { useState } from "react";
import styles from "./Input.module.css";
import { InputProps } from "./InputProps";

const Input = ({ setEntry }: InputProps) => {
  const [query, setQuery] = useState("");

  const handleChange = (event: any) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setEntry(query);
  };

  return (
    <div>
      <form>
        <input
          className={styles.input}
          type="search"
          dir="auto"
          onChange={handleChange}
          value={query}
        />
        <button type="submit" onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Input;
