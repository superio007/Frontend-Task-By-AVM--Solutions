import Usersicon from "../../assets/users.png";
import ReactECharts from "echarts-for-react";

const FootfallCard = () => {
  const data = [
    { day: "M", value: 110 },
    { day: "T", value: 130 },
    { day: "W", value: 100 },
    { day: "T", value: 90 },
    { day: "F", value: 80 },
    { day: "S", value: 120 },
    { day: "Today", value: 120 },
  ];

  const option = {
    grid: {
      top: 20,
      right: 20,
      bottom: 10,
      left: 10,
    },
    xAxis: {
      type: "category",
      data: data.map((item) => item.day),
      boundaryGap: false,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 150,
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.05)",
        },
      },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    series: [
      {
        type: "line",
        data: data.map((item) => item.value),
        smooth: true,
        lineStyle: {
          color: "#2DD4BF",
          width: 2.5,
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(45, 212, 191, 0.25)" },
              { offset: 1, color: "rgba(45, 212, 191, 0)" },
            ],
          },
        },
        symbol: "none",
        emphasis: {
          itemStyle: {
            color: "white",
            borderColor: "#2DD4BF",
            borderWidth: 2,
          },
        },
      },
    ],
  };

  return (
    <div
      style={{
        background: `
      linear-gradient(160deg, #010c0c 0%, #101112c8 100%) padding-box,
      linear-gradient(145deg, #4cb6aa53 0%, #1725276f 60%) border-box
    `,
        border: "1px solid transparent",
      }}
      className="rounded-3xl p-5 flex flex-col h-90"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="bg-gray-700 rounded-[100%] p-1">
            <img src={Usersicon} alt="Usersicon" width={14} height={14} />
          </span>
          <h3 className="text-gray-300 font-medium text-sm">Footfall</h3>
        </div>
        <span className="bg-[#202020] text-white py-2  px-4 text-xs font-semibold rounded-full capitalize">
          Last 7 Day
        </span>
      </div>
      <div className="flex-1 relative mt-1 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-[9px] text-gray-500 font-bold w-6 z-10">
          <span>150</span>
          <span>100</span>
          <span>50</span>
          <span>0</span>
        </div>
        <div className="ml-8 h-full flex flex-col">
          <div className="flex-1 relative">
            <ReactECharts
              option={option}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="flex justify-between pt-2 text-[9px] text-gray-500 font-bold uppercase tracking-widest px-1">
            {data.map((item, index) => (
              <span
                key={index}
                className={item.day === "Today" ? "text-brand" : ""}
              >
                {item.day}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FootfallCard;
