



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
            <a href={`${props.github}`}>GitHub Repo</a>
            <a href={`${props.demo}`}>See this project in action!</a>
          </div>
        </div>
      </div>
    </>
  )
}