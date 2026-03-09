import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faZap, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import ReactECharts from "echarts-for-react";
import type { EnergyConsumption } from "../../types/Homepage";

const EnergyConsumptionCard = () => {
  const data: EnergyConsumption[] = [
    { day: "M", value: 40, opacity: 0.6 },
    { day: "T", value: 75, opacity: 0.9 },
    { day: "W", value: 30, opacity: 0.5 },
    { day: "T", value: 95, opacity: 1 },
    { day: "F", value: 70, opacity: 0.8 },
    { day: "S", value: 35, opacity: 0.4 },
    { day: "TODAY", value: 55, opacity: 1, isToday: true },
  ];

  const option = {
    grid: {
      top: 10,
      right: 10,
      bottom: 30,
      left: 10,
    },
    xAxis: {
      type: "category",
      data: data.map((item: EnergyConsumption) => item.day),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        type: "bar",
        data: data.map((item: EnergyConsumption) => ({
          value: item.value,
          itemStyle: {
            color: `rgba(45, 212, 191, ${item.opacity})`,
            borderRadius: [4, 4, 0, 0],
          },
        })),
        barWidth: "60%",
      },
    ],
  };

  return (
    <div
      style={{
        background: `
      linear-gradient(160deg, #000000 0%, #00000074 100%) padding-box,
      linear-gradient(145deg, #4cb6aa53 0%, #1725276f 60%) border-box
    `,
        border: "1px solid transparent",
      }}
      className="rounded-3xl p-5 flex flex-col h-90"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faZap}
            className="text-[12px] text-white bg-gray-700 rounded-full p-1"
          />
          <h3 className="text-white font-medium text-sm">Energy Consumption</h3>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="bg-[#202020] text-[#E6EAF5] py-2  px-4 text-xs font-semibold rounded-full capitalize">
            Last 7 Day
          </span>
          <button className="text-[#E6EAF5] bg-[#202020] p-1 px-2 rounded-full hover:text-white transition-colors">
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              className="text-[12px] text-white"
            />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col mt-2">
        <ReactECharts
          option={option}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="flex justify-between px-1 text-[9px] font-bold -mt-4">
          {data.map((item: EnergyConsumption, index: number) => (
            <span
              key={index}
              className={item.isToday ? "text-white" : "text-[#E6EAF5]"}
            >
              {item.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnergyConsumptionCard;
