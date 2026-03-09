import { Globe } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const CarbonIntensityCard = () => {
  const data = [
    { name: "Coal", value: 30, color: "#F87171" },
    { name: "Hydro", value: 20, color: "#FBBF24" },
    { name: "Nuclear", value: 20, color: "#A78BFA" },
    { name: "Wind", value: 15, color: "#22D3EE" },
    { name: "Solar", value: 15, color: "#2DD4BF" },
  ];

  return (
    <div className="bg-linear-to-b from-cardBg/80 to-cardBg rounded-3xl p-5 flex flex-col h-90 border border-white/8">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-gray-400" />
          <h3 className="text-gray-300 font-medium text-sm">
            Carbon Intensity
          </h3>
        </div>
        <span className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-gray-400 uppercase tracking-widest">
          Current
        </span>
      </div>
      <div className="flex-1 flex items-center justify-center gap-4">
        <div className="relative w-40 h-40 flex items-center justify-center shrink-0">
          <ResponsiveContainer width={160} height={160}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={54}
                outerRadius={74}
                startAngle={90}
                endAngle={450}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
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
