import { ArrowDown } from "lucide-react";
import Dropicon from "../../assets/drop.png";
import Humidicon from "../../assets/Humid.png";

const WaterConsumptionCard = () => {
  return (
    <div className="bg-linear-to-b from-cardBg/80 to-cardBg rounded-3xl p-5 flex flex-col h-90 border border-white/8">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="bg-gray-700 rounded-[100%] py-1 px-1.5">
            <img src={Dropicon} alt="Dropicon" width={12} height={12} />
          </span>
          <h3 className="text-gray-300 font-medium text-sm">
            Water Consumption
          </h3>
        </div>
        <span className="bg-[#202020] text-white py-2  px-4 text-xs font-semibold rounded-full capitalize">
          Yesterday
        </span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand mb-4">
          <img src={Humidicon} alt="Dropicon" width={100} height={100} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-5xl font-bold bg-[#1A4F49] rounded-full py-3 px-8 tracking-tight">
            8.42m³
          </h2>
          <div className="flex items-center gap-2 text-brand bg-[#0b2e2b]  px-3 py-2 rounded-full text-[#2DD4BF] font-semibold">
            <ArrowDown size={18} />
            <span>1.2m³ less water used compare to last tuesday</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterConsumptionCard;
