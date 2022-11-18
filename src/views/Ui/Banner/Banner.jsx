import React from "react";
import Card from "../../../components/Card";
import Button from "@mui/material/Button";
import "./style.css";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import almendra from "../../../assets/font/font.json";

extend({ TextGeometry });

const Left = () => (
  <div>
    <div>
      <div className="banner-text">
        <h1>
          <span className="text-gradient">Better Data.</span>
        </h1>
        <h2>
          <span className="text-gradient"> Better AI.Faster AI.</span>
        </h2>
      </div>
      <p className="text-white">
        Better data leads to more performant models. Performant models lead to
        faster deployment. Deliver value from your AI investments faster with
        better data.
      </p>
      <div className="btns">
        <Button variant="outlined" className="banner-btn">
          Get Started
        </Button>
        <Button variant="outlined" className="banner-btn">
          Talk To Sales
        </Button>
      </div>
    </div>
  </div>
);
const Right = () => {
  const font = new FontLoader().parse(almendra);
  return (
    <div className="right">
      <span>AIT</span>
    </div>
  );
};

function Banner() {
  return (
    <div>
      <Card left={<Left />} right={<Right />} />
    </div>
  );
}

export default Banner;
