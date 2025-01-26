import "./App.css";
import React from "react";
import dance from "./assets/dance.gif";
import kiss from "./assets/kiss.gif";
import katFlower from "./assets/peach-goma-flowers.gif";

export const Yes = () => {
  return (
    <div>
      <img className='danceCat' src={dance} />
      <div className='horray'>
        <h3 className='yippy'>Y✨I✨P✨P✨Y✨Y✨Y✨Y</h3>
        <p>💖💖💖LOVE YOUUU💖💖💖</p>
      </div>

      <img className='kiss' src={kiss} />
      <img className='catflower1' src={katFlower} />
      <img className='catflower2' src={katFlower} />
    </div>
  );
};
