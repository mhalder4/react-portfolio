import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import { Portfolio, About, Resume, Contact } from './pages';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <div>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>


    </>
  )
}

export default App
