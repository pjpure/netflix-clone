import React, { useState, useEffect } from "react";
import { Wrapper } from "./Card.styles";
import { BsPlayCircleFill, BsPlusCircle } from "react-icons/bs";
import ReactPlayer from "react-player";
import useWindowDimensions from "../../hooks/useWindowDimensions";

type Props = {
  img: string;
  video: string;
  title: string;
  genres: string;
  numItem: number;
};

const Card: React.FC<Props> = ({ img, video, title, genres, numItem }) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [cardWidth, setCardWidth] = useState<number>(320);
  const [cardHeight, setCardHeight] = useState<number>(180);
  const { width } = useWindowDimensions();
  const handleOnMouseOver = () => {
    setIsPlay(true);
  };

  const handleOnMouseOut = () => {
    setIsPlay(false);
  };

  useEffect(() => {
    let calWidth = (width - (160 + (numItem - 1) * 30)) / numItem;
    setCardWidth(calWidth);
    setCardHeight(Math.floor(calWidth / 1.77778));
  }, [numItem, width]);

  return (
    <div>
      <Wrapper width={cardWidth} height={cardHeight}>
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
              width={cardWidth}
              height={cardHeight}
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
