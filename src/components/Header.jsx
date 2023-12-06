


export default function Header(props) {

  return (
    <header>
      <nav class="container-fluid row">
        <div class="col-6">
          <h2 class="name">Matt <span class="last">Halder</span></h2>
        </div>
        <div class="col-6 d-flex justify-content-around align-items-center">
          <button class="button">
            Portfolio
          </button>
          <button class="button">
            About Me
          </button>
          <button class="button">
            Contact Me
          </button>
          <button class="button">
            Resume
          </button>
        </div>

      </nav>
    </header>
  )
}