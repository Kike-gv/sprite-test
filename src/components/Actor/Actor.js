import React from "react";
import Sprite from "../Sprite";

const Actor = ({
  sprite,
  data,
  position = { x: 0, y: 0 },
  step = 0,
  dir = 0,
  size,
}) => {
  const { h, w } = data;

  // image={"/sprites/skins/solair.png"}
  //   79.58
  return (
    <Sprite
      image={sprite}
      position={position}
      data={{ x: step * w, y: dir * h, w, h }}
      size={size}
    />
  );
};

export default Actor;
