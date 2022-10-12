import React from "react";
import { useLoaderData } from "react-router";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
const Statistics = () => {
  const statistics = useLoaderData();
  const { data } = statistics;

  return (
    <div className=" md:flex justify-evenly mt-6 bg-red-200 text-2xl font-semibold p-4 text-lightblue-400">
      <h2 className="mb-4 md:mt-24 ">ALL Quiz Show in Rechart</h2>

      <div>
        <LineChart width={450} height={400} data={data}>
          <Line type="name" dataKey="total" stroke="red" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
