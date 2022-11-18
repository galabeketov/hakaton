import React from "react";
import Carousel from "react-material-ui-carousel";

export default function FCarousel(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      indicators={false}
      autoPlay={true}
      animation={"slide"}
      fullHeightHover
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <div>
      <img
        src="https://www.pngall.com/wp-content/uploads/5/Aim-PNG-Image-File.png"
        alt="aim"
        width={"100%"}
      />
    </div>
  );
}
