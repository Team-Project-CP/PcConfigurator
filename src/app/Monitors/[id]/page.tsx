"use client";
import { useParams } from "next/navigation";
import { monitors } from "@/lib/data/monitors";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export default function MonitorDetails() {
  const { id } = useParams();
  const monitor = monitors.find((m) => m.id === Number(id));

  if (!monitor) {
    return <div className="text-center text-white py-20">Monitor not found</div>;
  }

  return (
    <main className="bg-white text-black">
    
      {/* <Header /> */}

      {/* Content Section */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl shadow-lg border p-6">
            <img src={monitor.image} alt={monitor.name} className="w-full h-72 object-contain mb-4" />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{monitor.name}</h1>
              <p className="text-gray-600 mb-4 text-lg">{monitor.description}</p>
              <p className="text-[#6C38CC] font-bold text-2xl mb-6">{monitor.price}</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="border rounded-2xl p-4">
                <h2 className="text-xl font-bold mb-4">Detailed Specs</h2>
                <ul className="space-y-2">
                  {Object.entries(monitor.detailedSpecs).map(([key, spec]) => (
                    <li key={key} className="flex justify-between">
                      <span className="text-gray-600">{key}</span>
                      <span>{spec.value} {spec.unit || ""}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border rounded-2xl p-4">
                <h2 className="text-xl font-bold mb-4">Compatibility</h2>
                <ul className="space-y-2">
                  {Object.entries(monitor.compatibility).map(([key, value]) => (
                    <li key={key} className="flex justify-between">
                      <span className="text-gray-600">{key}</span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}
