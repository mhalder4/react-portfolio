import { Link } from "react-router-dom";

// const portfolioBtnElem = document.querySelector(".portfolio-btn");

export default function Header() {



  return (
    <header>
      <nav className="container-fluid row">
        <div className="col-6">
          <h2 className="name">Matt <span className="last">Halder</span></h2>
        </div>
        <div className="col-6 d-flex justify-content-around align-items-center">
          <Link to="/">
            <button className="button" >
              Portfolio
            </button>
          </Link>
          <Link to="/about">
            <button className="button" >
              About Me
            </button>
          </Link>
          <Link to="/contact">
            <button className="button">
              Contact Me
            </button>
          </Link>
          <Link to="/resume">
            <button className="button">
              Resume
            </button>
          </Link>
        </div>

      </nav>
    </header>
  )
}