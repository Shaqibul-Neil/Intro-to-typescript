interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

type BrandCharaWatch = { heartRate: string; stopWatch: boolean };

interface BrandWatch {
  heartRate: string;
  callOption: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

type Bike = {
  brand: "yamaha";
  engineCapacity: "200cc";
};

const poorDeveloper: Developer<BrandCharaWatch> = {
  name: "Poor",
  salary: 10000,
  device: {
    brand: "lenovo",
    model: "12EC",
    releasedYear: "2004",
  },
  smartWatch: {
    heartRate: "84",
    stopWatch: true,
  },
  bike: null,
};

const richDeveloper: Developer<BrandWatch, Bike> = {
  name: "Rich",
  salary: 100000,
  device: {
    brand: "HP",
    model: "45W",
    releasedYear: "2026",
  },
  smartWatch: {
    heartRate: "84",
    callOption: true,
    aiFeature: true,
    calculator: true,
  },
};
