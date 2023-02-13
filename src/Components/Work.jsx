import React from "react";
import "./mycard.css";
import MyCard from "./MyCard";
import WorkCardData from "./WorkCardData";
const Work = () => {
  return (
    <div className="MyCard-cont">
      <h1 className="projectHead"> PROJECTS</h1>
      <div className="ProjectCont">
        {WorkCardData.map((val, ind) => {
          return (
            <MyCard
              key={ind}
              image={val.image}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
