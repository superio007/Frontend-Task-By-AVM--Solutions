import LightsCard from "../components/Home/LightsCard";
import WaterConsumptionCard from "../components/Home/WaterConsumptionCard";
import CarbonIntensityCard from "../components/Home/CarbonIntensityCard";
import EnergyConsumptionCard from "../components/Home/EnergyConsumptionCard";
import FootfallCard from "../components/Home/FootfallCard";

const Homepage = () => {
  return (
    <main
      className="flex-1 p-5 overflow-hidden overflow-y-auto"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <LightsCard />
        <WaterConsumptionCard />
        <CarbonIntensityCard />
        <EnergyConsumptionCard />
        <FootfallCard />
      </div>
    </main>
  );
};

export default Homepage;
