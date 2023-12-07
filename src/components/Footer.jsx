import githubLogo from "../assets/images/github-icon.png";
import gmailLogo from "../assets/images/gmail-icon.png";

export default function Footer() {

  return (
    <footer>
      <section id="find-me" className="contact">
        <h3>Find Me</h3>
        <div>
          <section id="github_icon">
            <a href="https://github.com/mhalder4"><img src={githubLogo} alt="Github icon" /></a>
          </section>
          <section id="gmail_icon">
            <a href="mailto:mhalder9555@gmail.com"><img src={gmailLogo} alt="Gmail icon" /></a>
          </section>
        </div>
      </section>
      <div className="small-print">
        &copy; 2023 Matthew Halder <br />
        All icons by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    </footer>
  )
}