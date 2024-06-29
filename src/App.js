import * as React from "react";
import styles from "./app.module.css";

export default function App() {
  const [words, setWords] = React.useState(["Palavra 1", "Palavra 2"]);

  const handleAdd = () => {
    const newWords = [...words, `Palavra ${words.length + 1}`];
    setWords(newWords);
  };

  const list = words.map((word, index) => <p key={index}>{word}</p>);

  return (
    <div className={styles.app}>
      <button onClick={handleAdd}>Adicionar palavra</button>
      {list}
    </div>
  );
}
