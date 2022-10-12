import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const topics = useLoaderData().data;

  return (
    <div className="grid grid-cols-2 m-auto mt-12 gap-10 w-3/4 justify-center bg-orange-200">
      {topics.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
  );
};

export default Topics;
