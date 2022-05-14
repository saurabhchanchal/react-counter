import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const handleChange = (value) => {
  
    setCount(count+value)
  }
  const handleDouble = (value) => {
     
    setCount(count*value)
  }



  return (
    <div className="App">
     <h2 className={`${count%2===0 ? "red" : "green"}`}>counter: {count} </h2>
     <button  className='add' onClick={() => {
       handleChange(1)
     }} >add</button>
     <button className='sub' onClick={() => {
       if (count <= 0) {
         return
       }
       handleChange(-1)
     }}>sub</button>
     <button className='dbl' onClick={() => {
       handleDouble(2)
     }}>double</button>
     <h3 className= {count % 2 === 0 ? "red" : "green"}>Number is {count % 2 === 0 ? "Even" : "Odd"}</h3>
    </div>
  )
}

export default App
