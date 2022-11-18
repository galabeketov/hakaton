import React from "react";
import Card from "../../../components/Card";
import FCarousel from "../../../components/Carousel";
import "./style.css";

const Left = () => (
  <div>
    <div className="annotate-text">
      <p className="ann-text">ANNOTATE CONTENT & LANGUAGE</p>
      <h2 className="ann-title">Gather Human Insight</h2>
      <p className="ann-text">
        Retrieve human insights for search relevance, ecommerce, natural
        language processing, audio transcription, document processing and more.
        Operational excellence augmented by technology enables us to exceed
        demanding quality, cost, and latency requirements.
      </p>
    </div>
    <div className="learn">Learn More →</div>
  </div>
);
const Right = () => (
  <div className="ann-right">
    <FCarousel />
  </div>
);

function Annotate({ reverse = false }) {
  return (
    <div className="annotate">
      <Card
        left={reverse ? <Left /> : <Right />}
        right={reverse ? <Right /> : <Left />}
      />
    </div>
  );
}

export default Annotate;
