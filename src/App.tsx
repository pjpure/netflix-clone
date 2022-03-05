import "./App.css";

import NavBar from "./layouts/NavBar/NavBar";
import Footer from "./layouts/Footer/Footer";
import MainPlayer from "./components/MainPlayer/MainPlayer";
import MultiItemCarousel from "./components/MultiItemCarousel/MultiItemCarousel";
import movies from "./data/movies";
import animes from "./data/animes";
function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <br />
      <br />
      <MainPlayer />
      <MultiItemCarousel type={"Movies"} data={movies} />
      <MultiItemCarousel type={"Animes"} data={animes} />
      <Footer />
    </div>
  );
}

export default App;
