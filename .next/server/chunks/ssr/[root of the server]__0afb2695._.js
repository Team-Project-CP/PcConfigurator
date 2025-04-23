module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/data/components.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "components": (()=>components)
});
const components = [
    {
        id: 1,
        category: "CPU",
        name: "AMD Ryzen 5 7600X",
        price: 299.99,
        image: "/images/components/cpu-ryzen.png",
        description: "High-performance 6-core processor with Zen 4 architecture for gaming and productivity",
        specs: [
            "6 Cores",
            "12 Threads",
            "Up to 5.3GHz",
            "AM5 Socket",
            "5nm Process"
        ],
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
            chipset: [
                "X670E",
                "X670",
                "B650E",
                "B650",
                "A620"
            ]
        }
    },
    {
        id: 2,
        category: "GPU",
        name: "NVIDIA RTX 4090",
        price: 1599.99,
        image: "/images/components/gpu-rtx.png",
        description: "Ultimate graphics card for 4K gaming and AI workloads",
        specs: [
            "24GB GDDR6X",
            "DLSS 3",
            "Ray Tracing",
            "4K Gaming"
        ],
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
        specs: [
            "32GB (2x16GB)",
            "DDR5-6000",
            "CL30",
            "RGB Lighting"
        ],
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
        specs: [
            "2TB Capacity",
            "7,450 MB/s Read",
            "6,900 MB/s Write",
            "PCIe 4.0"
        ],
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
        specs: [
            "Intel Z790",
            "DDR5 Support",
            "PCIe 5.0",
            "WiFi 6E"
        ],
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
            chipset: [
                "Z790"
            ],
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
        specs: [
            "1200W Output",
            "80+ Platinum",
            "Fully Modular",
            "iCUE Compatible"
        ],
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
        specs: [
            "360mm Radiator",
            "LCD Display",
            "RGB Lighting",
            "CAM Software"
        ],
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
        specs: [
            "24 Cores",
            "32 Threads",
            "Up to 5.8GHz",
            "LGA 1700"
        ],
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
        specs: [
            "24GB GDDR6",
            "2.5GHz Game Clock",
            "Ray Tracing",
            "FSR 3.0"
        ],
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
        specs: [
            "1TB Capacity",
            "7,300 MB/s Read",
            "6,300 MB/s Write",
            "Gaming Mode"
        ],
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
}}),
"[project]/src/app/Components/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Components)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$components$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/components.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// Mock API calls (replace with real API later)
const fetchComponents = async (filters)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$components$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["components"];
};
const fetchComponentById = async (id)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$components$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["components"].find((c)=>c.id === id) || null;
};
const fetchRecommendations = async (component)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$components$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["components"].filter((c)=>{
        if (component.category === 'CPU' && c.category === 'Motherboard') {
            return c.compatibility.socket === component.compatibility.socket;
        }
        return false;
    });
};
function Components() {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [priceRange, setPriceRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        0,
        2000
    ]);
    const [exactMinPrice, setExactMinPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('0');
    const [exactMaxPrice, setExactMaxPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('2000');
    const [showPriceInput, setShowPriceInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("featured");
    const [showQuickView, setShowQuickView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedComponent, setSelectedComponent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [compareList, setCompareList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCompare, setShowCompare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [wishlist, setWishlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [recommendations, setRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTimeout(()=>{
            setLoading(false);
            setIsVisible(true);
        }, 1000);
    }, []);
    const categories = [
        "all",
        "CPU",
        "GPU",
        "RAM",
        "Storage",
        "Motherboard",
        "PSU",
        "Cooling"
    ];
    const sortOptions = [
        {
            value: "featured",
            label: "Featured"
        },
        {
            value: "price-asc",
            label: "Price: Low to High"
        },
        {
            value: "price-desc",
            label: "Price: High to Low"
        },
        {
            value: "name-asc",
            label: "Name: A to Z"
        },
        {
            value: "name-desc",
            label: "Name: Z to A"
        }
    ];
    const handleSort = (components)=>{
        switch(sortBy){
            case "price-asc":
                return [
                    ...components
                ].sort((a, b)=>a.price - b.price);
            case "price-desc":
                return [
                    ...components
                ].sort((a, b)=>b.price - a.price);
            case "name-asc":
                return [
                    ...components
                ].sort((a, b)=>a.name.localeCompare(b.name));
            case "name-desc":
                return [
                    ...components
                ].sort((a, b)=>b.name.localeCompare(a.name));
            default:
                return components;
        }
    };
    const filteredComponents = handleSort(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$components$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["components"].filter((component)=>{
        const matchesCategory = selectedCategory === "all" || component.category === selectedCategory;
        const matchesPrice = component.price >= priceRange[0] && component.price <= priceRange[1];
        const matchesSearch = component.name.toLowerCase().includes(searchQuery.toLowerCase()) || component.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesPrice && matchesSearch;
    }));
    const toggleCompare = (component)=>{
        if (compareList.find((item)=>item.id === component.id)) {
            setCompareList(compareList.filter((item)=>item.id !== component.id));
        } else if (compareList.length < 3) {
            setCompareList([
                ...compareList,
                component
            ]);
        }
    };
    const toggleWishlist = (component)=>{
        if (wishlist.find((item)=>item.id === component.id)) {
            setWishlist(wishlist.filter((item)=>item.id !== component.id));
        } else {
            setWishlist([
                ...wishlist,
                component
            ]);
        }
    };
    const handleExactPriceSubmit = (e)=>{
        e.preventDefault();
        const min = Math.max(0, parseInt(exactMinPrice) || 0);
        const max = Math.min(10000, parseInt(exactMaxPrice) || 2000);
        setPriceRange([
            min,
            max
        ]);
        setShowPriceInput(false);
    };
    const handlePriceInputChange = (value, isMin)=>{
        const numValue = parseInt(value) || 0;
        if (isMin) {
            setExactMinPrice(value);
            if (numValue > parseInt(exactMaxPrice)) {
                setExactMaxPrice(value);
            }
        } else {
            setExactMaxPrice(value);
            if (numValue < parseInt(exactMinPrice)) {
                setExactMinPrice(value);
            }
        }
    };
    // Function to determine which spec is better in comparison
    const getComparisonClass = (spec1, spec2)=>{
        if (!spec1 || !spec2) return '';
        return spec1.score > spec2.score ? 'text-green-500 font-bold' : spec1.score < spec2.score ? 'text-red-500' : 'text-gray-600';
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-600"
            }, void 0, false, {
                fileName: "[project]/src/app/Components/page.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/Components/page.tsx",
            lineNumber: 167,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-purple-600 text-white text-center text-sm py-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`,
                children: [
                    "Certified Refurbished Gaming PCs. ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "underline",
                        children: "Shop now >"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/page.tsx",
                        lineNumber: 177,
                        columnNumber: 43
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/page.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `text-white bg-black px-8 py-4 flex justify-center items-center transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl font-bold",
                                children: "Domino"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex space-x-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-gray-400",
                                        children: "Deals"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-gray-400",
                                        children: "Gaming PCs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/Components",
                                        className: "text-purple-500",
                                        children: "Components"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/Gaming-Gear",
                                        className: "hover:text-gray-400",
                                        children: "Gaming Gear"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/Monitors",
                                        className: "hover:text-gray-400",
                                        children: "Monitors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/Software",
                                        className: "hover:text-gray-400",
                                        children: "Software"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/Community",
                                        className: "hover:text-gray-400",
                                        children: "Community"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/page.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-6 ml-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearch"], {
                                className: "text-xl hover:text-gray-400 cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaQuestionCircle"], {
                                className: "text-xl hover:text-gray-400 cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUser"], {
                                className: "text-xl hover:text-gray-400 cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaShoppingCart"], {
                                className: "text-xl hover:text-gray-400 cursor-pointer"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/page.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/page.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold text-gray-900 mb-4",
                                children: "PC Components"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Build your dream PC with our premium selection of components"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/page.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search components...",
                                            className: "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500",
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearch"], {
                                            className: "absolute right-3 top-3 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500",
                                        value: selectedCategory,
                                        onChange: (e)=>setSelectedCategory(e.target.value),
                                        children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: category,
                                                children: category.charAt(0).toUpperCase() + category.slice(1)
                                            }, category, false, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500",
                                        value: sortBy,
                                        onChange: (e)=>setSortBy(e.target.value),
                                        children: sortOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: option.value,
                                                children: option.label
                                            }, option.value, false, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/page.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700",
                                        children: [
                                            "Price Range: $",
                                            priceRange[0],
                                            " - $",
                                            priceRange[1]
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowPriceInput(!showPriceInput),
                                        className: "text-purple-600 text-sm hover:text-purple-700",
                                        children: showPriceInput ? 'Use Slider' : 'Enter Exact Price'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            showPriceInput ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleExactPriceSubmit,
                                className: "flex gap-4 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "$"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "0",
                                                max: "10000",
                                                value: exactMinPrice,
                                                onChange: (e)=>handlePriceInputChange(e.target.value, true),
                                                className: "w-24 px-2 py-1 border rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "$"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                min: "0",
                                                max: "10000",
                                                value: exactMaxPrice,
                                                onChange: (e)=>handlePriceInputChange(e.target.value, false),
                                                className: "w-24 px-2 py-1 border rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700",
                                        children: "Apply"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0",
                                        max: "2000",
                                        value: priceRange[0],
                                        onChange: (e)=>setPriceRange([
                                                parseInt(e.target.value),
                                                priceRange[1]
                                            ]),
                                        className: "w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "range",
                                        min: "0",
                                        max: "2000",
                                        value: priceRange[1],
                                        onChange: (e)=>setPriceRange([
                                                priceRange[0],
                                                parseInt(e.target.value)
                                            ]),
                                        className: "w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/page.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    compareList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4",
                                    children: compareList.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.image,
                                                    alt: item.name,
                                                    className: "w-12 h-12 object-cover rounded"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: item.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 327,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>toggleCompare(item),
                                                    className: "text-gray-500 hover:text-gray-700",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoClose"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 329,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 323,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCompare(true),
                                    className: "bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700",
                                    children: [
                                        "Compare (",
                                        compareList.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 334,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/page.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/page.tsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                        children: filteredComponents.map((component)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/Components/${component.id}`,
                                className: "bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aspect-square w-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: component.image,
                                                    alt: component.name,
                                                    className: "w-full h-full object-contain p-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 rounded",
                                                children: component.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-2",
                                                children: component.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 mb-4",
                                                children: component.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 366,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-bold text-purple-600",
                                                        children: [
                                                            "$",
                                                            component.price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700",
                                                        children: "View Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 371,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 367,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, component.id, true, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/page.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            showQuickView && selectedComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg max-w-4xl w-full mx-4 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    children: selectedComponent.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowQuickView(false),
                                    className: "text-gray-500 hover:text-gray-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoClose"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 391,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 387,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/page.tsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-square w-full overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: selectedComponent.image,
                                        alt: selectedComponent.name,
                                        className: "w-full h-full object-contain p-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 396,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4",
                                            children: selectedComponent.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 403,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold mb-2",
                                                    children: "Specifications:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "list-disc list-inside text-gray-600",
                                                    children: selectedComponent.specs.map((spec, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: spec
                                                        }, index, false, {
                                                            fileName: "[project]/src/app/Components/page.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 404,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-3xl font-bold text-purple-600",
                                                    children: [
                                                        "$",
                                                        selectedComponent.price
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleWishlist(selectedComponent),
                                                            className: `p-2 rounded ${wishlist.find((item)=>item.id === selectedComponent.id) ? "bg-red-500 text-white" : "bg-gray-200 text-gray-600"}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHeart"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/page.tsx",
                                                                lineNumber: 425,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/page.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>toggleCompare(selectedComponent),
                                                            className: `p-2 rounded ${compareList.find((item)=>item.id === selectedComponent.id) ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-600"}`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBalanceScale"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/Components/page.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/page.tsx",
                                                            lineNumber: 427,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 412,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors",
                                            children: "Add to Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 439,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 402,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/page.tsx",
                            lineNumber: 394,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Components/page.tsx",
                    lineNumber: 384,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/page.tsx",
                lineNumber: 383,
                columnNumber: 9
            }, this),
            showCompare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg max-w-6xl w-full mx-4 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold",
                                    children: "Compare Components"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 453,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCompare(false),
                                    className: "text-gray-500 hover:text-gray-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoClose"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 458,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 454,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/page.tsx",
                            lineNumber: 452,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: compareList.map((component)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-square w-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: component.image,
                                                alt: component.name,
                                                className: "w-full h-full object-contain p-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 465,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 464,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/Components/${component.id}`,
                                            className: "text-xl font-semibold mb-2 hover:text-purple-600 transition-colors",
                                            children: component.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 471,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4",
                                            children: component.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 477,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: Object.entries(component.detailedSpecs).map(([key, spec])=>{
                                                const comparisonClass = getComparisonClass(spec, compareList.find((c)=>c.id !== component.id)?.detailedSpecs[key]);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between py-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-600",
                                                            children: [
                                                                key,
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/page.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: comparisonClass,
                                                            children: [
                                                                spec.value,
                                                                spec.unit || ''
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/Components/page.tsx",
                                                            lineNumber: 489,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 480,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl font-bold text-purple-600 mb-4",
                                            children: [
                                                "$",
                                                component.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 497,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700",
                                            children: "Add to Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 500,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, component.id, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 463,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/page.tsx",
                            lineNumber: 461,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Components/page.tsx",
                    lineNumber: 451,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/page.tsx",
                lineNumber: 450,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-gray-900 text-white py-12 transition-all duration-1000 delay-2600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col lg:flex-row justify-between mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:w-1/2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl font-bold mb-4",
                                            children: "Stay In Touch"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 516,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 mb-6",
                                            children: "Keep up to date on the latest releases, offers, and news from DOMINO"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 517,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 515,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:w-1/2 flex flex-col items-start lg:items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "bg-gray-800 text-white px-4 py-2 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Language"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/page.tsx",
                                                            lineNumber: 522,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "English"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/page.tsx",
                                                            lineNumber: 523,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "bg-gray-800 text-white px-4 py-2 rounded",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "Country"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/page.tsx",
                                                            lineNumber: 526,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            children: "United States"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/Components/page.tsx",
                                                            lineNumber: 527,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 520,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row items-center w-full lg:w-auto",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    placeholder: "Enter your email",
                                                    className: "w-full sm:w-96 px-4 py-2 rounded-l-md text-black focus:outline-none mb-4 sm:mb-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "bg-gray-200 text-gray-900 px-6 py-2 rounded-r-md sm:rounded-l-none hover:bg-gray-300 transition-colors",
                                                    children: "Notify Me"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 519,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/page.tsx",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    id: "terms",
                                    className: "mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 545,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "terms",
                                    className: "text-gray-400 text-sm",
                                    children: [
                                        "By signing up you agree to DOMINO",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "underline",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 548,
                                            columnNumber: 15
                                        }, this),
                                        " and",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "underline",
                                            children: "Terms & Conditions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 549,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 546,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/page.tsx",
                            lineNumber: 544,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-4 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-gray-400 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFacebookF"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 555,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 555,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-gray-400 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTwitter"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 556,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 556,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-gray-400 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 557,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 557,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-gray-400 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaYoutube"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 558,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-gray-400 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTwitch"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 559,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 559,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-gray-400 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTiktok"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 560,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 560,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "text-gray-400 hover:text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaDiscord"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/Components/page.tsx",
                                        lineNumber: 561,
                                        columnNumber: 68
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 561,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/page.tsx",
                            lineNumber: 554,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-5 gap-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-4",
                                            children: "Contact"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 567,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "Customer Support"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 569,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "Submit a Request"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 570,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 570,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "Support Center"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 571,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 571,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "Customer Reviews"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 572,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 572,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 568,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 566,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-4",
                                            children: "About DOMINO"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 576,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "Company"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 578,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 578,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "Founder Q & A"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "Careers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 580,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 580,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 577,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 575,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-4",
                                            children: "Community"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 584,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "DOMINO Club"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 586,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "Podcast"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 587,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "Newsroom & Blog"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 588,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 588,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 585,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 583,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-4",
                                            children: "Software"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "CAM"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "CAM Feedback"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 595,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 593,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 591,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-4",
                                            children: "Account"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 599,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-gray-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "hover:underline",
                                                    children: "Manage Your Account"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/Components/page.tsx",
                                                lineNumber: 601,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 600,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 598,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold mb-4",
                                            children: "DOMINO Store"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 605,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "DOMINO Custom Gaming PC"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 607,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 607,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "Certified Refurbished"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 608,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "Gaming PCs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 609,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 609,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "PC Parts and Accessories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 610,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 610,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "DOMINO for Business"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 611,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:underline",
                                                        children: "Find a Retailer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/Components/page.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/Components/page.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/Components/page.tsx",
                                            lineNumber: 606,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/Components/page.tsx",
                                    lineNumber: 604,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/Components/page.tsx",
                            lineNumber: 565,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-gray-400 hover:underline",
                                children: "FAQ"
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/page.tsx",
                                lineNumber: 619,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/page.tsx",
                            lineNumber: 618,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/Components/page.tsx",
                    lineNumber: 512,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/page.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/page.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__0afb2695._.js.map