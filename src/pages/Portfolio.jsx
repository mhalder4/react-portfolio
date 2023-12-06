import PortfolioItem from "../components/PortfolioItem";
import comingSoon from "../assets/images/coming_soon.jpg"

const portfolioItems = [
  {
    id: 1,
    name: "Project 1",
    image: comingSoon,
    github: "https://github.com/mhalder4/group-project-1",
    demo: "Placeholder"
  },
  {
    id: 2,
    name: "Project 2",
    image: comingSoon,
    github: "https://github.com/mhalder4/employee-tracker-challenge",
    demo: "Placeholder"
  },

];

const portfolioItemComps = portfolioItems.map(comp => {
  return <div key={comp.id} className="col-5 my-3">
    <PortfolioItem id={comp.id} image={comp.image} name={comp.name} github={comp.github} demo={comp.demo} ></PortfolioItem>
  </div>
})

// console.log(portfolioItems[0].image)


export default function Portfolio() {
  return (
    <main>
      <div className="test container-fluid row d-flex justify-content-around align-items-center">
        <div className="col-10 test2 row d-flex justify-content-around align-items-center">
          {portfolioItemComps}
        </div>
      </div>
    </main>
  );
}