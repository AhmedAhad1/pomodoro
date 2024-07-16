import React from "react";
import PomoAllButtons from "../pomoButtons/PomoAllButtons";
import PomoButton from "../pomoButtons/PomoButton";

const SectionTimer = () => {
  return (
    <div className="py-16 px-16 grid grid-cols-12">
      <div className="col-span-2 ">
        <PomoAllButtons />
      </div>

      <div className="col-span-8 flex justify-center">
        <figure className="">
          <img src="/timer.png" alt="" className="w-72" />
        </figure>
      </div>

      <div className="col-span-2 ">
        <PomoButton emoji={true} text={"Add Task"} handleClick={() => {}} />
      </div>
    </div>
  );
};

export default SectionTimer;
