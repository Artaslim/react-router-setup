import React from "react";
import { useLoaderData } from "react-router";

const Home = () => {
  const home = useLoaderData();

  const { name, P, img } = home;

  return (
    <div className="grid grid-cols-2 justify-evenly space-x-16 p-20 bg-yellow-100">
      <div classNam="p-14 mt-5 ml-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="ml-8 mt-5">{P}</p>
      </div>
      <div className="w-full ">
        <img className="w-7/12" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
