export interface Monitor {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  description: string;
  specs: string[];
  detailedSpecs: {
    [key: string]: {
      value: string | number | boolean;
      score: number;
      unit?: string;
    };
  };
  compatibility: {
    input?: string;
    size?: string;
  };
}

export const monitors: Monitor[] = [
  {
    id: 1,
    category: "Gaming Monitors",
    name: "Gaming Monitor 1",
    price: 199.99,
    image: "/Monitors/gaming1.png",
    description: "144Hz Full HD Display",
    specs: ["144Hz", "1080p", "1ms Response"],
    detailedSpecs: {
      RefreshRate: { value: "144", score: 85, unit: "Hz" },
      Resolution: { value: "1920x1080", score: 70 },
      Panel: { value: "IPS", score: 90 },
    },
    compatibility: {
      input: "HDMI/DP",
      size: "27 inch",
    }
  },
  {
    id: 2,
    category: "Office Monitors",
    name: "Office Monitor 1",
    price: 129.99,
    image: "/Monitors/office1.png",
    description: "Full HD for Office Work",
    specs: ["75Hz", "1080p", "LED"],
    detailedSpecs: {
      RefreshRate: { value: "75", score: 60, unit: "Hz" },
      Resolution: { value: "1920x1080", score: 70 },
      Panel: { value: "VA", score: 75 },
    },
    compatibility: {
      input: "HDMI/VGA",
      size: "24 inch",
    }
  },
  {
    id: 3,
    category: "Gaming Monitors",
    name: "Gaming Monitor 2",
    price: 279.99,
    image: "/Monitors/gaming2.png",
    description: "165Hz QHD Display",
    specs: ["165Hz", "1440p", "1ms"],
    detailedSpecs: {
      RefreshRate: { value: "165", score: 90, unit: "Hz" },
      Resolution: { value: "2560x1440", score: 85 },
      Panel: { value: "IPS", score: 92 },
    },
    compatibility: {
      input: "HDMI/DP",
      size: "27 inch",
    }
  },
  {
    id: 4,
    category: "Home Monitors",
    name: "Home Monitor 1",
    price: 109.99,
    image: "/Monitors/home1.png",
    description: "Casual Use, Full HD",
    specs: ["60Hz", "1080p"],
    detailedSpecs: {
      RefreshRate: { value: "60", score: 50, unit: "Hz" },
      Resolution: { value: "1920x1080", score: 70 },
      Panel: { value: "TN", score: 60 },
    },
    compatibility: {
      input: "HDMI",
      size: "24 inch",
    }
  },
  {
    id: 5,
    category: "Graphical Monitors",
    name: "Graphical Monitor 1",
    price: 449.99,
    image: "/Monitors/graphical1.png",
    description: "HDR 4K Editing Display",
    specs: ["60Hz", "3840x2160", "HDR"],
    detailedSpecs: {
      RefreshRate: { value: "60", score: 50, unit: "Hz" },
      Resolution: { value: "3840x2160", score: 95 },
      Panel: { value: "IPS", score: 90 },
    },
    compatibility: {
      input: "HDMI/DP",
      size: "32 inch",
    }
  }
];
