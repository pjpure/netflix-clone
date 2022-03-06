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

  const [isPlay, setIsPlay] = useState(false);
  const [isEnter, setIsEnter] = useState(false);
  const [delayHandler, setDelayHandler] =
    useState<ReturnType<typeof setTimeout>>();

  const [delayHandlerEnter, setDelayHandlerEnter] =
    useState<ReturnType<typeof setTimeout>>();

  const handleMouseEnter = (event: any) => {
    //setIsEnter(true);
    setDelayHandlerEnter(
      setTimeout(() => {
        setIsEnter(true);
      }, 200)
    );
    setDelayHandler(
      setTimeout(() => {
        //setIsPlay(true);
        dispatch(setCard(id));
      }, 2000)
    );
  };

  const handleMouseLeave = () => {
    setIsEnter(false);
    //setIsPlay(false);
    dispatch(setCard("-1"));
    if (delayHandlerEnter) {
      clearTimeout(delayHandlerEnter);
    }
    if (delayHandler) {
      clearTimeout(delayHandler);
    }
  };

  useEffect(() => {
    let calWidth = (width - (160 + (numItem - 1) * 30)) / numItem;
    setCardWidth(calWidth);
    setCardHeight(Math.floor(calWidth / 1.77778));
  }, [numItem, width]);

  useEffect(() => {
    if (card.id === id) {
      setIsPlay(true);
    } else {
      setIsPlay(false);
    }
  }, [card, id]);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Wrapper isSelected={isEnter} width={cardWidth} height={cardHeight}>
        <div className="contents">
          <img src={img} alt="poster" />
          <div className="video-wrapper">
            <ReactPlayer
              playing={isPlay}
              loop={true}
              width={cardWidth}
              height={cardHeight}
              url={video}
              // muted={true}
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
