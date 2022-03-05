import React, { useState } from "react";
import { Wrapper } from "./Card.styles";
import { BsPlayCircleFill, BsPlusCircle } from "react-icons/bs";
import ReactPlayer from "react-player";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type Props = {
  img: string;
  video: string;
  title: string;
  genres: string;
};

const Card: React.FC<Props> = ({ img, video, title, genres }) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const handleOnMouseOver = () => {
    setIsPlay(true);
  };

  const handleOnMouseOut = () => {
    setIsPlay(false);
  };

  return (
    <div>
      <Wrapper width={320} height={180}>
        <div className="contents">
          <img src={img} alt="poster" />
          <div
            className="video-wrapper"
            onMouseOver={handleOnMouseOver}
            onMouseOut={handleOnMouseOut}
          >
            <ReactPlayer
              playing={isPlay}
              loop={true}
              width={320}
              height={180}
              url={video}
              muted={true}
            />
          </div>
        </div>

        <div className="details">
          <div className="details-icon">
            <BsPlayCircleFill size={25} />
            <BsPlusCircle size={25} />
          </div>
          <div className="details-des">
            <h5>{title}</h5>
            <p>{genres}</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Card;
