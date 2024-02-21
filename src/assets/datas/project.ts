// Project img
import netflix_project_img from "../img/project/netflix_project_img.png"
import portfolio_project_img from "../img/project/portfolio_project_img.png";
import weather_project_img from "../img/project/weather_project_img.png";
import rockscissorspaper_project_img from "../img/project/rockscissorspaper_project_img.png";
import todolist_project_img from "../img/project/todolist_project_img.png";
import disney_project_img from "../img/project/disney_project_img.png";

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
    src: netflix_project_img,
    alt: "넷플릭스 프로젝트 이미지",
    title: "넷플릭스 프로젝트",
    text: "TMDB API를 호출하여 제작한 영화 사이트입니다.",
    subText: "기존 TMDB API를 fetch로 호출할경우 받아온 영화 데이터를 필터링 작업까지해야 사용할 수 있었고 Component에 영화데이터를 보낼때는 State에 담아서 보내야했습니다. React Query의 select옵션을 통해서 영화데이터를 쉽게 추출할 수 있었고 추가적으로 axios.create의 baseURL을 설정함으로써 공통적인 API호출 코드를 간략화 하고 env환경변수로 받아온 API키를 사용할 수 있었습니다. 또한 QueryClientProvider를 통해서 데이터를 호출하는 함수를 다른 Component에서도 사용할 수 있었습니다. 현재는 React Query에서 제공하는 isLoading을 React Loading Skeleton을 활용하여 로딩하는 동안 사용자에게 Skeleton 컴포넌트를 보여줄 수 있도록 처리하려고 작업 중에 있습니다.",
    program: ["JavaScript", "React", "React Query", "Axios", "Bootstrap"],
    siteLink: "https://yun7420.github.io/netflix-demo-2024/",
    codeLink: "https://github.com/Yun7420/netflix-demo-2024",
  },
  {
    src: portfolio_project_img,
    alt: "포트폴리오 사이트 이미지",
    title: "포트폴리오 사이트",
    text: "이력정보 및 개인 프로젝트를 보여주기 위한 포트폴리오 사이트입니다.",
    subText: "HOME 화면에서는 setInterval 함수를 통해 State에 Text를 담으면서 타이핑 효과를 주었으며 useEffect에 addEventListener 스크롤 이벤트를 주면서 배경 이미지 position Y 값이 변경될 수 있도록 하였습니다. 각각의 메뉴들은 useRef 객체 형태로 담아 IntersectionObserver로 추적해 화면에 표출될 경우 이벤트를 발생시킬 수 있도록 하였으며 useRef를 단순 빈값으로 두는 게 아닌 타입 스크립트 오류를 해결하기 위해 빈 배열로 만들었습니다. Ref를 Props로 넘겼을 때 MutableRefObject 오류를 해결하기 위해 블로그를 찾아보았으며 Ref의 Props 옵션은 3가지 이상 된다는 것을 알게 되었습니다.",
    program: ["JavaScript", "TypeScript", "React", "Sass(SCSS)"],
    siteLink: "https://yun7420.github.io/portfolio-2023/",
    codeLink: "https://github.com/Yun7420/portfolio-2023",
  },
  {
    src: weather_project_img,
    alt: "날씨 프로젝트 이미지",
    title: "날씨 프로젝트",
    text: "Weather API를 호출하여 제작한 날씨 프로젝트입니다.",
    subText: "사용자가 위치 액세스를 허용할 경우 Redux Action을 통해 Weather API를 호출한 후 Reducer에서 관리되는 State가 useSelector을 통해 다른 Component 들에 전달되어 화면에 업데이트됩니다. 추가적으로 도시 이름을 입력할 경우 해당 도시의 날씨 정보를 얻을 수 있는데 라이브 서치 기능을 추가함으로써 도시 이름 정보를 쉽게 파악할 수 있도록 하였습니다. 처음에는 데이터가 업데이트될떄 Loading Spinner로 로딩 정보를 보여줬지만 React Loading Skeleton을 활용하여 데이터 정보를 추측할 수 있도록 만들어보았습니다.",
    program: ["JavaScript", "React", "Redux", "Sass(SCSS)"],
    siteLink: "https://yun7420.github.io/weather-2023/",
    codeLink: "https://github.com/Yun7420/weather-2023",
  },
  {
    src: rockscissorspaper_project_img,
    alt: "가위바위보 게임 미니프로젝트 이미지",
    title: "가위바위보 게임 미니프로젝트",
    text: "타입스크립트를 기반으로 만든 가위바위보 게임 미니 프로젝트입니다.",
    subText: "사용자는 게임을 시작하기 위해 3가지의 아이템 중 하나를 선택하면 컴퓨터는 무작위로 아이템을 선택합니다. 결과를 확인하고 승패 데이터 및 스코어 데이터가 로컬 스토리지에 업데이트되며 화면에 표출됩니다. 타입 스크립트를 처음 사용해 본 프로젝트이기에 모든 데이터에 타입을 지정해 보도록 노력하였으며 로컬 스토리지 string | null 타입 오류를 해결해 봄으로써 데이터가 저장될 때 어떤 타입이 들어가는지 다시 한번 더 생각해 볼 수 있었습니다. 마지막으로 처음 프로젝트를 시작했을 때 이미지를 import하면 모듈 오류가 발생했는데 custom.d.ts에 이미지 모듈들을 저장해 불러올 수 있었습니다.",
    program: ["JavaScript", "TypeScript", "React", "CSS"],
    siteLink: "https://yun7420.github.io/rockscissorspaper-2023/",
    codeLink: "https://github.com/Yun7420/rockscissorspaper-2023",
  },
  {
    src: todolist_project_img,
    alt: "할일목록 미니프로젝트 이미지",
    title: "할일목록 미니프로젝트",
    text: "리액트를 통해 만들어본 할일 목록 미니 프로젝트입니다.",
    subText: "사용자에게 보여줄 UI 적 예시를 seed 데이터를 생성하여 로컬 스토리지에 담아두었으며, 할일을 추가, 수정, 삭제했을 때 조건문에 따라 로컬 스토리지 데이터가 업데이트될 수 있도록 만들어보았습니다. React에서 자주 사용되는 map과 filter를 사용함으로써 저장된 데이터 목록을 보여주고 필터링할 수 있도록 제작해 보았습니다.",
    program: ["JavaScript", "React", "Styled Components"],
    siteLink: "https://yun7420.github.io/todo_list-2023/",
    codeLink: "https://github.com/Yun7420/todo_list-2023",
  },
  {
    src: disney_project_img,
    alt: "디즈니 클론 프로젝트 이미지",
    title: "디즈니 클론 프로젝트",
    text: "리액트를 사용해 보기 전 만들어본 디즈니 영화 사이트입니다.",
    subText: "영화 목록을 클릭했을 때 영화 디테일 페이지로 이동하며 모든 페이지의 디자인은 동일하고 데이터만 바뀌는 형식입니다. 이러한 형식을 보면서 React의 Component의 재활용성을 느낄 수 있었으며 map 혹은 filter 같은 자바스크립트 코드가 필요하다는 것을 느낄 수 있었습니다.",
    program: ["HTML", "CSS", "JavaScript"],
    siteLink: "https://disney-clone-2023.netlify.app/",
    codeLink: "https://github.com/Yun7420/disney-clone-project",
  },
];