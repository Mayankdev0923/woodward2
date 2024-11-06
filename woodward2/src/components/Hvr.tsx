import React from "react";

interface HoverUnderlineTextProps {
  text: string;
}

const Hvr: React.FC<HoverUnderlineTextProps> = ({ text }) => {
  return (
    <span className="relative inline-block group">
      {text}
      <span className="absolute bottom-0 left-1/2 w-0 h-[3px] rounded-xl bg-zinc-600 transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full"></span>
    </span>
  );
};

export default Hvr;
