import React from "react";
import avatar from "../assets/images/image-jeremy.png";

const Profile = ({ First, Last, selected, setSelected }) => {
  const period = ["Daily", "Weekly", "Monthly"];

  return (
    <>
      <div className="mt-24 sm:mt-0.5 flex flex-col w-full sm:w-[33%] px-8 sm:px-0 sm:pl-8 ">
        <div className="h-fit sm:h-[100%]  bg-blue rounded-2xl py-8 px-10 relative z-10 flex flex-row sm:flex-col ">
          <div className="flex-none">
            <img
              src={avatar}
              alt="avatar"
              className="w-16 sm:w-24 border-white rounded-full border-4"
            ></img>
          </div>

          <div className="sm:mt-10 sm:ml-0 ml-4 sm:mb-14 pad:mb-20">
            <p className="text-gray-400">Report for</p>
            <div className="  flex flex-row sm:flex-col sm:leading-relaxed">
              <p className="text-white text-2xl sm:text-4xl font-light pad:text-5xl">
                {First}&nbsp;
              </p>
              <p className="text-white text-2xl sm:text-4xl font-light pad:text-5xl">
                {Last}
              </p>
            </div>
          </div>
        </div>
        <div className=" min-h-[3rem] sm:min-h-[13rem] bg-dark-blue -translate-y-5 z-0 rounded-b-2xl p-9 mt-1 sm:p-11 flex place-content-between flex-row sm:flex-col">
          {period.map((v, i) => (
            <p
              key={i}
              className={`cursor-pointer hover:text-white ${
                i === selected ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setSelected(i)}
            >
              {v}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
