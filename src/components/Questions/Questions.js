import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { EyeIcon } from "@heroicons/react/24/solid";

const Questions = ({ question }) => {
  const { options, correctAnswer, id } = question;

  const validation = (option) => {
    if (option === correctAnswer) {
      toast("True !");
    } else {
      toast("false !");
    }
  };
  const eyeClick = () => {
    toast(`${correctAnswer}`);
  };

  return (
    <div>
      <div className="w-3/4 m-auto flex justify-center">
        <div>
          <p className="m-7 p-4 text-lg font.medium border-solid border-2 bg-orange-400">
            {question.question.slice(3, -4)},
          </p>
          {options.map((option) => (
            <button
              className="block w-10/12 mx-auto m-3 rounded p-4 bg-blue-500 text-white font-semibold text-lg hover:bg-blue-800"
              onClick={() => validation(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <div onClick={eyeClick}>
          <EyeIcon className="h-6 w-6 text-blue-500 ml-auto" />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Questions;
