import React from "react";
import PomoButton from "./PomoButton";

const PomoAllButtons = () => {
  return (
    <div className="gap-4 flex flex-col">
      <PomoButton text="Pomodoro" handleClick={() => {}} />
      <PomoButton text="Short Break" handleClick={() => {}} />
      <PomoButton text="Long Break" handleClick={() => {}} />
    </div>
  );
};

export default PomoAllButtons;
