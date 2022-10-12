import React from "react";
import { useLoaderData } from "react-router-dom";
import Questions from "../Questions/Questions";

const QuizDetails = () => {
  const topic = useLoaderData().data;
  const { id, name, questions } = topic;

  return (
    <div>
      <h2 className="p-4  text-2xl font-bold text-orange-800 ">
        Quiz-of: {name}
      </h2>
      {questions.map((question) => (
        <Questions key={id} question={question}></Questions>
      ))}
    </div>
  );
};

export default QuizDetails;
