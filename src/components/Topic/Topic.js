import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, logo, name, total } = topic;
  return (
    <div className=" text-2xl border-solid border-2 border-indigo-600  ">
      <div className="">
        <img className="w-2/4 m-auto  " src={logo} alt="" />

        <p>Total:{total}</p>
        <h2>
          <button className="border-solid border-2 border-indigo-600 p-2 mb-2 mt-2">
            <Link to={`/topic/${id}`}>{name}</Link>
          </button>
        </h2>
      </div>
      <div></div>
    </div>
  );
};

export default Topic;
