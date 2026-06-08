import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const problems = [
  "Bangladesh generates massive unmanaged plastic waste.",
  "Organic waste dominates municipal waste and creates methane.",
  "Traditional recycling ignores sachets, films, and mixed waste.",
];

const solutions = [
  "AI-powered smart collection and source segregation.",
  "Micro-factories convert waste into useful products.",
  "Proof layer verifies every ton for ESG and credit markets.",
];

const ProblemSolution = () => {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-red-100 bg-white p-8 shadow-xl">
          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-600">
            The Problem
          </span>
          <h2 className="mt-6 text-3xl font-black text-[#2B3F55] md:text-4xl">
            Existing recycling systems fail because they only value easy waste.
          </h2>

          <div className="mt-8 grid gap-4">
            {problems.map((item) => (
              <div key={item} className="flex gap-3">
                <AlertTriangle className="mt-1 text-red-500" size={20} />
                <p className="text-slate-600">{item}</p>
              </div>
            ))}
          </div>

          <Link
            to="/problem"
            className="mt-8 inline-block font-bold text-red-600"
          >
            Explore Market Opportunity →
          </Link>
        </div>

        <div className="rounded-[2rem] border border-[#267246]/10 bg-[#EAF7EF] p-8 shadow-xl">
          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#267246]">
            WasteWiz Solution
          </span>
          <h2 className="mt-6 text-3xl font-black text-[#2B3F55] md:text-4xl">
            We integrate collection, processing, and proof into one circular engine.
          </h2>

          <div className="mt-8 grid gap-4">
            {solutions.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 text-[#267246]" size={20} />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <Link
            to="/solution"
            className="mt-8 inline-block font-bold text-[#267246]"
          >
            See The Solution →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;