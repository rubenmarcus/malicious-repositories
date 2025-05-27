import { displayDotNumbers, displayMinimizedNumbers } from "@/utils/number";
import React from "react";
import Chart from "react-apexcharts";
const AreaGraph = ({data}: {data: number[]}) => {
  return (
    <div>
      <Chart
        type="area"
        options={{
          chart: {
            id: "basic-bar",
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          // colors: ["#5FFF1438"],
          xaxis: {
            type: "numeric",
            tickAmount: 7,
            labels: {
              show: true,
              style: {
                colors: "#7F7F7F",
                fontSize: "14px",
              },
              rotate: 0,
              formatter: (val) => {
                let number = Math.floor(Number(val) / 2 + 1).toString();
                return `${number}/2/33`;
              },
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
          },
          stroke: {
            lineCap: "butt",
            curve: "straight",
            width: 1,
            colors: ["#6EFF22"],
            fill: {
              type: "gradient",
              gradient: {
                shade: "dark",
                opacityFrom: 1,
                opacityTo: 0,
                stops: [0, 100, 100],
              },
            },
          },
          colors: ["#5FFF14"],
          tooltip: {
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
              return displayDotNumbers(series[seriesIndex][dataPointIndex]);
            },
            x: {
              show: false,
            },
            marker: {
              show: false,
            },
            cssClass: "chart-tooltip",
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              opacityFrom: 0.6,
              opacityTo: 0,
              stops: [0, 100, 100],
            },
          },
          grid: {
            show: false,
          },
          yaxis: {
            labels: {
              style: {
                colors: "#7F7F7F",
                fontSize: "14px",
              },
              formatter: displayMinimizedNumbers,
            },
          },
        }}
        series={[
          {
            name: "Wagered",
            data,
          },
        ]}
        height={224}
      />
    </div>
  );
};

export default AreaGraph;
