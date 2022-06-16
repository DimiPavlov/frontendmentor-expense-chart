import React from "react";
import "./chart.css";

const Chart = ({ day, amount }) => {
  return (
    <div className="chart-container">
      <div className="chart-amount">{amount}</div>
      <div
        className="chart-graph"
        data-content={amount}
        style={{
          height: `${amount * 3}px`,
          backgroundColor: day === "wed" ? "var(--main-cyan)" : "",
        }}
      ></div>
      <span className="chart-day">{day}</span>
    </div>
  );
};

export default Chart;
