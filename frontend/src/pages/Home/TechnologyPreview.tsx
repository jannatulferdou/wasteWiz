import { Brain, Cpu, Database, Network, Route, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const tech = [
  { icon: <Brain />, title: "AI Sorting", text: "OpenCV + TensorFlow Lite" },
  { icon: <Cpu />, title: "IoT Sensors", text: "Fill level and material status" },
  { icon: <Route />, title: "TOPSIS Routing", text: "Optimized collection logistics" },
  { icon: <Network />, title: "Blockchain Proof", text: "Traceability and verification" },
  { icon: <BarChart3 />, title: "Power BI Dashboard", text: "Impact and ESG reporting" },
  { icon: <Database />, title: "Smart Bin Data", text: "Source-level waste intelligence" },
];

const TechnologyPreview = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="rounded-full bg-[#EEF3F8] px-4 py-2 text-sm font-bold text-[#2B3F55]">
            Technology Architecture
          </span>
          <h2 className="mt-6 text-4xl font-black text-[#2B3F55] md:text-5xl">
            A data-rich circular infrastructure stack.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            WasteWiz connects AI sorting, IoT logistics, blockchain traceability,
            and dashboard analytics to make impact measurable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tech.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#2B3F55]/10 bg-[#F8FAFC] p-7 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-[#2B3F55] text-white">
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-[#2B3F55]">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        <Link
          to="/technology"
          className="mt-10 inline-block rounded-full bg-[#2B3F55] px-7 py-4 font-bold text-white"
        >
          Explore Technology
        </Link>
      </div>
    </section>
  );
};

export default TechnologyPreview;