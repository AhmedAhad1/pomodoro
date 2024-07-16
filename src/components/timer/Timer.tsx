import React from "react";
import Countdown, { CountdownApi } from "react-countdown";
import CountdownApiExample from "./test";
const Timer = () => {
  const Completionist = () => <span>You are good to go!</span>;

  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div className="text-6xl font-medium text-white">
      <Countdown date={Date.now() + 20654 * 60} renderer={renderer} />
    </div>
  );
};

export default Timer;
