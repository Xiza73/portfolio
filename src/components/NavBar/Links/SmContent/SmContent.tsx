import React from "react";

export interface SmContentInterface {
  links: React.ReactNode;
  checked: boolean;
  handleChecked: () => void;
}

const SmContent: React.FC<SmContentInterface> = ({
  links,
  checked,
  handleChecked,
}) => {
  return (
    <>
      <label className="inline-block md:hidden md:invisible">
        <input
          type="checkbox"
          className="hidden invisible"
          checked={checked}
          readOnly
        />
        <div
          className="toggle absolute h-12 w-12 top-0 right-4 z-10 cursor-pointer rounded-[50%] bg-base-200 dark:bg-dark-base-200"
          onClick={handleChecked}
        >
          <span className="common dark:bg-light-300 top_line top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
          <span className="common dark:bg-light-300 middle_line top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
          <span className="common dark:bg-light-300 bottom_line top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
        </div>
        <div className="slide flex flex-col pt-1 absolute top-11 right-0 bg-base-100 dark:bg-dark-base-100 h-full w-28 invisible opacity-0 transition-all duration-300 ease-in-out">
          {links}
        </div>
      </label>

      <style jsx>{`
        input {
          -webkit-appearance: none;
        }
        .common {
          position: absolute;
          height: 2px;
          width: 20px;
          background-color: #000;
          border-radius: 50px;
        }
        input:checked ~ .toggle .top_line {
          left: 12px !important;
          top: 22px !important;
          width: 25px !important;
          transform: rotate(45deg) !important;
        }
        input:checked ~ .toggle .middle_line {
          opacity: 0;
          transform: translateX(-20px) !important;
        }
        input:checked ~ .toggle .bottom_line {
          left: 12px !important;
          top: 22px !important;
          width: 25px !important;
          transform: rotate(-45deg) !important;
        }
        input:checked ~ .slide {
          visibility: visible !important;
          opacity: 1 !important;
          top: 60px !important;
        }
      `}</style>
    </>
  );
};

export default SmContent;
