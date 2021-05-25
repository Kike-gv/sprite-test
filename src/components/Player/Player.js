import React from "react";
import Actor from "../Actor";

import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";

const Player = ({ skin }) => {
  // https://www.pokecommunity.com/showthread.php?p=9797619
  //https://www.deviantart.com/aveontrainer/gallery/67900303/overworld
  const solairSize = 79.58;
  const data = { h: 48, w: 64 };

  const { dir, step, walk, position } = useWalk(4);

  useKeyPress((e) => {
    walk(e.key.replace("Arrow", "").toLowerCase());
    // e.preventDefault();
  });

  return (
    <Actor
      sprite={`/sprites/skins/${skin}.png`}
      data={data}
      step={step}
      dir={dir}
      position={position}
    />
  );
};

export default Player;
