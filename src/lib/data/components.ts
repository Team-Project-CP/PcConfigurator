export interface ComponentSpec {
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
    socket?: string;
    chipset?: string[];
    ramType?: string;
    formFactor?: string;
    tdp?: number;
  };
}

export const components: ComponentSpec[] = [
  {
    id: 1,
    category: "CPU",
    name: "AMD Ryzen 9 7950X",
    price: 699.99,
    image: "/images/components/cpu-ryzen.png",
    description: "16-core processor for ultimate gaming and content creation",
    specs: ["16 Cores", "32 Threads", "Up to 5.7GHz", "AM5 Socket"],
    detailedSpecs: {
      "Cores": { value: 16, score: 95 },
      "Threads": { value: 32, score: 90 },
      "Base Clock": { value: 5.7, score: 95 },
      "Boost Clock": { value: 5.8, score: 95 },
      "Socket": { value: "AM5", score: 90 },
      "TDP": { value: 170, score: 85 }
    },
    compatibility: {
      socket: "AM5"
    }
  },
  {
    id: 2,
    category: "GPU",
    name: "NVIDIA RTX 4090",
    price: 1599.99,
    image: "/images/components/gpu-rtx.png",
    description: "Ultimate graphics card for 4K gaming and AI workloads",
    specs: ["24GB GDDR6X", "DLSS 3", "Ray Tracing", "4K Gaming"],
    detailedSpecs: {
      "Memory": { value: 24, score: 95 },
      "DLSS": { value: 3, score: 95 },
      "Ray Tracing": { value: true, score: 95 },
      "Resolution": { value: 4, score: 95 }
    },
    compatibility: {
      tdp: 450
    }
  },
  {
    id: 3,
    category: "RAM",
    name: "Corsair Dominator Platinum RGB",
    price: 199.99,
    image: "/images/components/ram-dominator.png",
    description: "High-performance DDR5 memory with dynamic RGB lighting",
    specs: ["32GB (2x16GB)", "DDR5-6000", "CL30", "RGB Lighting"],
    detailedSpecs: {
      "Capacity": { value: "32GB", score: 90 },
      "Speed": { value: 6000, score: 95 },
      "CAS Latency": { value: 30, score: 85 },
      "RGB": { value: true, score: 90 }
    },
    compatibility: {
      ramType: "DDR5"
    }
  },
  {
    id: 4,
    category: "Storage",
    name: "Samsung 990 PRO",
    price: 169.99,
    image: "/images/components/ssd-samsung.png",
    description: "Ultra-fast PCIe 4.0 NVMe SSD for professional use",
    specs: ["2TB Capacity", "7,450 MB/s Read", "6,900 MB/s Write", "PCIe 4.0"],
    detailedSpecs: {
      "Capacity": { value: "2TB", score: 95 },
      "Read Speed": { value: 7450, score: 95 },
      "Write Speed": { value: 6900, score: 90 },
      "Interface": { value: "PCIe 4.0", score: 90 }
    },
    compatibility: {
      socket: "PCIe 4.0"
    }
  },
  {
    id: 5,
    category: "Motherboard",
    name: "ASUS ROG Maximus Z790 Hero",
    price: 629.99,
    image: "/images/components/mb-asus.png",
    description: "Premium Intel Z790 motherboard with extensive features",
    specs: ["Intel Z790", "DDR5 Support", "PCIe 5.0", "WiFi 6E"],
    detailedSpecs: {
      "Socket": { value: "LGA 1700", score: 90 },
      "DDR5 Support": { value: true, score: 95 },
      "PCIe Version": { value: 5.0, score: 95 },
      "WiFi": { value: "WiFi 6E", score: 90 }
    },
    compatibility: {
      socket: "LGA 1700",
      chipset: ["Z790"],
      formFactor: "ATX",
      ramType: "DDR5"
    }
  },
  {
    id: 6,
    category: "PSU",
    name: "Corsair HX1200i",
    price: 299.99,
    image: "/images/components/psu-corsair.png",
    description: "Platinum-certified modular power supply with digital interface",
    specs: ["1200W Output", "80+ Platinum", "Fully Modular", "iCUE Compatible"],
    detailedSpecs: {
      "Output": { value: 1200, score: 95 },
      "Efficiency": { value: 80, score: 95 },
      "Modular": { value: true, score: 95 },
      "iCUE Compatible": { value: true, score: 90 }
    },
    compatibility: {
      tdp: 1200
    }
  },
  {
    id: 7,
    category: "Cooling",
    name: "NZXT Kraken Z73",
    price: 279.99,
    image: "/images/components/cooling-kraken.png",
    description: "360mm AIO liquid cooler with LCD display",
    specs: ["360mm Radiator", "LCD Display", "RGB Lighting", "CAM Software"],
    detailedSpecs: {
      "Radiator Size": { value: "360mm", score: 95 },
      "LCD Display": { value: true, score: 90 },
      "RGB Lighting": { value: true, score: 90 },
      "CAM Software": { value: true, score: 85 }
    },
    compatibility: {
      socket: "AM5"
    }
  },
  {
    id: 8,
    category: "CPU",
    name: "Intel Core i9-13900K",
    price: 589.99,
    image: "/images/components/cpu-intel.png",
    description: "High-performance Intel processor for gaming and productivity",
    specs: ["24 Cores", "32 Threads", "Up to 5.8GHz", "LGA 1700"],
    detailedSpecs: {
      "Cores": { value: 24, score: 95 },
      "Threads": { value: 32, score: 90 },
      "Base Clock": { value: 5.8, score: 95 },
      "Boost Clock": { value: 5.8, score: 95 },
      "Socket": { value: "LGA 1700", score: 90 },
      "TDP": { value: 125, score: 85 }
    },
    compatibility: {
      socket: "LGA 1700"
    }
  },
  {
    id: 9,
    category: "GPU",
    name: "AMD Radeon RX 7900 XTX",
    price: 999.99,
    image: "/images/components/gpu-amd.png",
    description: "High-end AMD graphics card for 4K gaming",
    specs: ["24GB GDDR6", "2.5GHz Game Clock", "Ray Tracing", "FSR 3.0"],
    detailedSpecs: {
      "Memory": { value: 24, score: 95 },
      "Game Clock": { value: 2.5, score: 95 },
      "Ray Tracing": { value: true, score: 95 },
      "FSR": { value: 3.0, score: 90 }
    },
    compatibility: {
      tdp: 355
    }
  },
  {
    id: 10,
    category: "Storage",
    name: "WD Black SN850X",
    price: 149.99,
    image: "/images/components/ssd-wd.png",
    description: "High-performance PCIe 4.0 gaming SSD",
    specs: ["1TB Capacity", "7,300 MB/s Read", "6,300 MB/s Write", "Gaming Mode"],
    detailedSpecs: {
      "Capacity": { value: "1TB", score: 95 },
      "Read Speed": { value: 7300, score: 95 },
      "Write Speed": { value: 6300, score: 90 },
      "Mode": { value: "Gaming", score: 90 }
    },
    compatibility: {
      socket: "PCIe 4.0"
    }
  }
]; 