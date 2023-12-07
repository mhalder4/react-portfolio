import { githubIcon, gmailIcon } from "../assets/images/icons"

export default function Footer() {

  return (
    <footer>
      <section id="find-me" className="contact">
        <h3>Find Me</h3>
        <div>
          <section id="github_icon">
            <a href="https://github.com/mhalder4" target="_blank"><img src={githubIcon} alt="Github icon" /></a>
          </section>
          <section id="gmail_icon">
            <a href="mailto:mhalder9555@gmail.com"><img src={gmailIcon} alt="Gmail icon" /></a>
          </section>
        </div>
      </section>
      <div className="small-print">
        &copy; 2023 Matthew Halder <br />
        All icons by <a target="_blank" href="https://icons8.com">Icons8</a><br />
        Other Projects Photo by <a href="https://unsplash.com/@joannakosinska?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joanna Kosinska</a> on <a href="https://unsplash.com/photos/two-gray-pencils-on-yellow-surface-1_CMoFsPfso?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

      </div>
    </footer>
  )
}