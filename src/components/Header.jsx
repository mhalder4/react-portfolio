


export default function Header(props) {

  return (
    <header>
      <nav className="container-fluid row">
        <div className="col-6">
          <h2 className="name">Matt <span className="last">Halder</span></h2>
        </div>
        <div className="col-6 d-flex justify-content-around align-items-center">
          <button className="button">
            Portfolio
          </button>
          <button className="button">
            About Me
          </button>
          <button className="button">
            Contact Me
          </button>
          <button className="button">
            Resume
          </button>
        </div>

      </nav>
    </header>
  )
}