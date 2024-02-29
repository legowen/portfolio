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
    text: "Movie DB Web Service created by calling the TMDB API.",
    subText: "This is a movie website created by calling the TMDB API. When calling the original TMDB API with fetch, I had to filter the received movie data and send it to the component by storing it in the state. By using the select option of React Query, I could easily extract movie data, and additionally, by setting the baseURL of axios.create, I could simplify common API call code and use the API key received through env environment variables. Also, by using QueryClientProvider, I could use the function to call data in other components as well. Currently, I'm working on using React Loading Skeleton to show users a Skeleton component while loading using the isLoading provided by React Query.",
    program: ["JavaScript", "React", "React Query", "Axios", "Bootstrap"],
    siteLink: "https://dbmoviesinfo.netlify.app",
    codeLink: "https://github.com/legowen/movieinfo-react-query",
  },
  {
    src: onhanger_project_img,
    alt: "OnHanger Project Image",
    title: "OnHanger Project",
    text: "OnHanger website where you can manage everything from administration to orders.",
    subText: "",
    program: ["JavaScript", "React", "React Query", "Axios", "MaterialUI", "NodeJS", "MongoDB", "Mongoose", "AWS"],
    siteLink: "https://shoppingmallfe.netlify.app",
    codeLink: "https://github.com/legowen/ShoppingmallFE",
  },
  {
    src: weather_project_img,
    alt: "Weather project image",
    title: "HopeNoRain App Project",
    text: "Weather App project created by calling the Weather API.",
    subText: "If the user grants location access, the Weather API is called through a Redux Action, and the State managed in the Reducer is passed to other components using useSelector and updated on the screen. Additionally, by adding a live search feature, users can easily understand city name information, allowing them to obtain weather information for the entered city name. Initially, loading spinner showed loading information when the data was updated, but I tried using React Loading Skeleton to make it possible to guess the data information.",
    program: ["JavaScript", "React", "Redux", "Sass(SCSS)"],
    siteLink: "https://hopenorain.netlify.app",
    codeLink: "https://github.com/legowen/weather_app",
  },

  {
    src: todolist_project_img,
    alt: "Todolist Project",
    title: "JustPlan ToDo Project",
    text: "To-do list created using React.",
    subText: "I've created a UI example to show users using seed data generated and stored in local storage. I've also attempted to make it possible for the local storage data to be updated according to conditions when tasks are added, modified, or deleted. By using the commonly used map and filter in React, I've created a way to display and filter the stored data list.",
    program: ["JavaScript", "React", "Styled Components"],
    siteLink: "https://justplan.netlify.app",
    codeLink: "https://github.com/legowen/todolist",
  },

  {
    src: rockscissorspaper_project_img,
    alt: "Roshambo Game Project",
    title: "RockScissorsPaper Game Project",
    text: "Rock-Paper-Scissors game built on TypeScript.",
    subText: "The user selects one of three items to start the game, and the computer randomly selects an item. The result is displayed on the screen, and the win/loss data and score data are updated in local storage. Since this was my first project using TypeScript, I made an effort to specify types for all data, and by resolving the local storage string | null type error, I was able to reconsider what type of data was being stored. Finally, when I initially started the project, importing images caused a module error, but I was able to resolve it by storing image modules in custom.d.ts and importing them.",
    program: ["JavaScript", "TypeScript", "React", "CSS"],
    siteLink: "https://airoshambo.netlify.app",
    codeLink: "https://github.com/legowen/roshamboTsx",
  },
  
  {
    src: portfolio_project_img,
    alt: "Portfolio project image",
    title: "Portfolio",
    text: "Portfolio website to showcase personal projects.",
    subText: "On the HOME screen, I used the setInterval function to add Text to the State while giving it a typing effect, and I used useEffect to add an addEventListener scroll event to change the background image's position Y value. Each menu is stored in the form of a useRef object and tracked with IntersectionObserver to trigger events when it appears on the screen. Instead of leaving useRef as a simple empty value, I made it an empty array to resolve TypeScript errors. To resolve the MutableRefObject error when passing Ref as Props, I searched for a blog and learned that there are more than three options for Ref's Props.",
    program: ["JavaScript", "TypeScript", "React", "Sass(SCSS)"],
    siteLink: "https://legowen.github.io/portfolio/",
    codeLink: "https://github.com/legowen/portfolio",
  },
];