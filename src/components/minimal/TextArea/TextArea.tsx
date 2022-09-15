import React from "react";

export interface TextAreaInterface {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaInterface> = ({
  name,
  value,
  label,
  onChange,
}) => {
  return (
    <div className="flex flex-col-reverse mb-1 w-full">
      <textarea
        id={name}
        name={name}
        value={value}
        placeholder=" "
        onChange={onChange}
        rows={3}
        className="border-b-2 resize-none bg-[transparent] dark:text-light-100 border-primary-100 dark:border-dark-secondary-100 focus:border-b-2 focus:border-primary-200 dark:focus:border-dark-shadow-200 focus:outline-none transition-all duration-[0.2s] touch-manipulation"
      />
      <label
        htmlFor={name}
        className="mr-auto opacity-50 text-primary-300 dark:text-dark-shadow-200 transition-all duration-[0.2s] touch-manipulation"
      >
        {label}
      </label>

      <style jsx>
        {`
          textarea:placeholder-shown + label {
            cursor: text;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            transform-origin: left bottom;
            transform: translate(0, 1.7rem) scale(1);
          }
          ::-webkit-textarea-placeholder {
            opacity: 0;
            transition: inherit;
          }
          textarea:focus::-webkit-textarea-placeholder {
            opacity: 1;
          }
          textarea:not(:placeholder-shown) + label,
          textarea:focus + label {
            transform: translate(0.1rem, 0) scale(0.8);
            opacity: 1 !important;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default TextArea;
