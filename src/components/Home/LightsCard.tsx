import { useState, useRef } from "react";
import Airicon from "../../assets/air.png";

const LightsCard = () => {
  const [isOn, setIsOn] = useState(true);
  const [temperature, setTemperature] = useState(4300);

  const min = 2700;
  const max = 5000;

  const radius = 90;
  const centerX = 120;
  const centerY = 120;

  const percentage = (temperature - min) / (max - min);
  const angle = Math.PI * percentage;

  const knobX = centerX + radius * Math.cos(Math.PI - angle);
  const knobY = centerY - radius * Math.sin(Math.PI - angle);

  const svgRef = useRef<SVGSVGElement | null>(null);

  const handleDrag = (e: React.MouseEvent) => {
    if (!svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left - centerX;
    const y = e.clientY - rect.top - centerY;

    let angle = Math.atan2(-y, x);

    angle = Math.PI - angle;

    if (angle < 0) angle = 0;
    if (angle > Math.PI) angle = Math.PI;

    const percent = angle / Math.PI;

    const newTemp = Math.round(min + percent * (max - min));

    setTemperature(newTemp);
  };

  const ticks = [];

  for (let i = 0; i <= 40; i++) {
    const tickAngle = Math.PI - (Math.PI * i) / 40;

    const inner = radius + 20;
    const outer = radius + 28;

    const x1 = centerX + inner * Math.cos(tickAngle);
    const y1 = centerY - inner * Math.sin(tickAngle);

    const x2 = centerX + outer * Math.cos(tickAngle);
    const y2 = centerY - outer * Math.sin(tickAngle);

    const active = i / 40 <= percentage;

    ticks.push(
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={active ? "#2DD4BF" : "#ffffff40"}
        strokeWidth="2"
      />,
    );
  }

  return (
    <div
      style={{
        background: `
        linear-gradient(160deg,#27565090 0%,rgba(7,12,12,1) 100%) padding-box,
        linear-gradient(145deg,#2DD4BF 0%,rgba(45,212,191,0) 60%) border-box
      `,
        border: "1px solid transparent",
      }}
      className="rounded-3xl p-5 flex flex-col h-90"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <span className="bg-gray-700 rounded-full p-1">
            <img src={Airicon} width={16} height={16} />
          </span>
          <h3 className="text-gray-300 text-sm">Lights</h3>
        </div>

        <label className="relative inline-flex items-center cursor-pointer scale-75">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isOn}
            onChange={(e) => setIsOn(e.target.checked)}
          />
          <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-teal-400 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-full" />
        </label>
      </div>

      <div className="flex flex-col items-center justify-center flex-1">
        <svg
          ref={svgRef}
          width="240"
          height="140"
          viewBox="0 0 240 140"
          onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
        >
          {ticks}

          <path
            d="M30 120 A90 90 0 0 1 210 120"
            fill="none"
            stroke="#ffffff30"
            strokeWidth="14"
            strokeLinecap="round"
          />

          <path
            d="M30 120 A90 90 0 0 1 210 120"
            fill="none"
            stroke="#2DD4BF"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={`${Math.PI * radius * percentage} ${Math.PI * radius}`}
          />

          <circle
            cx={knobX}
            cy={knobY}
            r="10"
            fill="#2DD4BF"
            stroke="white"
            strokeWidth="3"
          />
        </svg>

        <div className="text-center -mt-12">
          <h2 className="text-4xl font-bold text-teal-400">{temperature}k</h2>

          <div className="flex justify-between w-56 text-gray-400 text-xs mt-1">
            <span>{min}k</span>
            <span>{max}k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightsCard;
