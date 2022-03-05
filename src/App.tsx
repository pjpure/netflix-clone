import "./App.css";

import NavBar from "./layouts/NavBar/NavBar";
import Footer from "./layouts/Footer/Footer";
import MainPlayer from "./components/MainPlayer/MainPlayer";
import MultiItemCarousel from "./components/MultiItemCarousel/MultiItemCarousel";
import movies from "./data/movies";
import animes from "./data/animes";
import series from "./data/series";
import mylists from "./data/mylists";
function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPlayer />
      <div className="list">
        <MultiItemCarousel type={"Movies"} data={movies} />
        <MultiItemCarousel type={"Animes"} data={animes} />
        <MultiItemCarousel type={"Series"} data={series} />
        <MultiItemCarousel type={"My List"} data={mylists} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
