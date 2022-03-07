import MainPlayer from "../../components/MainPlayer/MainPlayer";
import MultiItemCarousel from "../../components/MultiItemCarousel/MultiItemCarousel";
import { useMovies, useAnimes, useSeries } from "../../hooks/useVideos";
import NavBar from "../../layouts/NavBar/NavBar";
import Footer from "../../layouts/Footer/Footer";

function Home() {
  const { data: movies, isLoading: isLoadingMovies } = useMovies();
  const { data: series, isLoading: isLoadingSeries } = useSeries();
  const { data: animes, isLoading: isLoadingAnimes } = useAnimes();

  return (
    <div>
      <NavBar />
      <MainPlayer />
      <div className="list">
        {isLoadingMovies ? (
          <MultiItemCarousel type={"Loading..."} data={[]} />
        ) : (
          <MultiItemCarousel type={"Movies"} data={movies} />
        )}

        {isLoadingSeries ? (
          <MultiItemCarousel type={"Loading..."} data={[]} />
        ) : (
          <MultiItemCarousel type={"Series"} data={series} />
        )}
        {isLoadingAnimes ? (
          <MultiItemCarousel type={"Loading..."} data={[]} />
        ) : (
          <MultiItemCarousel type={"Animes"} data={animes} />
        )}
        {isLoadingMovies ? (
          <MultiItemCarousel type={"Loading..."} data={[]} />
        ) : (
          <MultiItemCarousel type={"Movies"} data={movies} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
