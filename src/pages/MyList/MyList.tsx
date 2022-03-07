import React, { useState, useEffect } from "react";
import NavBar from "../../layouts/NavBar/NavBar";
import Footer from "../../layouts/Footer/Footer";
import { useAppSelector } from "../../app/hooks";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Card from "../../components/Card/Card";
import "./MyList.css";
function MyList() {
  const myList = useAppSelector((state) => state.myList);
  const [numItem, setNumItem] = useState(5);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 650) {
      setNumItem(1);
    } else if (width < 890) {
      setNumItem(2);
    } else if (width < 1320) {
      setNumItem(3);
    } else if (width < 1580) {
      setNumItem(4);
    } else {
      setNumItem(5);
    }
  }, [width]);
  //const dispatch = useAppDispatch();
  console.log(myList);
  return (
    <div>
      <NavBar />
      <div className="my-list">
        <h4>My List</h4>
        <div className="list">
          {myList.map((item, index) => {
            return (
              <Card
                key={index}
                video={item}
                numItem={numItem}
                action="delete"
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyList;
