import React from "react";
import { PiPlusCircle } from "react-icons/pi";
interface TButton {
  text: string;
  handleClick: () => void;
  emoji?: boolean;
}

const PomoButton = ({ text, handleClick, emoji = false }: TButton) => {
  return (
    <>
      {!emoji ? (
        <button
          className="text-white font-medium bg-pomo-button px-8 py-2 rounded-lg text-lg"
          onClick={handleClick}
        >
          {text}
        </button>
      ) : (
        <button
          className="text-white flex items-center space-x-2 font-medium bg-pomo-button px-8 py-2 rounded-lg text-lg"
          onClick={handleClick}
        >
          <span>{text}</span>

          <PiPlusCircle className="text-2xl " />
        </button>
      )}
    </>
  );
};

export default PomoButton;
