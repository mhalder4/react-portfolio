import PortfolioItem from "../components/PortfolioItem";
import { flashcards, employeeTrack, social, weather, ecommerce, quiz, passwordGen, other } from "../assets/images/projects";

// Keeps track of the info for the portfolio items
const portfolioItems = [
  {
    id: 1,
    name: "Flash Cards for Students",
    image: flashcards,
    alt: "A picture of the Flash Card for Students project.",
    github: "https://github.com/mhalder4/flash-card-database",
    demo: "https://flash-card-database-b48354848dbb.herokuapp.com/"
  },
  {
    id: 2,
    name: "CLI Employee Tracker",
    image: employeeTrack,
    alt: "A picture of the CLI Employee Tracker project.",
    github: "https://github.com/mhalder4/employee-tracker-challenge",
    demo: "https://drive.google.com/file/d/1GXFzdpQtn0_gBqiX7UaQpLUda8VCbMpJ/view"
  },
  {
    id: 3,
    name: "Mongo Social Network API",
    image: social,
    alt: "A picture of the Mongo Social Network API project.",
    github: "https://github.com/mhalder4/social-network-api-challenge",
    demo: "https://drive.google.com/file/d/1Nk23D1FDd4cQxP7wuKR7OMISHndOqojp/view"
  },
  {
    id: 4,
    name: "Third-Party API Weather Dashboard",
    image: weather,
    alt: "A picture of the Third-Party API Weather Dashboard project.",
    github: "https://github.com/mhalder4/weather-dashboard-challenge",
    demo: "https://mhalder4.github.io/weather-dashboard-challenge/"
  },
  {
    id: 5,
    name: "MySQL E-Commerce API",
    image: ecommerce,
    alt: "A picture of the MySQL E-Commerce API project.",
    github: "https://github.com/mhalder4/ecommerce-back-end-challenge",
    demo: "https://drive.google.com/file/d/17sU_sRHurHT53oKL7Dn7k_M121vyu0Dr/view"
  },
  {
    id: 6,
    name: "Coding Quiz",
    image: quiz,
    alt: "A picture of the Coding Quiz project.",
    github: "https://github.com/mhalder4/coding-quiz-challenge",
    demo: "https://mhalder4.github.io/coding-quiz-challenge/"
  },
  {
    id: 7,
    name: "Random Pasword Generator",
    image: passwordGen,
    alt: "A picture of the Random Pasword Generator project.",
    github: "https://github.com/mhalder4/password-generator-challenge",
    demo: "https://mhalder4.github.io/password-generator-challenge/"
  },
  {
    id: 8,
    name: "I have other projects as well!",
    image: other,
    alt: "A picture of a pencil on a yellow background.",
    github: "https://github.com/mhalder4?tab=repositories",
    demo: "https://github.com/mhalder4?tab=repositories"
  },

];

// Generates the portfolio item components by looping through the array above
const portfolioItemComps = portfolioItems.map(comp => {
  return <div key={comp.id} className="col-xl-5 col-12 my-3">
    <PortfolioItem id={comp.id} image={comp.image} name={comp.name} github={comp.github} demo={comp.demo} ></PortfolioItem>
  </div>
})


export default function Portfolio() {


  return (
    <main>
      <div className="project-box container-fluid row d-flex justify-content-around align-items-center">
        <h2 className="title col-9 my-5">Portfolio</h2>
        <div className="col-10 row d-flex justify-content-around align-items-center">
          {portfolioItemComps}
        </div>
      </div>
    </main>
  );
}