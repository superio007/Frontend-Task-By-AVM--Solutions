import { Zap, MoreVertical } from "lucide-react";
import ReactECharts from "echarts-for-react";

const EnergyConsumptionCard = () => {
  const data = [
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
      data: data.map((item) => item.day),
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
        data: data.map((item) => ({
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
    <div className="bg-linear-to-b from-cardBg/80 to-cardBg rounded-3xl p-5 flex flex-col h-90 border border-white/8">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="bg-gray-700 rounded-[100%] p-1">
            <Zap className="w-4 h-4 text-white" fill="currentColor" />
          </span>
          <h3 className="text-gray-300 font-medium text-sm">
            Energy Consumption
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="bg-[#202020] text-white py-2  px-4 text-xs font-semibold rounded-full capitalize">
            Last 7 Day
          </span>
          <button className="text-gray-500 bg-[#202020] p-2 rounded-full hover:text-white transition-colors">
            <MoreVertical className="w-4 h-4" color="#fff" />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col mt-2">
        <ReactECharts
          option={option}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="flex justify-between px-1 text-[9px] font-bold -mt-4">
          {data.map((item, index) => (
            <span
              key={index}
              className={item.isToday ? "text-brand" : "text-gray-500"}
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
