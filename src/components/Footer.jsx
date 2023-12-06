import githubLogo from "../assets/images/github_icon.png";
import gmailLogo from "../assets/images/gmail_icon.png";

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
      &copy; 2023 Matthew Halder
    </footer>
  )
}