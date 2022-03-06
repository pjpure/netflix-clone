import React from "react";
import "./MainPlayer.css";
import ReactPlayer from "react-player";
import { Button } from "react-bootstrap";
import { BsPlayFill } from "react-icons/bs";
import { BiInfoCircle } from "react-icons/bi";
import yaibaLogo from "../../assets/yaiba.png";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setCard } from "../../app/slices/cardSlice";

function MainPlayer() {
  const card = useAppSelector((state) => state.card);
  const dispatch = useAppDispatch();

  const handleOnMouseOver = (id: string) => {
    dispatch(setCard(id));
  };

  const handleOnMouseOut = () => {
    dispatch(setCard("-1"));
  };
  return (
    <div
      className="player-wrapper"
      onMouseEnter={() => handleOnMouseOver("0")}
      onMouseLeave={handleOnMouseOut}
    >
      <ReactPlayer
        className="react-player"
        playing={card.id === "0" ? true : false}
        loop={true}
        width="100%"
        height="100%"
        controls={false}
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
