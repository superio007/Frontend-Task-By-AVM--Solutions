import { Droplet, TrendingDown } from "lucide-react";

const WaterConsumptionCard = () => {
  return (
    <div className="bg-linear-to-b from-cardBg/80 to-cardBg rounded-3xl p-5 flex flex-col h-90 border border-white/8">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <Droplet className="w-4 h-4 text-gray-400" />
          <h3 className="text-gray-300 font-medium text-sm">
            Water Consumption
          </h3>
        </div>
        <span className="text-[9px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-gray-400 uppercase tracking-widest">
          Yesterday
        </span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand mb-4">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"></path>
          </svg>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-5xl font-bold tracking-tight">8.42m³</h2>
          <div className="flex items-center gap-2 text-brand bg-brand/5 border border-brand/20 px-3 py-1 rounded-full text-[10px] font-semibold">
            <TrendingDown className="w-3 h-3" />
            <span>1.2m³ less water used compare to last tuesday</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterConsumptionCard;
