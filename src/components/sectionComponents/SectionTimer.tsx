import React, { useState } from "react";
import PomoAllButtons from "../pomoButtons/PomoAllButtons";
import PomoButton from "../pomoButtons/PomoButton";
import Timer from "../timer/Timer";

const SectionTimer = () => {
  const [showTimer, setShowTimer] = useState(false);

  const handleClick = () => {
    setShowTimer(true);
  };
  return (
    <div className="py-16 px-16 grid grid-cols-12">
      <div className="col-span-2 ">
        <PomoAllButtons />
      </div>

      <div className="col-span-8 flex justify-center">
        <div className="bg-pomo-button w-80 h-80 rounded-full relative">
          <div className="absolute left-[85px] top-1/4">
            <Timer />
          </div>
        </div>
      </div>

      <div className="col-span-2 ">
        <PomoButton emoji={true} text={"Add Task"} handleClick={() => {}} />
      </div>
    </div>
  );
};

export default SectionTimer;
