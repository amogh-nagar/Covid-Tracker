import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';
import styles from "./Chart.module.css";

const Chart = ({ country }) => {
 
  const { data:{TotalConfirmed, TotalDeaths, TotalRecovered, Country} } = country;
  const barChart = (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(9, 9, 169, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [TotalConfirmed, TotalRecovered, TotalDeaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${Country}` },
      }}
    />
  );
  

  return <div className={styles.container}>{barChart}</div>;
};

export default Chart;
