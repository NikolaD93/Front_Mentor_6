import React, { useState } from "react";
import logo from "../assets/icon-star.svg";
import illustration from "../assets/illustration-thank-you.svg";
import { data } from "../constants/index";

const Container = () => {
  const [num, setNum] = useState(0);
  const [tyState, setTyState] = useState(false);

  const handleClick = () => {
    setTyState(true);
  };

  const getNumber = (idx) => {
    setNum(idx + 1);
  };

  return (
    <>
      <div
        className={`${
          tyState ? "hidden" : "block"
        } bg-gradient-to-t from-veryLightGray to-darkBlue w-[420px] rounded-3xl p-10`}
      >
        <div className="logo">
          <img
            className="bg-veryLightGray p-3 rounded-full"
            src={logo}
            alt="star-logo"
          />
        </div>
        <div className="text">
          <h1 className="text-3xl font-[700] my-8">How did we do?</h1>
          <p className="opacity-70">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="buttons">
          <div className="numbers flex justify-between my-8">
            {data.map((item, idx) => {
              return (
                <div
                  key={item.id}
                  onClick={() => getNumber(idx)}
                  className={`p-6 bg-${num != idx + 1  ? "veryLightGray" : "orange"} w-[3px] h-[3px] flex justify-center items-center rounded-full cursor-pointer transition-all hover:bg-mediumGray`}
                >
                  {item.number}
                </div>
              );
            })}
          </div>

          <div
            onClick={handleClick}
            className="btn bg-orange rounded-full py-3 flex justify-center cursor-pointer transition-all hover:bg-white hover:text-orange"
          >
            <button className="uppercase">Submit</button>
          </div>
        </div>
      </div>

      <div
        className={`${
          tyState ? "block" : "hidden"
        } bg-gradient-to-t from-veryLightGray to-darkBlue w-[420px] rounded-3xl p-10 text-center`}
      >
        <div className="illustration flex justify-center">
          <img src={illustration} alt="card-illustration" />
        </div>
        <div className="stats mt-8">
          <span className="bg-veryLightGray rounded-full px-5 py-2 text-orange">
            You selected {num} out of 5
          </span>
        </div>
        <div className="text">
          <h1 className="text-3xl font-[700] my-8">Thank you!</h1>
          <p className="opacity-70">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </>
  );
};

export default Container;
