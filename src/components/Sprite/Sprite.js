import React from "react";

const Sprite = ({ image, data, position, size }) => {
  const { y, x, h, w } = data;
  return (
    <div
      style={{
        position: `absolute`,
        top: position.y,
        left: position.x,
        height: `${h}px`,
        width: `${w}px`,
        backgroundImage: `url(${image})`,
        backgroundPosition: `-${x}px -${y}px`,
        backgroundRepeat: `no-repeat`,
        transform: `scale(${size})`,
      }}
    />
  );
};

export default Sprite;
