import "./MainPlayer.css";
import ReactPlayer from "react-player";
import { Button } from "react-bootstrap";
import { BsPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import yaibaLogo from "../../assets/yaiba.png";
import { useWindowScrollPositions } from "../../hooks/useWindowScrollPositions";
function MainPlayer() {
  const { scrollY } = useWindowScrollPositions();
  const elmnt = document.getElementById("main-player");
  let elmntHight = elmnt ? elmnt.offsetHeight : 0;
  return (
    <div id="main-player" className="player-wrapper">
      <ReactPlayer
        className="react-player"
        playing={scrollY < elmntHight - 100 ? true : false}
        loop={true}
        width="100%"
        height="100%"
        controls={false}
        volume={0.5}
        url="https://www.youtube.com/watch?v=UTHhhQQhmYc"
      />

      <div className="logo">
        <span>Demon Slayer</span>
        <img src={yaibaLogo} alt="logo" />
      </div>
      <Button className="play-btn">
        <BsPlayFill size={30} />
        Play
      </Button>
      <Button className="more-btn">
        <BiInfoCircle size={30} /> More Info
      </Button>
    </div>
  );
}

export default MainPlayer;
