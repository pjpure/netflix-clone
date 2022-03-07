import React, { useState, useEffect } from "react";
import { Wrapper } from "./Card.styles";
import { BsPlayCircleFill, BsPlusCircle, BsDashCircle } from "react-icons/bs";
import ReactPlayer from "react-player";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useAppDispatch } from "../../app/hooks";
import { addToList, removeFromList } from "../../app/slices/myListSlice";
import { useNavigate } from "react-router-dom";
type Video = {
  id: string;
  type: string;
  img: string;
  video: string;
  title: string;
  genres: string;
};

type Props = {
  video: Video;
  numItem: number;
  action: string;
};

const Card: React.FC<Props> = ({ video, numItem, action }) => {
  const [cardWidth, setCardWidth] = useState<number>(320);
  const [cardHeight, setCardHeight] = useState<number>(180);
  const { width } = useWindowDimensions();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isPlay, setIsPlay] = useState(false);
  const [isEnter, setIsEnter] = useState(false);
  const [delayHandler, setDelayHandler] =
    useState<ReturnType<typeof setTimeout>>();

  const [delayHandlerEnter, setDelayHandlerEnter] =
    useState<ReturnType<typeof setTimeout>>();

  const handleMouseEnter = (event: any) => {
    setDelayHandlerEnter(
      setTimeout(() => {
        setIsEnter(true);
      }, 200)
    );
    setDelayHandler(
      setTimeout(() => {
        setIsPlay(true);
      }, 1000)
    );
  };

  const handleMouseLeave = () => {
    setIsEnter(false);
    setIsPlay(false);

    if (delayHandlerEnter) {
      clearTimeout(delayHandlerEnter);
    }
    if (delayHandler) {
      clearTimeout(delayHandler);
    }
  };

  useEffect(() => {
    let calWidth = (width - (160 + (numItem - 1) * 30)) / numItem;
    calWidth = Math.floor(calWidth);
    setCardWidth(calWidth);
    setCardHeight(Math.floor(calWidth / 1.77778));
  }, [numItem, width]);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Wrapper isSelected={isEnter} width={cardWidth} height={cardHeight}>
        <div className="contents">
          <img src={video.img} alt="poster" />
          <div className="video-wrapper">
            <ReactPlayer
              playing={isPlay}
              loop={true}
              width={cardWidth}
              height={cardHeight}
              url={video.video}
              muted={true}
            />
          </div>
        </div>

        <div className="details">
          <div className="details-icon">
            <BsPlayCircleFill
              size={25}
              onClick={() => navigate(`/watch/${video.id}`)}
            />
            {action === "add" && (
              <BsPlusCircle
                size={25}
                onClick={() => dispatch(addToList(video))}
              />
            )}

            {action === "delete" && (
              <BsDashCircle
                size={25}
                onClick={() => dispatch(removeFromList(video.id))}
              />
            )}
          </div>
          <div className="details-des">
            <h5>{video.title}</h5>
            <p>{video.genres}</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Card;
