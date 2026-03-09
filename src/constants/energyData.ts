import type { EnergyConsumption } from "../types/Homepage";

export const Energydata: EnergyConsumption[] = [
  { day: "M", value: 40, opacity: 0.6 },
  { day: "T", value: 75, opacity: 0.9 },
  { day: "W", value: 30, opacity: 0.5 },
  { day: "T", value: 95, opacity: 1 },
  { day: "F", value: 70, opacity: 0.8 },
  { day: "S", value: 35, opacity: 0.4 },
  { day: "TODAY", value: 55, opacity: 1, isToday: true },
];
