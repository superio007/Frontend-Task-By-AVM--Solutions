export type CarbonIntensity = {
  name: string;
  value: number;
  color: string;
};

export type EnergyConsumption = {
  day: string;
  value: number;
  opacity: number;
  isToday?: boolean;
};

export type Footfall = {
  day: string;
  value: number;
};
