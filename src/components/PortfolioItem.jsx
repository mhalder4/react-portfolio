import githubIcon from "../assets/images/github-icon.png"
import playIcon from "../assets/images/play-button-icon.png"



export default function PortfolioItem(props) {
  // console.log(props);

  return (
    <>
      <div className="portfolio-item">
        <div className="position-relative border border-dark">
          <img src={`${props.image}`} className="project" type="button" data-bs-toggle="collapse"
            data-bs-target={`#collapse-${props.id}`} aria-expanded="false" aria-controls="collapseExample" />

          <p className="img-text position-absolute top-50 start-50 translate-middle">{props.name}<br /> Click To See
            Details
          </p>

          <img />
        </div>
        <div className="collapse" id={`collapse-${props.id}`}>
          <div className="card card-body">
            Repo<a href={`${props.github}`}><img src={githubIcon} alt="A GitHub icon"></img></a>
            See this project in action!<a href={`${props.demo}`}><img src={playIcon} alt="A play button icon"></img></a>
          </div>
        </div>
      </div>
    </>
  )
}