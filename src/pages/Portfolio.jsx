import PortfolioItem from "../components/PortfolioItem";


const portfolioItems = [
  {
    id: 1,
    name: "Project 1",
    github: "https://github.com/mhalder4/group-project-1"
  }
]



export default function Portfolio() {
  return (
    <main>
      <div class="test container-fluid row d-flex justify-content-around align-items-center">
        <div class="col-10 test2 row d-flex justify-content-around align-items-center">
          <PortfolioItem key={portfolioItems[0].id} name={portfolioItems[0].name} github={portfolioItems[0].github} ></PortfolioItem>
        </div>
      </div>
    </main>
  );
}