import { motion } from "framer-motion";
import {
  DollarSign,
  ShieldCheck,
  TrendingUp,
  Users,
  Factory,
  Leaf,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const fundingStages = [
  {
    title: "$500K Seed Target",
    subtitle: "Pilot Stability & MVP Validation",
    text: "Smart bin MVP, 50-user pilot, Power BI dashboard, early community collection network.",
  },
  {
    title: "$2M–$5M Series A",
    subtitle: "Scale, Safety & Institutionalization",
    text: "10–20 urban hubs, fume extraction hoods, industrial shredders, women-led workforce, B2G contracts.",
  },
  {
    title: "$10M Revenue Goal",
    subtitle: "Year 3 Commercial Scale",
    text: "100 hubs, impact credit monetization, bricks, fertilizer, franchise kits, EPR data revenue.",
  },
];

const useOfFunds = [
  { icon: <Factory />, title: "Micro-factories", value: "30%", text: "Hub setup, smart bins, processing units." },
  { icon: <ShieldCheck />, title: "Safety Infrastructure", value: "25%", text: "Fume hoods, VOC detectors, worker protection." },
  { icon: <BarChart3 />, title: "Technology & Proof Layer", value: "20%", text: "AI sorting, IoT sensors, blockchain traceability." },
  { icon: <Users />, title: "Women-led Workforce", value: "15%", text: "Training, cooperative governance, stable jobs." },
  { icon: <TrendingUp />, title: "Market Expansion", value: "10%", text: "B2G, FMCG, EPR and credit partnerships." },
];

const financeMix = [
  "Gender Lens Investment",
  "Impact Bonds",
  "Plastic Credits",
  "Carbon Credits",
  "B2G Offtake Contracts",
  "Franchise Kits",
];

export default function Funding() {
  return (
    <main className="min-h-screen bg-[#061A16] text-white overflow-hidden">
      {/* Hero */}
      <section className="relative px-6 py-24 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1ddf8f33,transparent_35%),radial-gradient(circle_at_left,#00d4ff22,transparent_30%)]" />

        <div className="relative mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              Investor & Funding Page
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Funding the South Asian{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                Circular Engine
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              WasteWiz is seeking strategic capital to scale AI-powered waste
              collection, women-led circular manufacturing hubs, and verified
              plastic and carbon credit systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-[#061A16] transition hover:bg-emerald-300"
              >
                Invest in WasteWiz
              </a>
              <a
                href="/impact"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Impact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="rounded-[2rem] border border-white/10 bg-white/10 p-8 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-400/20 p-4 text-emerald-300">
                <DollarSign size={34} />
              </div>
              <div>
                <p className="text-slate-300">Series A Ask</p>
                <h2 className="text-4xl font-bold">$2M–$5M</h2>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl bg-black/20 p-5">
                <p className="text-slate-400">Seed Target</p>
                <h3 className="text-2xl font-bold text-emerald-300">$500K</h3>
              </div>

              <div className="rounded-2xl bg-black/20 p-5">
                <p className="text-slate-400">Year 3 Revenue Target</p>
                <h3 className="text-2xl font-bold text-cyan-300">$10M+</h3>
              </div>

              <div className="rounded-2xl bg-black/20 p-5">
                <p className="text-slate-400">Credit Revenue Target</p>
                <h3 className="text-2xl font-bold text-yellow-300">$1M+ / year</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Funding Stages */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-emerald-300 font-semibold">Capital Strategy</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Funding stages tied to measurable unlocks
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {fundingStages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 hover:bg-white/[0.1] transition"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-emerald-300">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-emerald-300">{item.subtitle}</p>
                <p className="mt-4 text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="bg-[#09231E] px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-cyan-300 font-semibold">Use of Funds</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Capital deployed for scale, proof, and safety
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-5">
            {useOfFunds.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
              >
                <div className="text-emerald-300">{item.icon}</div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-4xl font-bold text-cyan-300">{item.value}</p>
                <p className="mt-3 text-sm text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Mix */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-emerald-300 font-semibold">Blended Finance</p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Not dependent on one source of capital
            </h2>
            <p className="mt-6 text-slate-300">
              WasteWiz combines equity, policy-linked finance, impact bonds,
              credit monetization, and commercial revenue to reduce funding risk
              and increase long-term resilience.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {financeMix.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/[0.06] px-4 py-3"
                >
                  <Leaf className="text-emerald-300" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 p-8"
          >
            <h3 className="text-2xl font-bold">Investment Thesis</h3>
            <p className="mt-4 text-slate-300">
              WasteWiz sits at the intersection of waste infrastructure,
              climate finance, sustainable construction, agriculture, and
              verified ESG data.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "AI-sorted clean feedstock improves product quality.",
                "Organic fertilizer protects revenue from plastic price volatility.",
                "Blockchain proof supports EPR, plastic credits, and carbon credits.",
                "Women-led hubs strengthen Gender Lens Investment appeal.",
              ].map((text) => (
                <div key={text} className="flex gap-3">
                  <ArrowRight className="mt-1 text-emerald-300" size={18} />
                  <p className="text-slate-200">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-10 text-[#061A16] md:p-14">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">
                Ready to fund circular infrastructure?
              </h2>
              <p className="mt-4 text-slate-700">
                Partner with WasteWiz to scale verified waste diversion,
                inclusive jobs, low-carbon materials, and climate finance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a
                href="/contact"
                className="rounded-full bg-[#061A16] px-7 py-3 font-semibold text-white"
              >
                Contact Investor Relations
              </a>
              <a
                href="/business-model"
                className="rounded-full border border-[#061A16]/20 px-7 py-3 font-semibold"
              >
                View Business Model
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}