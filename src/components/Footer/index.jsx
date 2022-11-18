import React from "react";
import Card from "../Card";
import "./style.css";

const Left = () => (
  <div className="f-left">
    <ul>
      <span>PRODUCTS</span>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
    </ul>
    <ul>
      <span>SOLUTIONS</span>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
    </ul>
    <ul>
      <span>COMPANY</span>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
    </ul>
  </div>
);
const Right = () => (
  <div className="f-left">
    <ul>
      <span>RESOURCES</span>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
    </ul>
    <ul>
      <span>GUIDES</span>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
    </ul>
    <ul>
      <span>CONTACT</span>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
      <li>Scale Rapid</li>
    </ul>
  </div>
);
function Footer() {
  return (
    <div>
      <Card left={<Left />} right={<Right />} />
    </div>
  );
}

export default Footer;
