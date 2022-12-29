import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([
    { id: 0, content: "Test", working: true },
    { id: 1, content: "Test", working: true },
    { id: 2, content: "Test", working: true },
  ]);
  const [content, setContent] = useState("");

  const addCardHandler = () => {
    const newCards = {
      id: cards.length + 1,
      content: content,
      working: true,
    };

    setCards([...cards, newCards]);
    setContent("");
  };

  return (
    <div className="App">
      <div className="input-container">
        <div className="input-group">
          <input
            type={"text"}
            className="add-input"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></input>
          <button onClick={addCardHandler}>추가하기</button>
        </div>
      </div>
      <h1>ToDoList</h1>

      <div className="list">
        {cards.map((cards) => {
          if (cards.working) {
            return (
              <div key={cards.id} className="content-box">
                <div>{cards.content}</div>
              </div>
            );
          } else return null;
        })}
      </div>
    </div>
  );
}

export default App;
