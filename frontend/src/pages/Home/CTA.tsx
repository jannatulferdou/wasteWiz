import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="rounded-full bg-[#EAF7EF] px-4 py-2 text-sm font-bold text-[#267246]">
          Partner • Invest • Build
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight text-[#2B3F55] md:text-6xl">
          Ready to scale circular infrastructure across South Asia?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          WasteWiz is building a proof-based waste-to-wealth platform for
          governments, FMCGs, investors, NGOs, and communities.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/partners"
            className="rounded-full bg-[#267246] px-8 py-4 font-bold text-white transition hover:scale-105"
          >
            Become a Partner
          </Link>

          <Link
            to="/funding"
            className="rounded-full bg-[#2B3F55] px-8 py-4 font-bold text-white transition hover:scale-105"
          >
            Investor Page
          </Link>

          <Link
            to="/contact"
            className="rounded-full border border-[#2B3F55]/20 px-8 py-4 font-bold text-[#2B3F55]"
          >
            Contact Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;