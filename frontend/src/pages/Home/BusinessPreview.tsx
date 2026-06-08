import { Link } from "react-router-dom";

const revenues = [
  "Bricks & Pavers",
  "Bio-fertilizer",
  "Recycled Polymers",
  "Plastic Credits",
  "Carbon Credits",
  "Franchise Kits",
  "EPR Compliance Data",
];

const BusinessPreview = () => {
  return (
    <section className="bg-[#EAF7EF] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#267246]">
            Revenue Model
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-[#2B3F55] md:text-5xl">
            Stacked revenue designed to reduce commodity risk.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            WasteWiz does not depend only on plastic resale. It creates multiple
            revenue loops from construction, agriculture, credits, data, and
            franchise expansion.
          </p>

          <Link
            to="/business-model"
            className="mt-8 inline-block rounded-full bg-[#267246] px-7 py-4 font-bold text-white"
          >
            View Business Model
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {revenues.map((item) => (
            <div
              key={item}
              className="rounded-3xl bg-white p-6 font-black text-[#2B3F55] shadow-lg"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPreview;