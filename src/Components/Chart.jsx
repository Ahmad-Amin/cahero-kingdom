import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const [chartData, setChartData] = useState({
    series: [
      { name: "Cahero Source", data: [500, 700, 1200, 1500, 2000, 2500] },
      { name: "Cahero Evolution", data: [800, 800, 1300, 1600, 2100, 2500] },
      { name: "Cahero Legacy", data: [50, 1000, 1100, 1400, 900, 2400] },
      { name: "Cahero Unity", data: [200, 500, 1450, 1150, 1850, 2450] },
      { name: "Cahero Catalyst", data: [550, 750, 950, 1550, 2050, 2550] },
      { name: "Cahero Ascension", data: [100, 700, 1100, 1700, 2000, 2100] },
    ],
    options: {
      chart: {
        type: "line",
        toolbar: { show: false },
        background: "transparent",
        animations: { enabled: true },
      },
      colors: [
        "#ce2a96",
        "#6c60ff",
        "#ff6560",
        "#e2ff60",
        "#2acec6",
        "#1c8e20",
      ],
      stroke: { curve: "smooth", width: 4 },
      grid: { show: false },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        labels: { style: { colors: "#949494", fontSize: "14px" } },
        axisBorder: { color: "#655b96" },
      },
      yaxis: {
        labels: { style: { colors: "#949494", fontSize: "14px" } },
        axisBorder:{color:"#655b96" }
      },
      legend: {
        position: "right",
        offsetY: 28, 
        itemMargin: { horizontal: 10, vertical: 20 },
        fontSize: "16px",
        fontWeight: 500,
        labels: { colors: "#FFFFFF" },
        markers: {
          width: 12,
          height: 12,
          radius: 6,
        },
      },
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevData) => ({
        ...prevData,
        series: prevData.series.map((serie) => ({
          ...serie,
          data: serie.data.map(
            (value) => value + Math.floor(Math.random() * 100 - 50)
          ), 
        })),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="bg-[#0e0e0e] p-6 rounded-lg shadow-lg w-full mx-10 ">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={400}
        className="w-full"
      />
    </div>
    </div>
  );
};

export default LineChart;
