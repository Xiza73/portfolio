import React from "react";

export interface DotSeparatorInterface {}

const DotSeparator: React.FC<DotSeparatorInterface> = () => {
  return (
    <div className="w-full mt-2 border-b-[15px] border-dotted border-base-300 dark:border-dark-base-300"></div>
  );
};

export default DotSeparator;
