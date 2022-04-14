import React from "react";
import work from "../assets/images/icon-work.svg";
import play from "../assets/images/icon-play.svg";
import study from "../assets/images/icon-study.svg";
import exercise from "../assets/images/icon-exercise.svg";
import social from "../assets/images/icon-social.svg";
import care from "../assets/images/icon-self-care.svg";
import menu from "../assets/images/icon-ellipsis.svg";

const Activity = ({ data }) => {
  const act = [work, play, study, exercise, social, care];
  const color = [
    "bg-light-red-work",
    "bg-soft-blue",
    "bg-light-red-study",
    "bg-lime-green",
    "bg-violet",
    "bg-soft-orange",
  ];
  const title = ["Work", "Play", "Study", "Exercise", "Social", "Self Care"];

  return (
    <div className="sm:pl-6 md:grid md:grid-cols-3 gap-x-2 gap-y-[1.5rem] w-full">
      {act.map((v, i) => {
        return (
          <div className=" sm:w-full px-8 sm:pl-6 sm:pr-0 flex flex-col ">
            <div
              className={`sm:w-full justify-end flex ${color[i]} rounded-t-2xl overflow-clip h-24`}
            >
              <img
                key={i}
                src={v}
                alt="act"
                className="h-20 mr-4 -translate-y-2 sm:-translate-y-1"
              />
            </div>
            <div className="max-w-full min-h-fit sm:h-[100%] bg-dark-blue rounded-2xl align-middle  -translate-y-10 sm:-translate-y-4 hover:bg-desaturated-blue">
              <div className="px-5 pt-5 sm:p-6 text-white flex flex-row justify-between">
                <p>{`${title[i]}`}</p>
                <img
                  src={menu}
                  alt="menu"
                  className="flex-none h-1 self-center"
                />
              </div>
              <div className="flex flex-row justify-between  sm:flex-col sm:pt-2 pt-4 items-center pb-10 sm:pb-0 sm:items-start">
                <p className="text-white text-4xl sm:text-3xl font-light pl-6 pad:text-6xl">
                  {data.time[i]} hrs
                </p>
                <div className="pl-8 sm:pl-6 flex pr-5 sm:pt-4 sm:pb-4">
                  <p className="text-pale-blue text-sm sm:text-base">
                    Last {data.period} - {data.prev[i]}hrs{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Activity;
