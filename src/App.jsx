import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="main">main</div>
      <div className="moneyTable">
      <ul className='moneyList'>
        <li className='moneyListItem'>
          <span className="moneyListItemNumber"></span>
        </li>
        <li className='moneyListItem'>$ 300</li>
        <li className='moneyListItem'>$ 200</li>
        <li className='moneyListItem'>$ 100</li>
      </ul>
      </div>
    </div>
  )
}

export default App
