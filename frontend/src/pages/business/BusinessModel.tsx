import { motion } from "framer-motion";
import {
  ArrowRight,
  
  Building2,
  Coins,
  Factory,
  Leaf,
  Network,
  Recycle,
  ShieldCheck,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type Revenue = {
  title: string;
  text: string;
  icon: LucideIcon;
};

const flow = [
  "Smart Collection",
  "AI Sorting",
  "Micro-Factory",
  "Products",
  "Credits",
  "EPR Data",
];

const revenues: Revenue[] = [
  {
    title: "Bricks & Pavers",
    text: "Low-value plastics converted into climate-resilient construction materials.",
    icon: Building2,
  },
  {
    title: "Bio-Fertilizer",
    text: "Organic waste converted into certified agricultural input.",
    icon: Sprout,
  },
  {
    title: "Recycled Polymers",
    text: "High-value PET, PP and HDPE sold to recycling partners.",
    icon: Recycle,
  },
  {
    title: "Plastic Credits",
    text: "Verified plastic diversion data monetized through credit markets.",
    icon: Coins,
  },
  {
    title: "Carbon Credits",
    text: "CO₂ reduction from landfill diversion and optimized logistics.",
    icon: Leaf,
  },
  {
    title: "Franchise Kits",
    text: "WasteWiz Kits and royalties for scalable hub deployment.",
    icon: Factory,
  },
];

const revenueBreakdown = [
  { name: "Bricks & Pavers", value: 35 },
  { name: "Bio-Fertilizer", value: 25 },
  { name: "Plastic Credits", value: 15 },
  { name: "Carbon Credits", value: 10 },
  { name: "EPR Data", value: 10 },
  { name: "Franchise", value: 5 },
];

const chartColors = [
  "#247246",
  "#2F8A57",
  "#7CBF8F",
  "#A8D8B5",
  "#263847",
  "#DCE9E0",
];

const unitEconomics = [
  ["Plastic Bricks", "$0.15–$0.25 / unit", "40% margin"],
  ["Organic Fertilizer", "$150–$250 / ton", "60% margin"],
  ["Plastic Credits", "$140–$670 / ton", "High margin"],
  ["Carbon Credits", "$15–$45 / tCO₂e", "High margin"],
  ["Franchise Hub", "$5K–$15K / kit", "10% royalty"],
];

const BusinessModel = () => {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#263847]">
      {/* Hero */}
      <section className="px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <img
            src="/waste-wiz.jpg"
            alt="WasteWiz Logo"
            className="mb-10 h-16 w-auto object-contain"
          />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#247246]">
              Business Model
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              A stacked revenue engine for circular manufacturing.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F6F7A]">
              WasteWiz converts plastic and organic waste into construction
              materials, fertilizer, verified credits, franchise revenue and
              corporate EPR compliance data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Animated Flow */}
      <section className="px-6 pb-20 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#EAF5EE] p-8 md:p-12">
          <div className="mb-10 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Revenue Flow
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              From waste deposit to verified revenue.
            </h2>
          </div>

          <div className="relative">
            <motion.div
              className="absolute left-0 top-1/2 hidden h-1 bg-[#247246] md:block"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />

            <div className="relative grid gap-6 md:grid-cols-6">
              {flow.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 35, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.14, duration: 0.5 }}
                  className="rounded-3xl border border-[#DCE9E0] bg-[#FAFAF8] p-6 shadow-sm"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-[#247246]">
                    {index + 1}
                  </div>

                  <h3 className="text-lg font-bold">{item}</h3>

                  <motion.div
                    className="mt-6 h-2 rounded-full bg-[#247246]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${100 - index * 8}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.8 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Revenue Streams
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Multiple revenue loops reduce commodity risk.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {revenues.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -7 }}
                  className="rounded-[28px] border border-[#DCE9E0] bg-[#FAFAF8] p-7"
                >
                  <div className="inline-flex rounded-full bg-[#EAF5EE] p-4 text-[#247246]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-8 text-[#5F6F7A]">{item.text}</p>

                  <ArrowRight className="mt-6 text-[#247246]" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chart */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Revenue Breakdown
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Diversified income, not one risky revenue line.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              The model balances construction products, agriculture, credits,
              EPR data and franchising to protect WasteWiz from plastic price
              volatility.
            </p>
          </div>

          <div className="rounded-[32px] bg-[#FAFAF8] p-8">
            <div className="h-[360px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={revenueBreakdown}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={80}
                    outerRadius={130}
                    paddingAngle={3}
                  >
                    {revenueBreakdown.map((entry, index) => (
                      <Cell
                        key={entry.name}
                        fill={chartColors[index % chartColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {revenueBreakdown.map((item, index) => (
                <div key={item.name} className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor:
                        chartColors[index % chartColors.length],
                    }}
                  />
                  <span className="text-sm text-[#5F6F7A]">
                    {item.name} — {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unit Economics */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Unit Economics
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Designed for margins, resilience and scale.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              Construction, agriculture, digital impact assets and franchising
              work together as a resilient circular business model.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#DCE9E0] bg-white">
            {unitEconomics.map((row, index) => (
              <motion.div
                key={row[0]}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="grid gap-4 border-b border-[#DCE9E0] p-5 md:grid-cols-3"
              >
                <p className="font-bold text-[#247246]">{row[0]}</p>
                <p className="text-[#263847]">{row[1]}</p>
                <p className="text-[#5F6F7A]">{row[2]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Market Segments
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              B2G, B2B and impact credit markets.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "B2G Infrastructure",
                text: "Bricks and pavers for public housing, roads and climate-resilient infrastructure.",
                icon: Building2,
              },
              {
                title: "B2B & FMCG",
                text: "EPR compliance data and verified plastic neutrality partnerships.",
                icon: Network,
              },
              {
                title: "Credit Markets",
                text: "Bundled plastic and carbon credits verified through the proof layer.",
                icon: ShieldCheck,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="border-t border-[#DCE9E0] pt-8">
                  <Icon className="text-[#247246]" size={34} />
                  <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-8 text-[#5F6F7A]">{item.text}</p>
                </div>
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
              Explore how WasteWiz turns waste into recurring value.
            </h2>

            <div>
              <p className="text-lg leading-8 text-[#5F6F7A]">
                WasteWiz is built to scale through decentralized hubs,
                centralized technology, and verified market access.
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

export default BusinessModel;