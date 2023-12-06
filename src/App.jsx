import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      {/* <Portfolio></Portfolio>
      <About></About> */}
      {/* <Resume></Resume> */}
      <Contact></Contact>

      <Footer></Footer>


    </>
  )
}

export default App
