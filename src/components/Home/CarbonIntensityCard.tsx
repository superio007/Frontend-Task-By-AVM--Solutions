import Airicon from "../../assets/air.png";
import ReactECharts from "echarts-for-react";

const CarbonIntensityCard = () => {
  const data = [
    { name: "Coal", value: 30, color: "#F87171" },
    { name: "Hydro", value: 20, color: "#FBBF24" },
    { name: "Nuclear", value: 20, color: "#A78BFA" },
    { name: "Wind", value: 15, color: "#22D3EE" },
    { name: "Solar", value: 15, color: "#2DD4BF" },
  ];

  const option = {
    series: [
      {
        type: "pie",
        radius: ["54%", "74%"],
        center: ["50%", "50%"],
        startAngle: 90,
        data: data.map((item) => ({
          value: item.value,
          name: item.name,
          itemStyle: { color: item.color },
        })),
        label: true,
        emphasis: {
          scale: true,
        },
      },
    ],
  };

  return (
    <div
      style={{
        background: `
      linear-gradient(160deg, #010b0b 0%, #101b1d74 100%) padding-box,
      linear-gradient(145deg, #11584fde 0%, #1725276f 60%) border-box
    `,
        border: "1px solid transparent",
      }}
      className="rounded-3xl p-5 flex flex-col h-90"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="bg-gray-700 rounded-[100%] p-1">
            <img src={Airicon} alt="Airicon" width={16} height={16} />
          </span>
          <h3 className="text-gray-300 font-medium text-sm">
            Carbon Intensity
          </h3>
        </div>
        <span className="bg-[#202020] text-white py-2  px-4 text-xs font-semibold rounded-full capitalize">
          Current
        </span>
      </div>
      <div className="flex-1 flex items-center justify-center gap-4">
        <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
          <ReactECharts
            option={option}
            style={{ width: "180px", height: "180px" }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold">95gm</span>
              <span className="text-[8px] text-gray-400 uppercase tracking-wider font-bold">
                CO2/kWh
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 py-2">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 text-[10px] font-bold"
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-300">
                {item.value}% {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarbonIntensityCard;
