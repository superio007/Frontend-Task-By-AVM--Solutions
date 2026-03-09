import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Dropicon from "../../assets/drop.png";
import Humidicon from "../../assets/Humid.png";

const WaterConsumptionCard = () => {
  return (
    <div
      style={{
        background: `
      linear-gradient(160deg, #010b0b 0%, #101b1d74 100%) padding-box,
      linear-gradient(145deg, #4cb6a968 0%, #1725276f 60%) border-box
    `,
        border: "1px solid transparent",
      }}
      className="rounded-3xl p-5 flex flex-col h-90"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="bg-gray-700 rounded-[100%] py-1 px-1.5">
            <img src={Dropicon} alt="Dropicon" width={12} height={12} />
          </span>
          <h3 className="text-white font-medium text-sm">Water Consumption</h3>
        </div>
        <span className="bg-[#202020] text-[#E6EAF5] py-2  px-4 text-xs font-semibold rounded-full capitalize">
          Yesterday
        </span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand mb-4">
          <img src={Humidicon} alt="Dropicon" width={100} height={100} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-5xl font-normal bg-[#1A4F49] text-white rounded-full py-3 px-8 tracking-tight">
            8.42m³
          </h2>
          <div className="flex items-center gap-2 bg-[#0b2e2b] text-sm px-3 py-2 rounded-full text-[#2DD4BF] font-normal">
            <FontAwesomeIcon icon={faArrowDown} className="text-[14px]" />
            <span>1.2m³ less water used compare to last tuesday</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterConsumptionCard;
