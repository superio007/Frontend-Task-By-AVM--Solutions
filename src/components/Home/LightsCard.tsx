import { useState } from "react";
import { Zap } from "lucide-react";

const LightsCard = () => {
  const [isOn, setIsOn] = useState(true);
  const [temperature, setTemperature] = useState(4300);
  const minTemp = 2700;
  const maxTemp = 5000;

  // Calculate rotation angle for gauge (-135deg to -35deg = 100deg range)
  const percentage = (temperature - minTemp) / (maxTemp - minTemp);
  const rotation = -135 + percentage * 100;

  return (
    <div className="bg-gradient-to-b from-cardBg/80 to-cardBg rounded-3xl p-5 flex flex-col h-90 border border-white/8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-gray-400" />
          <h3 className="text-gray-300 font-medium text-sm">Lights</h3>
        </div>
        <label className="relative inline-flex items-center cursor-pointer scale-75">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isOn}
            onChange={(e) => setIsOn(e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-brand after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-60 h-[120px] mb-2 overflow-hidden">
          {/* Background arc */}
          <div className="absolute w-60 h-60 border-[18px] border-white/5 rounded-full border-b-transparent border-l-transparent -rotate-[135deg]"></div>
          {/* Progress arc */}
          <div
            className="absolute w-60 h-60 border-[18px] border-brand rounded-full border-b-transparent border-l-transparent transition-transform duration-300"
            style={{ transform: `rotate(${rotation}deg)` }}
          ></div>
          {/* Indicator dot */}
          <div
            className="absolute w-3 h-3 bg-white rounded-full border-[3px] border-brand shadow-[0_0_8px_rgba(45,212,191,0.5)] transition-all duration-300"
            style={{
              top: "12px",
              right: "38px",
              transform: `rotate(${rotation + 135}deg) translateX(102px)`,
            }}
          ></div>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-brand mb-1">{temperature}k</h2>
          <div className="flex justify-between w-56 text-gray-500 text-[10px] font-bold uppercase">
            <span>{minTemp}k</span>
            <span>{maxTemp}k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightsCard;
