import { Briefcase, Leaf, Recycle, Users } from "lucide-react";
import { Link } from "react-router-dom";

const impacts = [
  { icon: <Recycle />, label: "Waste Diverted", value: "15,000+ tons" },
  { icon: <Leaf />, label: "CO₂ Reduction", value: "75,000 tons" },
  { icon: <Users />, label: "Women-led Workforce", value: "50%+ target" },
  { icon: <Briefcase />, label: "Jobs Created", value: "500+" },
];

const ImpactPreview = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] bg-[#2B3F55] p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-[#86D3A8]">
                Impact Dashboard
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight md:text-5xl">
                Measured impact, not claimed impact.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/70">
                WasteWiz tracks People, Planet, Prosperity, and Proof through
                verified operational data, dashboards, and traceability.
              </p>

              <Link
                to="/impact"
                className="mt-8 inline-block rounded-full bg-white px-7 py-4 font-bold text-[#2B3F55]"
              >
                Open Impact Dashboard
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {impacts.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur"
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-full bg-[#86D3A8] text-[#2B3F55]">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black">{item.value}</h3>
                  <p className="mt-1 text-white/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactPreview;