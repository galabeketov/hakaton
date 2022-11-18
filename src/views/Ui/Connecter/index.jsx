import React from "react";
import ImageCard from "../../../components/ImageCard";
import "./style.css";

function Connecter() {
  return (
    <div className="connecter">
      <ImageCard text={"Annotate"} />
      <ImageCard text={"Manage"} />
      <ImageCard text={"Automate"} />
      <ImageCard text={"Evaluate"} />
      <ImageCard text={"Collect"} />
      <ImageCard text={"Generate"} />
    </div>
  );
}

export default Connecter;
