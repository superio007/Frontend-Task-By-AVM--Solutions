import { User } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis } from "recharts";

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

  return (
    <div className="bg-linear-to-b from-cardBg/80 to-cardBg rounded-3xl p-5 flex flex-col lg:col-span-2 h-90 border border-white/8">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4 text-gray-400" />
          <h3 className="text-gray-300 font-medium text-sm">Footfall</h3>
        </div>
        <span className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-gray-400 uppercase tracking-widest">
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
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              <div className="w-full h-px bg-white/5"></div>
              <div className="w-full h-px bg-white/5"></div>
              <div className="w-full h-px bg-white/5"></div>
              <div className="w-full h-px bg-white/5"></div>
            </div>
            {/* Chart */}
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#2DD4BF" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#2DD4BF" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={false}
                />
                <YAxis
                  domain={[0, 150]}
                  axisLine={false}
                  tickLine={false}
                  tick={false}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2DD4BF"
                  strokeWidth={2.5}
                  fill="url(#chartGradient)"
                  dot={false}
                  activeDot={{
                    r: 4,
                    fill: "white",
                    stroke: "#2DD4BF",
                    strokeWidth: 2,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
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
