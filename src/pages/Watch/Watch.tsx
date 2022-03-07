import ReactPlayer from "react-player";
import "./Watch.css";
import { BiArrowBack } from "react-icons/bi";
import { useParams, useNavigate } from "react-router-dom";
import { useWatch } from "../../hooks/useVideos";
function Watch() {
  const { id } = useParams();
  const { data, isLoading, error } = useWatch(id);
  const navigate = useNavigate();
  if (error) {
    alert("Something went wrong");
    navigate("/");
  }

  // const [isHide, setIsHide] = useState(false);

  // const [delayHandler, setDelayHandler] =
  //   useState<ReturnType<typeof setTimeout>>();

  // const handleMouseMove = (event: any) => {
  //   if (delayHandler) {
  //     clearTimeout(delayHandler);
  //   }
  //   setIsHide(false);
  //   setDelayHandler(
  //     setTimeout(() => {
  //       setIsHide(true);
  //     }, 5000)
  //   );
  // };

  return (
    <div className="watch">
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <div>
          <div onClick={() => navigate("/")} className="back">
            <BiArrowBack size={50} />
          </div>
          <ReactPlayer
            className="react-player"
            playing={true}
            loop={true}
            width="100%"
            height="100%"
            controls={true}
            volume={0.5}
            url={data?.video}
          />
        </div>
      )}
    </div>
  );
}

export default Watch;
