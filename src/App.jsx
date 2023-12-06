import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Portfolio></Portfolio>
      <About></About>

      <Footer></Footer>


    </>
  )
}

export default App
