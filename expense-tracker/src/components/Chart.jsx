import React from "react";
import Chart from "react-apexcharts";

export function CircleChart({ income, expense }) {
  const hasData = income > 0 || expense > 0;

  const series = hasData ? [income, expense] : [100];
  const colors = hasData ? ["#213ebf", "#fd5e53"] : ["#23d3eb9d"];
  const labels = hasData ? ["Income", "Expense"] : [];

  const options = {
    chart: {
      type: "pie",
      toolbar: { show: false },
    },
    labels: labels,
    colors: colors,
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: hasData,
      y: {
        formatter: (value) => {
          return `$${value}`;
        },
      },
    },
    legend: {
      show: hasData,
      position: "bottom",
    },
    stroke: {
      show: false,
    },
  };

  return <Chart options={options} series={series} type="pie" height={300} />;
}
