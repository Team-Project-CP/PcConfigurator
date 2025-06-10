"use client";
import { useParams } from "next/navigation";
import { monitors } from "@/lib/data/monitors";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Header from "../../Header";
import Footer from "../../Footer";

export default function MonitorDetails() {
  const { id } = useParams();
  const monitor = monitors.find((m) => m.id === Number(id));

  if (!monitor) {
    return <div className="text-center text-white py-20">Monitor not found</div>;
  }

  return (
    <main className="bg-white text-black">
      <Header />

      <section className="py-16 px-6 lg:px-20">
        <Link
          href="/Monitors"
          className="text-[#6C38CC] hover:underline flex items-center gap-2 mb-6"
        >
          <FaArrowLeft /> Back to Monitors
        </Link>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="border rounded-2xl shadow-lg p-6">
            <img
              src={monitor.image}
              alt={monitor.name}
              className="w-full h-72 object-contain"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{monitor.name}</h1>
              <p className="text-gray-600 text-lg mb-4">{monitor.description}</p>
              <p className="text-[#6C38CC] font-bold text-2xl mb-6">${monitor.price}</p>
            </div>

            <div className="border rounded-2xl p-4 bg-gray-100">
              <h2 className="text-xl font-bold mb-4">Detailed Specs</h2>
              <ul className="space-y-2">
                {Object.entries(monitor.detailedSpecs || {}).map(([key, spec]) => (
                  <li key={key} className="flex justify-between">
                    <span className="text-gray-500">{key}</span>
                    <span>{spec.value} {spec.unit || ""}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer isVisible={true} />
    </main>
  );
}
