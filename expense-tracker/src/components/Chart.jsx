import React from "react";
import Chart from "react-apexcharts";

export function CircleChart({ income, expense }) {
  const hasData = income > 0 || expense > 0;

  const series = hasData ? [income, expense] : [100];
  const colors = hasData ? ["#4caf50", "#f44336"] : ["#4caf50"]; // green for no data
  const labels = hasData ? ["Income", "Expense"] : []; // empty if no data

  const options = {
    chart: {
      type: "pie",
      toolbar: { show: false },
    },
    labels: labels,
    colors: colors,
    dataLabels: {
      enabled: false, // hide labels inside the chart
    },
    tooltip: {
      enabled: hasData, // ❌ disable tooltip if no data
      y: {
        formatter: (value) => {
          return `$${value}`;
        },
      },
    },
    legend: {
      show: hasData, // ❌ hide legend if no data
      position: "bottom",
    },
    stroke: {
      show: false, // no borders
    },
  };

  return <Chart options={options} series={series} type="pie" height={300} />;
}
