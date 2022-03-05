import React, { useState } from "react";
import "./MainPlayer.css";
import ReactPlayer from "react-player";
import { Button } from "react-bootstrap";
import { BsPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import yaibaLogo from "../../assets/yaiba.png";
function MainPlayer() {
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const handleOnMouseOver = () => {
    setIsPlay(true);
  };

  const handleOnMouseOut = () => {
    setIsPlay(false);
  };
  return (
    <div onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOut}>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          playing={isPlay}
          loop={true}
          width="100%"
          height="100%"
          controls={false}
          url="https://www.youtube.com/watch?v=UTHhhQQhmYc"
        />
      </div>
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
