import { useState } from "react";
import styles from "./App.module.css";
import Input from "./components/Input/Input";
import List from "./components/List/List";
import useFetch from "./customHooks/useFetch";

function App() {
  const [entry, setEntry] = useState("");

  const { results, error } = useFetch(
    "http://localhost:3333/entry/findEntrySentences",
    entry
  );

  return (
    <div className={styles.appContainer}>
      <Input setEntry={setEntry} />
      {entry &&
        (results.length > 0 ? (
          <List results={results} />
        ) : (
          <p>{error.message}</p>
        ))}
    </div>
  );
}

export default App;
