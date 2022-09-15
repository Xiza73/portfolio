import React from "react";
import { IconType } from "react-icons/lib";

export interface PercentageCircleInterface {
  name: string;
  percentage: number;
  Icon: IconType;
}

const PercentageCircle: React.FC<PercentageCircleInterface> = ({
  name,
  percentage,
  Icon,
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-start mx-4 mt-2 mb-4">
        <div className="relative w-24 h-24 mb-1">
          <svg viewBox="0 0 36 36" className="block absolute">
            <path
              className="fill-[none] stroke-primary-100 dark:stroke-dark-primary-100 stroke-[3.8]"
              d="M18 2.0845
			a 15.9155 15.9155 0 0 1 0 31.831
			a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="stroke-primary-200 dark:stroke-dark-primary-200 fill-[none] stroke-[2.8] circle"
              strokeDasharray={`${percentage}, 100`}
              d="M18 2.0845
			a 15.9155 15.9155 0 0 1 0 31.831
			a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="flex justify-center items-center w-full h-full">
            <Icon className="text-5xl dark:fill-light-300" />
          </div>
        </div>
        <h1 className="text-lg font-semibold capitalize dark:text-light-100">
          {name}
        </h1>
      </div>

      <style jsx>{`
        .circle {
          stroke-linecap: round;
          animation: progress 1s ease-out forwards;
        }

        @keyframes progress {
          0% {
            stroke-dasharray: 0 100;
          }
        }
      `}</style>
    </>
  );
};

export default PercentageCircle;
