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
      description?: string;
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
    name: "AMD Ryzen 5 7600X",
    price: 299.99,
    image: "/images/components/cpu-ryzen.png",
    description: "High-performance 6-core processor with Zen 4 architecture for gaming and productivity",
    specs: ["6 Cores", "12 Threads", "Up to 5.3GHz", "AM5 Socket", "5nm Process"],
    detailedSpecs: {
      "Series": { 
        value: "AMD Ryzen 7000", 
        score: 90,
        description: "The processor series indicating generation and family. Newer series typically offer better performance."
      },
      "Model": { 
        value: "AMD Ryzen 5", 
        score: 85,
        description: "The processor model in the lineup. Ryzen 3/5/7/9 indicates performance tier, with higher numbers being more powerful."
      },
      "Package Type": { 
        value: "OEM", 
        score: 80,
        description: "Delivery type: OEM (processor only) or Retail (includes stock cooler and full packaging)."
      },
      "Cooler Included": { 
        value: false, 
        score: 70,
        description: "Whether a stock CPU cooler is included in the package."
      },
      "Codename": { 
        value: "Raphael (Zen 4)", 
        score: 90,
        description: "The internal development name for the processor architecture, indicating technology generation."
      },
      "Socket": { 
        value: "AM5", 
        score: 90,
        description: "The physical interface type for installing the processor on the motherboard."
      },
      "Cores": { 
        value: 6, 
        score: 85,
        description: "Number of physical processing cores. More cores = better multitasking performance."
      },
      "Threads": { 
        value: 12, 
        score: 85,
        description: "Number of logical processing threads. Usually twice the core count due to SMT technology."
      },
      "Base Clock": { 
        value: 3.7, 
        score: 85, 
        unit: "GHz",
        description: "The guaranteed minimum operating frequency of the processor under load."
      },
      "Max Clock": { 
        value: 5.0, 
        score: 90, 
        unit: "GHz",
        description: "Maximum frequency the processor can reach during turbo boost operation."
      },
      "L2 Cache": { 
        value: 6, 
        score: 85, 
        unit: "MB",
        description: "Level 2 cache memory. Affects speed of access to frequently used data."
      },
      "L3 Cache": { 
        value: 32, 
        score: 90, 
        unit: "MB",
        description: "Shared Level 3 cache memory. Larger size improves overall performance."
      },
      "Memory Type": { 
        value: "DDR5", 
        score: 95,
        description: "Type of RAM supported by the processor. DDR5 is the latest standard with improved performance."
      },
      "Memory Channels": { 
        value: 2, 
        score: 90,
        description: "Number of memory channels. Dual-channel mode increases memory bandwidth."
      },
      "Max Memory Speed": { 
        value: 5200, 
        score: 90, 
        unit: "MHz",
        description: "Maximum supported RAM frequency without overclocking."
      },
      "PCIe Version": { 
        value: "5.0", 
        score: 95,
        description: "Supported PCI Express version. Affects bandwidth with GPU and NVMe drives."
      },
      "PCIe Lanes": { 
        value: 24, 
        score: 90,
        description: "Number of PCI Express lanes available for connecting devices."
      },
      "TDP": { 
        value: 65, 
        score: 85, 
        unit: "W",
        description: "Thermal Design Power - the amount of heat generated under full load."
      },
      "Process Node": { 
        value: 5, 
        score: 95, 
        unit: "nm",
        description: "Manufacturing process size. Smaller numbers usually mean better efficiency."
      },
      "SMT": { 
        value: true, 
        score: 90,
        description: "Simultaneous Multi-Threading - allows each core to handle two threads simultaneously."
      },
      "NPU": { 
        value: false, 
        score: 70,
        description: "Neural Processing Unit - dedicated hardware for AI and machine learning tasks."
      },
      "Virtualization": { 
        value: true, 
        score: 90,
        description: "Hardware support for running virtual machines efficiently."
      }
    },
    compatibility: {
      socket: "AM5",
      chipset: ["X670E", "X670", "B650E", "B650", "A620"]
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
      "Architecture": { 
        value: "Ada Lovelace", 
        score: 95,
        description: "GPU architecture design. Determines generation of technology and capabilities."
      },
      "CUDA Cores": { 
        value: 16384, 
        score: 95,
        description: "Number of CUDA cores for parallel computing. More cores = higher performance."
      },
      "RT Cores": { 
        value: 128, 
        score: 95,
        description: "Specialized cores for real-time ray tracing calculations in games."
      },
      "Tensor Cores": { 
        value: 512, 
        score: 95,
        description: "Cores dedicated to AI and machine learning acceleration."
      },
      "Memory": { 
        value: 24, 
        score: 95, 
        unit: "GB",
        description: "Amount of video memory. Affects ability to handle high resolutions and textures."
      },
      "Memory Type": { 
        value: "GDDR6X", 
        score: 95,
        description: "Type of video memory. GDDR6X provides highest bandwidth for gaming."
      },
      "Memory Bus": { 
        value: 384, 
        score: 95, 
        unit: "bit",
        description: "Memory interface width. Affects data transfer speed with video memory."
      },
      "Memory Speed": { 
        value: 21, 
        score: 95, 
        unit: "Gbps",
        description: "Video memory speed. Higher values provide better memory bandwidth."
      },
      "Base Clock": { 
        value: 2235, 
        score: 90, 
        unit: "MHz",
        description: "Base operating frequency of the graphics processor."
      },
      "Boost Clock": { 
        value: 2520, 
        score: 95, 
        unit: "MHz",
        description: "Maximum frequency the graphics processor can reach under optimal conditions."
      },
      "PCIe Version": { 
        value: "4.0", 
        score: 90,
        description: "PCI Express interface version for motherboard connection."
      },
      "Power Connectors": { 
        value: "16-pin", 
        score: 90,
        description: "Type of power connectors required for additional power supply."
      },
      "Recommended PSU": { 
        value: 850, 
        score: 90, 
        unit: "W",
        description: "Recommended power supply wattage for stable system operation."
      },
      "TDP": { 
        value: 450, 
        score: 85, 
        unit: "W",
        description: "Thermal Design Power - maximum heat output of the graphics card."
      },
      "Process Node": { 
        value: 4, 
        score: 95, 
        unit: "nm",
        description: "Manufacturing process size of the graphics processor."
      },
      "Display Outputs": { 
        value: "3x DP 1.4a, 1x HDMI 2.1", 
        score: 90,
        description: "Available display outputs for monitor connections."
      },
      "Max Resolution": { 
        value: "7680x4320", 
        score: 95,
        description: "Maximum supported display resolution."
      },
      "DLSS": { 
        value: 3, 
        score: 95,
        description: "NVIDIA DLSS version for AI-enhanced performance upscaling."
      },
      "Ray Tracing": { 
        value: true, 
        score: 95,
        description: "Support for hardware-accelerated ray tracing for realistic lighting."
      },
      "NVLink": { 
        value: false, 
        score: 70,
        description: "Support for connecting multiple GPUs for increased performance."
      }
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
      "Capacity": { 
        value: 32, 
        score: 90, 
        unit: "GB",
        description: "Total RAM capacity installed. More memory allows handling more data simultaneously."
      },
      "Configuration": { 
        value: "2x16GB", 
        score: 90,
        description: "Number and size of individual memory modules. E.g., '2x16GB' means two 16GB modules."
      },
      "Speed": { 
        value: 6000, 
        score: 95, 
        unit: "MHz",
        description: "Memory operating frequency. Higher frequency provides faster data transfer."
      },
      "CAS Latency": { 
        value: 30, 
        score: 85,
        description: "Time delay between receiving a command and beginning its execution. Lower is better."
      },
      "Timings": { 
        value: "30-36-36-76", 
        score: 85,
        description: "Memory timing parameters affecting speed and stability. Lower numbers usually mean better performance."
      },
      "Voltage": { 
        value: 1.35, 
        score: 90, 
        unit: "V",
        description: "Operating voltage of memory modules. Affects stability and overclocking potential."
      },
      "Memory Type": { 
        value: "DDR5", 
        score: 95,
        description: "Generation of RAM technology. DDR5 is the latest standard with improved performance."
      },
      "ECC": { 
        value: false, 
        score: 70,
        description: "Error Correction Code - memory error correction technology, typically used in servers."
      },
      "RGB Lighting": { 
        value: true, 
        score: 90,
        description: "Presence of RGB lighting on memory modules for aesthetic purposes."
      },
      "Height": { 
        value: 55, 
        score: 85, 
        unit: "mm",
        description: "Physical height of memory module, important for CPU cooler compatibility."
      },
      "XMP Support": { 
        value: true, 
        score: 90,
        description: "Support for Intel XMP profiles for automatic memory overclocking."
      },
      "EXPO Support": { 
        value: true, 
        score: 90,
        description: "Support for AMD EXPO profiles for automatic memory overclocking."
      },
      "Heat Spreader": { 
        value: "Aluminum", 
        score: 90,
        description: "Material of the heatsink for cooling memory chips."
      },
      "Compatibility": { 
        value: "Intel/AMD", 
        score: 95,
        description: "Compatibility with different processor manufacturers."
      }
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
      "Capacity": { 
        value: 2, 
        score: 95, 
        unit: "TB",
        description: "Total storage capacity. Measured in terabytes (TB) or gigabytes (GB)."
      },
      "Interface": { 
        value: "PCIe 4.0 x4", 
        score: 95,
        description: "Type of connection to the motherboard. PCIe 4.0 provides high data transfer speed."
      },
      "Form Factor": { 
        value: "M.2 2280", 
        score: 95,
        description: "Physical size and shape of the storage device. M.2 2280 means width of 22mm and length of 80mm."
      },
      "Controller": { 
        value: "Samsung Pascal", 
        score: 95,
        description: "Microcontroller controlling storage device operation. Affects performance and reliability."
      },
      "NAND Type": { 
        value: "3D V-NAND", 
        score: 95,
        description: "Type of storage device memory. 3D NAND provides high data storage density."
      },
      "Sequential Read": { 
        value: 7450, 
        score: 95, 
        unit: "MB/s",
        description: "Sequential read data speed. Important for working with large files."
      },
      "Sequential Write": { 
        value: 6900, 
        score: 95, 
        unit: "MB/s",
        description: "Sequential write data speed. Important for copying large files."
      },
      "Random Read": { 
        value: 1400000, 
        score: 95, 
        unit: "IOPS",
        description: "Random read speed of small files, measured in operations per second (IOPS)."
      },
      "Random Write": { 
        value: 1550000, 
        score: 95, 
        unit: "IOPS",
        description: "Random write speed of small files, measured in operations per second (IOPS)."
      },
      "TBW": { 
        value: 1200, 
        score: 90, 
        unit: "TB",
        description: "Terabytes Written - total data amount that can be written to the storage device over its lifetime."
      },
      "MTBF": { 
        value: 1500000, 
        score: 90, 
        unit: "hours",
        description: "Mean Time Between Failures - average time between failures, reliability indicator."
      },
      "Warranty": { 
        value: 5, 
        score: 90, 
        unit: "years",
        description: "Manufacturer warranty period for the device."
      },
      "Encryption": { 
        value: "AES 256-bit", 
        score: 95,
        description: "Hardware data encryption support for data protection."
      },
      "DRAM Cache": { 
        value: true, 
        score: 95,
        description: "Presence of DRAM cache for improving performance."
      },
      "SLC Cache": { 
        value: true, 
        score: 90,
        description: "Presence of SLC cache for increasing write speed."
      }
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
      "Chipset": { 
        value: "Intel Z790", 
        score: 95,
        description: "System logic set, determining motherboard functionality."
      },
      "Socket": { 
        value: "LGA 1700", 
        score: 95,
        description: "Processor socket type for installation. Must match processor socket."
      },
      "Form Factor": { 
        value: "ATX", 
        score: 90,
        description: "Motherboard size and shape. ATX is the standard size for most cases."
      },
      "Memory Slots": { 
        value: 4, 
        score: 90,
        description: "Number of memory slots for installing memory modules."
      },
      "Max Memory": { 
        value: 128, 
        score: 95, 
        unit: "GB",
        description: "Maximum supported memory capacity by the motherboard."
      },
      "Memory Type": { 
        value: "DDR5", 
        score: 95,
        description: "Type of supported memory."
      },
      "Memory Speed": { 
        value: 7800, 
        score: 95, 
        unit: "MHz",
        description: "Maximum supported memory frequency."
      },
      "PCIe Slots": { 
        value: "1x PCIe 5.0 x16, 1x PCIe 4.0 x16, 2x PCIe 4.0 x1", 
        score: 95,
        description: "Expansion slots for installing graphics cards and other devices."
      },
      "M.2 Slots": { 
        value: "5x M.2 (4x PCIe 4.0, 1x PCIe 5.0)", 
        score: 95,
        description: "Slots for installing high-speed NVMe SSD storage."
      },
      "SATA Ports": { 
        value: 6, 
        score: 90,
        description: "Number of SATA connectors for storage devices."
      },
      "USB Ports": { 
        value: "14x USB (2x USB4, 4x USB 3.2 Gen 2, 4x USB 3.2 Gen 1, 4x USB 2.0)", 
        score: 95,
        description: "Number and types of USB ports for connecting peripheral devices."
      },
      "WiFi": { 
        value: "WiFi 6E", 
        score: 95,
        description: "Built-in wireless WiFi module and its standard."
      },
      "LAN": { 
        value: "2.5G Ethernet", 
        score: 95,
        description: "Wired network connection speed."
      },
      "Audio": { 
        value: "ROG SupremeFX 7.1", 
        score: 90,
        description: "Built-in sound card and its specifications."
      },
      "RGB Headers": { 
        value: "3x ARGB, 1x RGB", 
        score: 90,
        description: "Connectors for RGB lighting."
      },
      "VRM": { 
        value: "20+1 Phase", 
        score: 95,
        description: "CPU power delivery system, more phases usually means more stable power supply."
      },
      "BIOS": { 
        value: "UEFI AMI", 
        score: 90,
        description: "BIOS type and manufacturer."
      }
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
      "Wattage": { 
        value: 1200, 
        score: 95, 
        unit: "W",
        description: "Maximum power supply output. Should exceed total power consumption of all components."
      },
      "Efficiency": { 
        value: "80+ Platinum", 
        score: 95,
        description: "Power supply efficiency certification. Platinum indicates very high efficiency rating."
      },
      "Modular": { 
        value: "Fully Modular", 
        score: 95,
        description: "Cable connection type. Fully Modular allows disconnecting all unused cables for better cable management."
      },
      "Form Factor": { 
        value: "ATX", 
        score: 90,
        description: "Standard power supply size, must match case specifications."
      },
      "Fan Size": { 
        value: 140, 
        score: 90, 
        unit: "mm",
        description: "Power supply cooling fan size. Larger fans typically operate more quietly."
      },
      "Fan Type": { 
        value: "Fluid Dynamic Bearing", 
        score: 90,
        description: "Fan bearing type. Fluid Dynamic Bearing provides quiet operation and long lifespan."
      },
      "Zero RPM Mode": { 
        value: true, 
        score: 90,
        description: "Fan stop feature at low loads for silent operation."
      },
      "Connectors": { 
        value: "1x 24-pin, 2x 8-pin CPU, 6x 8-pin PCIe, 8x SATA, 4x Molex", 
        score: 95,
        description: "Available power connectors for various computer components."
      },
      "Protections": { 
        value: "OCP, OVP, SCP, OPP, OTP, UVP", 
        score: 95,
        description: "Built-in protection circuits against overload, overvoltage, short circuit, and other issues."
      },
      "MTBF": { 
        value: 100000, 
        score: 90, 
        unit: "hours",
        description: "Mean Time Between Failures - reliability indicator showing expected operational life."
      },
      "Warranty": { 
        value: 10, 
        score: 95, 
        unit: "years",
        description: "Manufacturer warranty period for the power supply."
      },
      "Cable Type": { 
        value: "Premium Braided", 
        score: 95,
        description: "Cable sleeve type. Premium Braided indicates high-quality fabric sleeving."
      },
      "iCUE Compatible": { 
        value: true, 
        score: 90,
        description: "Compatible with Corsair iCUE software for monitoring and control."
      },
      "Input Voltage": { 
        value: "100-240V", 
        score: 95,
        description: "Supported input voltage range for worldwide compatibility."
      },
      "Input Frequency": { 
        value: "47-63Hz", 
        score: 95,
        description: "Supported input frequency range for power supply operation."
      }
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
      "Radiator Size": { 
        value: 360, 
        score: 95, 
        unit: "mm",
        description: "Length of the liquid cooling radiator. Larger size provides better cooling performance."
      },
      "Fan Size": { 
        value: 120, 
        score: 90, 
        unit: "mm",
        description: "Size of radiator fans. 120mm is standard size offering good balance of performance and noise."
      },
      "Fan Speed": { 
        value: "500-2000", 
        score: 90, 
        unit: "RPM",
        description: "Fan rotation speed range. Wide range allows balancing cooling performance and noise."
      },
      "Fan Airflow": { 
        value: 73.11, 
        score: 90, 
        unit: "CFM",
        description: "Amount of air moved by fans per minute. Higher CFM means better cooling."
      },
      "Fan Noise": { 
        value: 21, 
        score: 90, 
        unit: "dBA",
        description: "Fan noise level. Lower value means quieter operation."
      },
      "Pump Speed": { 
        value: "800-2800", 
        score: 90, 
        unit: "RPM",
        description: "Liquid cooling pump speed range. Affects coolant circulation rate."
      },
      "Pump Noise": { 
        value: 21, 
        score: 90, 
        unit: "dBA",
        description: "Pump noise level. Important for comfortable operation."
      },
      "Tubing Length": { 
        value: 400, 
        score: 90, 
        unit: "mm",
        description: "Length of coolant tubes. Affects installation flexibility."
      },
      "LCD Display": { 
        value: true, 
        score: 95,
        description: "Presence of LCD display on pump for temperature and other information."
      },
      "Display Size": { 
        value: 2.36, 
        score: 90, 
        unit: "inches",
        description: "Diagonal size of the LCD display screen."
      },
      "RGB Lighting": { 
        value: true, 
        score: 95,
        description: "Customizable RGB lighting on fans and pump."
      },
      "Software": { 
        value: "NZXT CAM", 
        score: 90,
        description: "Software for controlling cooling settings and lighting effects."
      },
      "Compatibility": { 
        value: "Intel LGA 1700/1200/1151/1150/1155/1156/1366/2011/2011-3/2066, AMD AM5/AM4/TR4/sTRX4", 
        score: 95,
        description: "List of supported processor sockets for cooler installation."
      },
      "Warranty": { 
        value: 6, 
        score: 90, 
        unit: "years",
        description: "Manufacturer warranty period for the cooling system."
      }
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
      "Series": { 
        value: "13th Gen Intel Core", 
        score: 95,
        description: "The processor series indicating generation and family. 13th Gen offers improved performance and efficiency."
      },
      "Model": { 
        value: "Intel Core i9", 
        score: 95,
        description: "The processor model in the lineup. i9 represents the highest performance tier in Intel's consumer processors."
      },
      "Package Type": { 
        value: "Retail", 
        score: 90,
        description: "Delivery type: Retail includes full packaging and documentation, while OEM is processor only."
      },
      "Cooler Included": { 
        value: false, 
        score: 70,
        description: "Whether a stock CPU cooler is included in the package. High-end processors often require aftermarket cooling."
      },
      "Codename": { 
        value: "Raptor Lake", 
        score: 95,
        description: "The internal development name for the processor architecture, indicating technology generation."
      },
      "Socket": { 
        value: "LGA 1700", 
        score: 95,
        description: "The physical interface type for installing the processor on the motherboard."
      },
      "Performance Cores": { 
        value: 8, 
        score: 95,
        description: "Number of high-performance cores optimized for demanding tasks and gaming."
      },
      "Efficiency Cores": { 
        value: 16, 
        score: 90,
        description: "Number of efficiency cores optimized for background tasks and power efficiency."
      },
      "Total Cores": { 
        value: 24, 
        score: 95,
        description: "Total number of physical processing cores combining both performance and efficiency cores."
      },
      "Total Threads": { 
        value: 32, 
        score: 95,
        description: "Total number of logical processing threads, combining both core types with hyperthreading."
      },
      "P-Core Base Clock": { 
        value: 3.0, 
        score: 90, 
        unit: "GHz",
        description: "Base operating frequency of performance cores under normal load."
      },
      "P-Core Boost Clock": { 
        value: 5.8, 
        score: 95, 
        unit: "GHz",
        description: "Maximum frequency performance cores can reach during turbo boost operation."
      },
      "E-Core Base Clock": { 
        value: 2.2, 
        score: 85, 
        unit: "GHz",
        description: "Base operating frequency of efficiency cores under normal load."
      },
      "E-Core Boost Clock": { 
        value: 4.3, 
        score: 90, 
        unit: "GHz",
        description: "Maximum frequency efficiency cores can reach during turbo boost operation."
      },
      "L2 Cache": { 
        value: 32, 
        score: 95, 
        unit: "MB",
        description: "Level 2 cache memory. Affects speed of access to frequently used data."
      },
      "L3 Cache": { 
        value: 36, 
        score: 95, 
        unit: "MB",
        description: "Shared Level 3 cache memory. Larger size improves overall performance."
      },
      "Memory Type": { 
        value: "DDR5/DDR4", 
        score: 95,
        description: "Types of RAM supported by the processor. Supports both DDR5 and DDR4 for flexibility."
      },
      "Memory Channels": { 
        value: 2, 
        score: 90,
        description: "Number of memory channels. Dual-channel mode increases memory bandwidth."
      },
      "Max Memory Speed": { 
        value: 5600, 
        score: 95, 
        unit: "MHz",
        description: "Maximum supported RAM frequency without overclocking."
      },
      "PCIe Version": { 
        value: "5.0", 
        score: 95,
        description: "Supported PCI Express version. PCIe 5.0 offers double the bandwidth of PCIe 4.0."
      },
      "PCIe Lanes": { 
        value: 20, 
        score: 90,
        description: "Number of PCI Express lanes available for connecting devices."
      },
      "TDP": { 
        value: 125, 
        score: 85, 
        unit: "W",
        description: "Thermal Design Power - the amount of heat generated under base load."
      },
      "Max Turbo Power": { 
        value: 253, 
        score: 80, 
        unit: "W",
        description: "Maximum power consumption during turbo boost operation."
      },
      "Process Node": { 
        value: 10, 
        score: 85, 
        unit: "nm",
        description: "Manufacturing process size. Smaller numbers usually mean better efficiency."
      },
      "Integrated Graphics": { 
        value: "Intel UHD Graphics 770", 
        score: 80,
        description: "Built-in graphics processor for basic display output without a dedicated GPU."
      }
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
      "Architecture": { 
        value: "RDNA 3", 
        score: 95,
        description: "GPU architecture design. RDNA 3 offers improved performance and efficiency over previous generations."
      },
      "Compute Units": { 
        value: 96, 
        score: 95,
        description: "Number of compute units for parallel processing. More units = higher performance."
      },
      "Ray Accelerators": { 
        value: 96, 
        score: 95,
        description: "Specialized cores for real-time ray tracing calculations in games."
      },
      "AI Accelerators": { 
        value: 192, 
        score: 95,
        description: "Cores dedicated to AI and machine learning acceleration for features like FSR."
      },
      "Memory": { 
        value: 24, 
        score: 95, 
        unit: "GB",
        description: "Amount of video memory. Affects ability to handle high resolutions and textures."
      },
      "Memory Type": { 
        value: "GDDR6", 
        score: 95,
        description: "Type of video memory. GDDR6 provides high bandwidth for gaming."
      },
      "Memory Bus": { 
        value: 384, 
        score: 95, 
        unit: "bit",
        description: "Memory interface width. Affects data transfer speed with video memory."
      },
      "Memory Speed": { 
        value: 20, 
        score: 95, 
        unit: "Gbps",
        description: "Video memory speed. Higher values provide better memory bandwidth."
      },
      "Game Clock": { 
        value: 2.3, 
        score: 90, 
        unit: "GHz",
        description: "Typical operating frequency during gaming workloads."
      },
      "Boost Clock": { 
        value: 2.5, 
        score: 95, 
        unit: "GHz",
        description: "Maximum frequency the graphics processor can reach under optimal conditions."
      },
      "PCIe Version": { 
        value: "4.0", 
        score: 90,
        description: "PCI Express interface version for motherboard connection."
      },
      "Power Connectors": { 
        value: "2x 8-pin", 
        score: 90,
        description: "Type of power connectors required for additional power supply."
      },
      "Recommended PSU": { 
        value: 800, 
        score: 90, 
        unit: "W",
        description: "Recommended power supply wattage for stable system operation."
      },
      "TDP": { 
        value: 355, 
        score: 85, 
        unit: "W",
        description: "Thermal Design Power - maximum heat output of the graphics card."
      },
      "Process Node": { 
        value: 5, 
        score: 95, 
        unit: "nm",
        description: "Manufacturing process size of the graphics processor."
      },
      "Display Outputs": { 
        value: "2x DP 2.1, 1x HDMI 2.1", 
        score: 95,
        description: "Available display outputs for monitor connections."
      },
      "Max Resolution": { 
        value: "7680x4320", 
        score: 95,
        description: "Maximum supported display resolution."
      },
      "FSR": { 
        value: 3.0, 
        score: 95,
        description: "AMD FidelityFX Super Resolution version for AI-enhanced performance upscaling."
      },
      "Ray Tracing": { 
        value: true, 
        score: 95,
        description: "Support for hardware-accelerated ray tracing for realistic lighting."
      },
      "Infinity Cache": { 
        value: 96, 
        score: 95, 
        unit: "MB",
        description: "High-speed cache memory for improved performance in gaming workloads."
      }
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
      "Capacity": { 
        value: 1, 
        score: 95, 
        unit: "TB",
        description: "Total storage capacity. Measured in terabytes (TB) or gigabytes (GB)."
      },
      "Interface": { 
        value: "PCIe 4.0 x4", 
        score: 95,
        description: "Type of connection to the motherboard. PCIe 4.0 provides high data transfer speed."
      },
      "Form Factor": { 
        value: "M.2 2280", 
        score: 95,
        description: "Physical size and shape of the storage device. M.2 2280 means width of 22mm and length of 80mm."
      },
      "Controller": { 
        value: "WD Black G2", 
        score: 95,
        description: "Microcontroller controlling storage device operation. Affects performance and reliability."
      },
      "NAND Type": { 
        value: "3D TLC", 
        score: 95,
        description: "Type of storage device memory. 3D TLC provides good balance of performance and endurance."
      },
      "Sequential Read": { 
        value: 7300, 
        score: 95, 
        unit: "MB/s",
        description: "Sequential read data speed. Important for working with large files."
      },
      "Sequential Write": { 
        value: 6300, 
        score: 95, 
        unit: "MB/s",
        description: "Sequential write data speed. Important for copying large files."
      },
      "Random Read": { 
        value: 1200000, 
        score: 95, 
        unit: "IOPS",
        description: "Random read speed of small files, measured in operations per second (IOPS)."
      },
      "Random Write": { 
        value: 1000000, 
        score: 95, 
        unit: "IOPS",
        description: "Random write speed of small files, measured in operations per second (IOPS)."
      },
      "TBW": { 
        value: 600, 
        score: 90, 
        unit: "TB",
        description: "Terabytes Written - total data amount that can be written to the storage device over its lifetime."
      },
      "MTBF": { 
        value: 2000000, 
        score: 90, 
        unit: "hours",
        description: "Mean Time Between Failures - average time between failures, reliability indicator."
      },
      "Warranty": { 
        value: 5, 
        score: 90, 
        unit: "years",
        description: "Manufacturer warranty period for the device."
      },
      "Encryption": { 
        value: "AES 256-bit", 
        score: 95,
        description: "Hardware data encryption support for data protection."
      },
      "DRAM Cache": { 
        value: true, 
        score: 95,
        description: "Presence of DRAM cache for improving performance."
      },
      "Gaming Mode": { 
        value: true, 
        score: 90,
        description: "Special optimization mode for gaming workloads."
      },
      "Heatsink": { 
        value: false, 
        score: 70,
        description: "Whether the SSD includes a heatsink for thermal management."
      }
    },
    compatibility: {
      socket: "PCIe 4.0"
    }
  }
]; 