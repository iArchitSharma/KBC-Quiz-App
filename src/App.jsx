import { useState } from 'react'
import './App.css'

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);

  const moneyTable = [
    {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 300"},
    {id:4, amount:"$ 400"},
    {id:5, amount:"$ 500"},
    {id:6, amount:"$ 600"},
    {id:7, amount:"$ 700"},
    {id:8, amount:"$ 800"},
    {id:9, amount:"$ 900"},
    {id:10, amount:"$ 1000"},
    {id:11, amount:"$ 1500"},
    {id:12, amount:"$ 2500"},
    {id:13, amount:"$ 5000"},
    {id:14, amount:"$ 1000"}
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">Question/Answers</div>
      </div>

      <div className="moneyTable">
        <ul className="moneyList">
          {moneyTable.map((i) => (
            //Active class using hooks
            <li className = {questionNumber === i.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{i.id}</span>
              <span className="moneyListItemAmount">{i.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
