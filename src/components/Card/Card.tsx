import React, { useState, useEffect } from "react";
import { Wrapper } from "./Card.styles";
import { BsPlayCircleFill, BsPlusCircle } from "react-icons/bs";
import ReactPlayer from "react-player";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { setCard } from "../../app/slices/cardSlice";
type Props = {
  id: string;
  img: string;
  video: string;
  title: string;
  genres: string;
  numItem: number;
};

const Card: React.FC<Props> = ({ id, img, video, title, genres, numItem }) => {
  const [cardWidth, setCardWidth] = useState<number>(320);
  const [cardHeight, setCardHeight] = useState<number>(180);
  const { width } = useWindowDimensions();

  const card = useAppSelector((state) => state.card);
  const dispatch = useAppDispatch();

  const handleOnMouseOver = (id: string) => {
    dispatch(setCard(id));
  };

  const handleOnMouseOut = () => {
    dispatch(setCard("-1"));
  };

  useEffect(() => {
    let calWidth = (width - (160 + (numItem - 1) * 30)) / numItem;
    setCardWidth(calWidth);
    setCardHeight(Math.floor(calWidth / 1.77778));
  }, [numItem, width]);

  return (
    <div
      onMouseEnter={() => handleOnMouseOver(id)}
      onMouseLeave={handleOnMouseOut}
    >
      <Wrapper
        isSelected={card.id === id ? true : false}
        width={cardWidth}
        height={cardHeight}
      >
        <div className="contents">
          <img src={img} alt="poster" />
          <div className="video-wrapper">
            <ReactPlayer
              playing={card.id === id ? true : false}
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
