import React from "react";

export interface InputInterface {
  type: string;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputInterface> = ({
  type,
  name,
  value,
  label,
  onChange,
}) => {
  return (
    <div className="flex flex-col-reverse mb-1 w-full">
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder=" "
        onChange={onChange}
        className="border-b-2 bg-[transparent] dark:text-light-100 border-primary-100 dark:border-dark-secondary-100 focus:border-b-2 focus:border-primary-200 dark:focus:border-dark-shadow-200 focus:outline-none transition-all duration-[0.2s] touch-manipulation"
      />
      <label
        htmlFor={name}
        className="mr-auto opacity-50 text-primary-300 dark:text-dark-shadow-200 transition-all duration-[0.2s] touch-manipulation"
      >
        {label}
      </label>

      <style jsx>
        {`
          input:placeholder-shown + label {
            cursor: text;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transform-origin: left bottom;
            transform: translate(0, 1.7rem) scale(1);
          }
          input::-webkit-input-placeholder {
            opacity: 0;
            transition: inherit;
          }
          input:focus::-webkit-input-placeholder {
            opacity: 1;
          }
          input:not(:placeholder-shown) + label,
          input:focus + label {
            transform: translate(0, 0) scale(0.8);
            opacity: 1 !important;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Input;
