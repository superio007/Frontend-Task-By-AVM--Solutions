import { Zap, MoreVertical } from "lucide-react";
import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";

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

  return (
    <div className="bg-gradient-to-b from-cardBg/80 to-cardBg rounded-3xl p-5 flex flex-col h-90 border border-white/8">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-gray-400" fill="currentColor" />
          <h3 className="text-gray-300 font-medium text-sm">
            Energy Consumption
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-gray-400 uppercase tracking-widest">
            Last 7 Day
          </span>
          <button className="text-gray-500 hover:text-white transition-colors">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 0, right: 0, left: 0, bottom: 20 }}
          >
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`rgba(45, 212, 191, ${entry.opacity})`}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
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
