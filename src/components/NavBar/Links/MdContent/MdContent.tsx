import React from "react";

export interface MdContentInterface {
  links: React.ReactNode;
}

const MdContent: React.FC<MdContentInterface> = ({ links }) => {
  return (
    <div className="hidden invisible md:grid md:visible grid-rows-1 grid-flow-col gap-7">
      {links}
    </div>
  );
};

export default MdContent;
