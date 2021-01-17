import logo from "./logo.svg"
import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    async function getData() {
      const { res } = await (
        await fetch("https://rocky-gorge-52294.herokuapp.com/")
      ).json()
      setData(res)
    }
    getData()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>{data}</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
