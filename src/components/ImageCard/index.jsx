import React from "react";
import "./style.css";

function ImageCard({ image, text }) {
  return (
    <div className="card-w">
      <p className="image-card-text">{text ?? "text"}</p>
      <div className="image-card">
        <img
          src={
            image ??
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKFLndJnnxa_4eiKZtgfdZzC6P5k0ImIdCg&usqp=CAU"
          }
          width={70}
          height={70}
          alt="image"
        />
      </div>
    </div>
  );
}

export default ImageCard;
