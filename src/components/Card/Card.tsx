import { Wrapper } from "./Card.styles";
import { BsPlayCircle } from "react-icons/bs";

type Props = {
  img: string;
  video: string;
};

const Card: React.FC<Props> = ({ img, video }) => {
  const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  };

  const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
  };

  return (
    <Wrapper>
      <div className="contents">
        <img src={img} alt="poster" />
        <video
          loop
          preload="none"
          //muted // Needs to be there to be able to play
          onMouseOver={handleOnMouseOver}
          onMouseOut={handleOnMouseOut}
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="details">
        <BsPlayCircle size={30} />
      </div>
    </Wrapper>
  );
};

export default Card;
