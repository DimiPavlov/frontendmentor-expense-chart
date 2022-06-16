import React from "react";
import "./graph.css";
import data from "../../data.json";
import Chart from "../chart/Chart";

const Graph = () => {
  const charts = data;

  console.log(charts);
  return (
    <div className="graph-component">
      <h1>Spending - Last 7 days</h1>
      <div className="chart-container">
        {charts.map((chart) => {
          return (
            <Chart
              day={chart.day}
              amount={chart.amount}
              key={chart.day}
              data-content={`${chart.amount}`}
            />
          );
        })}
      </div>
      <hr />
      <div className="footer-component">
        <div>
          <p>Total this month</p>
          <h1>$478.33</h1>
        </div>
        <div className="footer-text">
          +2.4%<span>from last month</span>
        </div>
      </div>
    </div>
  );
};

export default Graph;
