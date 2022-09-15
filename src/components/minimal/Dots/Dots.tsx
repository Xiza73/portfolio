import React from "react";

export interface DotsInterface {
  width: number;
  height: number;
}

const Dots: React.FC<DotsInterface> = ({ width, height }) => {
  return (
    <div className="grid gap-5">
      {Array.from(Array(height)).map((_, i) => (
        <div className="grid grid-rows-1 grid-flow-col gap-6" key={i}>
          {Array.from(Array(width)).map((_, j) => (
            <div
              key={j}
              className="w-3 h-3 rounded-full bg-base-300 dark:bg-dark-base-300"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Dots;
