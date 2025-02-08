"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BubbleChart = ({ skillData }: { skillData: number[] }) => {
  const data = {
    labels: ["Need to Learn", "Learning", "Learned"],
    datasets: [
      {
        label: "Percentage",
        data: skillData,
        backgroundColor: [
          "rgba(255, 50, 50, 0.8)",
          "rgba(255, 256, 86, 0.8)",
          "rgba(11, 156, 49, 0.8)",
        ],
        borderColor: [
          "rgba(255, 50, 50, 1)",
          "rgba(255, 256, 86, 1)",
          "rgba(11, 156, 49, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};

export default BubbleChart;
