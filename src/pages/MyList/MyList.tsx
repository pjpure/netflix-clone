import React from "react";
import NavBar from "../../layouts/NavBar/NavBar";
import Footer from "../../layouts/Footer/Footer";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Card from "../../components/Card/Card";
import "./MyList.css";
function MyList() {
  const myList = useAppSelector((state) => state.myList);
  //const dispatch = useAppDispatch();
  console.log(myList);
  return (
    <div>
      <NavBar />
      <div className="my-list">
        {myList.map((item, index) => {
          return <Card key={index} video={item} numItem={3} action="delete" />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default MyList;
