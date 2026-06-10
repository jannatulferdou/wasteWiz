import { motion } from "framer-motion";
import {
  BarChart3,
  Building2,
  CheckCircle2,
 
  Globe2,
  Rocket,
  Target,
  TrendingUp,
  
  type LucideIcon,
} from "lucide-react";

type Phase = {
  period: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  items: string[];
};

const phases: Phase[] = [
  {
    period: "0–6 Months",
    title: "Prototype & MVP Stage",
    icon: Rocket,
    summary:
      "Build the MVP smart bin, validate the 50-user pilot, establish baseline data, and secure early seed support.",
    items: [
      "MVP smart bin with Raspberry Pi / Arduino",
      "50-user pilot and reward testing",
      "Power BI dashboard baseline",
      "$500K seed target",
      "100–200 tons waste processed per hub/year baseline",
    ],
  },
  {
    period: "6–18 Months",
    title: "Pilot Expansion & Commercialization",
    icon: Building2,
    summary:
      "Deploy 10–20 hubs, institutionalize women-led operations, and begin commercial sales through B2G and fertilizer channels.",
    items: [
      "10–20 hubs in Dhaka and Chittagong",
      "Women-led hub training and governance",
      "Plastic-to-bricks and organic fertilizer operations",
      "$2M–$5M Series A target",
      "BARC and BUET certification roadmap",
    ],
  },
  {
    period: "3–5 Years",
    title: "Regional Scaling & Leadership",
    icon: Globe2,
    summary:
      "Scale across Bangladesh and South Asia through franchise hubs, verified impact credits, and institutional partnerships.",
    items: [
      "100 smart hubs across Bangladesh",
      "500 hubs across South Asia",
      "500+ institutionalized jobs",
      "$10M annual revenue target by Year 3",
      "15,000+ tons mixed waste diverted annually",
    ],
  },
];

const milestones = [
  { value: "10–20", label: "Urban hubs in expansion phase" },
  { value: "100", label: "Bangladesh hubs by Year 3" },
  { value: "500", label: "South Asia hubs by Year 5" },
  { value: "$10M", label: "Annual revenue target" },
];

const targets = [
  ["Waste Diversion", "15,000+ tons/year"],
  ["Plastic Waste", "5,000 tons/year"],
  ["Organic Waste", "10,000 tons/year"],
  ["Bricks Produced", "5M units"],
  ["Fertilizer Produced", "10,000 tons"],
  ["CO₂ Reduction", "75,000 tCO₂e/year"],
];

const Roadmap = () => {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#263847]">
      {/* Hero */}
      <section className="px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
    

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="mb-5 mt-10 text-sm font-bold uppercase tracking-[0.25em] text-[#247246]">
              Roadmap & Milestones
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              From community pilot to regional circular infrastructure.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F6F7A]">
              WasteWiz’s roadmap moves from MVP validation to commercial hub
              deployment, then to South Asian scale through standardized hubs,
              women-led operations, and verified impact markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Milestone stats */}
      <section className="px-6 pb-16 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {milestones.map((item) => (
            <div key={item.label} className="border-t border-[#DCE9E0] pt-6">
              <h2 className="text-5xl font-bold text-[#247246]">
                {item.value}
              </h2>
              <p className="mt-2 text-[#5F6F7A]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Growth Timeline
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Three phases toward institutional scale.
            </h2>
          </div>

          <div className="relative space-y-10">
            <motion.div
              className="absolute left-8 top-0 hidden h-full w-1 bg-[#247246] md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.3 }}
              style={{ transformOrigin: "top" }}
            />

            {phases.map((phase, index) => {
              const Icon = phase.icon;

              return (
                <motion.article
                  key={phase.period}
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="relative grid gap-8 rounded-[32px] bg-[#FAFAF8] p-8 shadow-sm md:grid-cols-[96px_1fr]"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#247246] text-white">
                    <Icon size={30} />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#247246]">
                      {phase.period}
                    </p>

                    <h3 className="mt-3 text-3xl font-bold">{phase.title}</h3>

                    <p className="mt-4 max-w-3xl text-lg leading-8 text-[#5F6F7A]">
                      {phase.summary}
                    </p>

                    <div className="mt-7 grid gap-3 md:grid-cols-2">
                      {phase.items.map((item) => (
                        <div key={item} className="flex gap-3">
                          <CheckCircle2
                            className="mt-1 shrink-0 text-[#247246]"
                            size={20}
                          />
                          <p className="leading-7 text-[#5F6F7A]">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Targets */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              3-Year Operating Targets
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Clear milestones tied to measurable outputs.
            </h2>

            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              WasteWiz connects deployment targets with impact, production,
              revenue, and climate outcomes to support investor and partner
              accountability.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#DCE9E0] bg-white">
            {targets.map((row, index) => (
              <motion.div
                key={row[0]}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="grid gap-4 border-b border-[#DCE9E0] p-5 md:grid-cols-2"
              >
                <p className="font-bold text-[#247246]">{row[0]}</p>
                <p className="font-semibold text-[#263847]">{row[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic unlocks */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Strategic Unlocks
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              What each stage unlocks.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Validation",
                text: "MVP smart bin, pilot metrics, dashboard baseline, and early community adoption.",
              },
              {
                icon: TrendingUp,
                title: "Commercialization",
                text: "B2G sales, fertilizer approval, women-led hub operations, and safety infrastructure.",
              },
              {
                icon: BarChart3,
                title: "Credit Monetization",
                text: "Plastic and carbon credit revenue through AI quality verification and blockchain proof.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="border-t border-[#DCE9E0] pt-8"
                >
                  <Icon className="text-[#247246]" size={36} />
                  <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-8 text-[#5F6F7A]">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-7xl border-t border-[#DCE9E0] pt-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <h2 className="text-4xl font-bold md:text-5xl">
              See how the roadmap connects to funding and impact.
            </h2>

            <div>
              <p className="text-lg leading-8 text-[#5F6F7A]">
                Each milestone is tied to capital deployment, hub expansion,
                safety infrastructure, revenue targets, and verified climate
                impact.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/funding"
                  className="rounded-full bg-[#247246] px-7 py-3 font-semibold text-white hover:bg-[#2F8A57]"
                >
                  View Funding
                </a>

                <a
                  href="/impact"
                  className="rounded-full border border-[#247246] px-7 py-3 font-semibold text-[#247246] hover:bg-[#EAF5EE]"
                >
                  View Impact
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Roadmap;