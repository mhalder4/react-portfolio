import { Link } from "react-router-dom";


export default function Header() {



  return (
    <header>
      <nav className="container-fluid row">
        <div className="col-md-6 col-12">
          <h2 className="name">Matt <span className="last">Halder</span></h2>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-around align-items-center">
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