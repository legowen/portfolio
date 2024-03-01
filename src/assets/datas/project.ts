// Project img
import moviedb_project_img from "../img/project/moviedb_project_img.png"
import onhanger_project_img from "../img/project/onhanger_project_img.png";
import weather_project_img from "../img/project/weather_project_img.png";
import rockscissorspaper_project_img from "../img/project/rockscissorspaper_project_img.png";
import todolist_project_img from "../img/project/todolist_project_img.png";
import portfolio_project_img from "../img/project/portfolio_project_img.png";

// Project Components Data
export let project_List: {
  src: string;
  alt: string;
  title: string;
  text: string;
  subText: string,
  program: string[];
  siteLink: string;
  codeLink: string;
}[] = [
  {
    src: moviedb_project_img,
    alt: "Movie Database Project Image",
    title: "Movie DB Project",
    text: "Movie Database is service based on the TMDB API, allowing users to explore recommended, popular, top-rated, and upcoming movies. Additionally, users can search for specific movies and access detailed information, including trailers.",
    subText: "",
    program: ["JavaScript", "React", "React Query", "Axios", "Bootstrap"],
    siteLink: "https://dbmoviesinfo.netlify.app",
    codeLink: "https://github.com/legowen/movieinfo-react-query",
  },
  {
    src: onhanger_project_img,
    alt: "OnHanger Project Image",
    title: "OnHanger Project",
    text: "Onhanger is an online clothing ecommerce project. Users can sign up, including via Google email. It encompasses all functions from selecting a product, viewing details on the detail page, to adding to cart, doing payment and completing orders. Admins can add and manage clothes, as well as view order statuses.",
    subText: "",
    program: ["JavaScript", "React", "React Query", "Axios", "MaterialUI", "NodeJS", "MongoDB", "Mongoose"],
    siteLink: "https://onhanger.netlify.app",
    codeLink: "https://github.com/legowen/onhangerfe",
  },
  {
    src: weather_project_img,
    alt: "Weather project image",
    title: "HopeNoRain App Project",
    text: "Hope no rain is a weather app based on a weather API. Users can check today's weather based on their current location if they allow location access, and view temperature, humidity, and wind speed in a graph format. They can also receive a 5-day forecast. Additionally, users can input a city name to receive weather information for that city.",
    subText: "",
    program: ["JavaScript", "React", "Redux", "Sass(SCSS)"],
    siteLink: "https://hopenorain.netlify.app",
    codeLink: "https://github.com/legowen/weather_app",
  },

  {
    src: todolist_project_img,
    alt: "Todolist Project",
    title: "JustPlan ToDo Project",
    text: "Just Plan is a todo list app based on a React, allowing users to manage tasks by adding, editing, or deleting them. It provides options to mark tasks as completed or incomplete and offers easy navigation with buttons like 'All', 'Done', and 'ToDo'.",
    subText: "",
    program: ["JavaScript", "React", "Styled Components"],
    siteLink: "https://justplan.netlify.app",
    codeLink: "https://github.com/legowen/todolist",
  },

  {
    src: rockscissorspaper_project_img,
    alt: "Roshambo Game Project",
    title: "RockScissorsPaper Game Project",
    text: "The Rock Paper Scissors game is built on React, where users select one of the items: rock, paper, or scissors. The computer randomly selects an item, and the result is determined as Win, Lose, or Tie. Winning earns the user 1 point, and they can reset the score at any time using the Reset button.",
    subText: "",
    program: ["JavaScript", "TypeScript", "React", "CSS"],
    siteLink: "https://airoshambo.netlify.app",
    codeLink: "https://github.com/legowen/roshamboTsx",
  },
  
  {
    src: portfolio_project_img,
    alt: "Portfolio project image",
    title: "Portfolio",
    text: "The portfolio site is using TypeScript and serves as a web platform where users can access basic information about me, including contact details, skills, and a summary of my projects. It also provides links to my GitHub profile and resume.",
    subText: "",
    program: ["JavaScript", "TypeScript", "React", "Sass(SCSS)"],
    siteLink: "https://legowen.github.io/portfolio/",
    codeLink: "https://github.com/legowen/portfolio",
  },
];