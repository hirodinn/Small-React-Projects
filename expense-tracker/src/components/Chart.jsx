import React from "react";
import Chart from "react-apexcharts";

export function CircleChart({ income, expense }) {
  const series = [income, expense]; // numeric values
  const labels = ["Income", "Expense"];

  const options = {
    chart: {
      type: "donut",
    },
    labels: labels,
    colors: ["#4caf50", "#f44336"],
    tooltip: {
      enabled: true,
      y: {
        formatter: (value) => `$${value}`,
      },
    },
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) => {
        const value = opts.w.config.series[opts.seriesIndex];
        return `$${value}`;
      },
      style: {
        fontSize: "14px",
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: () => `$${income + expense}`,
            },
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "350px", margin: "auto" }}>
      <Chart options={options} series={series} type="donut" height={320} />
    </div>
  );
}
