



export default function PortfolioItem(props) {
  return (
    <>
      <div key={`${props.key}`} class="col-5 portfolio-item">
        <div class="position-relative border border-dark">
          <img src="https://www.w3schools.com/css/img_5terre.jpg" class="project" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" />

          <p class="img-text position-absolute top-50 start-50 translate-middle">{props.name}<br /> Click To See
            Details
          </p>

          <img />
        </div>
        <div class="collapse" id="collapseExample">
          <div class="card card-body">
            <a href={`${props.github}`}>GitHub Repo</a>
          </div>
        </div>
      </div>
    </>
  )
}