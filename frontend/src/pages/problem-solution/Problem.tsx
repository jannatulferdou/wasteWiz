import { motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  
  Leaf,
  PackageX,
  Recycle,
  Scale,
  ShieldCheck,

  XCircle,
  type LucideIcon,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ProblemCard = {
  icon: LucideIcon;
  title: string;
  value: string;
  text: string;
};

const crisisCards: ProblemCard[] = [
  {
    icon: PackageX,
    title: "Plastic Waste Crisis",
    value: "800,000+ tons",
    text: "Plastic waste generated annually in Bangladesh, with major leakage into rivers and marine ecosystems.",
  },
  {
    icon: Leaf,
    title: "Organic Waste Problem",
    value: "80%",
    text: "Urban municipal waste is dominated by organic household waste, creating methane and landfill pressure.",
  },
  {
    icon: Recycle,
    title: "Recycling Gap",
    value: "Low-value plastic ignored",
    text: "Sachets, films and multilayer plastics are often rejected by traditional recycling systems.",
  },
  {
    icon: AlertTriangle,
    title: "Market Failure",
    value: "No scalable incentive",
    text: "Households lack consistent incentives for source segregation and clean feedstock generation.",
  },
];

const failureReasons = [
  {
    icon: XCircle,
    title: "Selective Valorization",
    text: "Existing systems focus mainly on high-value plastics and ignore organic waste, sachets and films.",
  },
  {
    icon: Scale,
    title: "Commodity Volatility",
    text: "Plastic resale prices fluctuate, making income and operations unstable for informal waste workers.",
  },
  {
    icon: ShieldCheck,
    title: "No Proof Layer",
    text: "Most systems cannot provide audit-ready data for EPR, plastic credits, carbon credits or ESG reporting.",
  },
];

const marketData = [
  { market: "Plastic", value: 3 },
  { market: "Construction", value: 34.4 },
  { market: "Fertilizer", value: 0.906 },
  { market: "Plastic Credits", value: 0.462 },
];

const wasteTrend = [
  { year: "2026", plastic: 0.8, organic: 2.5 },
  { year: "2027", plastic: 0.95, organic: 2.8 },
  { year: "2028", plastic: 1.1, organic: 3.1 },
  { year: "2029", plastic: 1.25, organic: 3.4 },
  { year: "2030", plastic: 1.4, organic: 3.8 },
];

const policies = [
  "Sustainable Public Procurement",
  "Extended Producer Responsibility",
  "Climate Finance",
  "Impact Bonds",
  "Plastic Credit Markets",
  "Carbon Credit Markets",
];

const Problem = () => {
  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#263847]">
      {/* Hero */}
      <section className="px-6 py-24 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/waste-wiz.jpg"
              alt="WasteWiz Logo"
              className="mb-10 h-16 w-auto object-contain"
            />

            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-[#247246]">
              Problem & Market Opportunity
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Bangladesh’s waste crisis is also a circular economy opportunity.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F6F7A]">
              Traditional recycling fails because it leaves behind low-value
              plastics, ignores the organic waste stream, and cannot provide
              proof-based impact data for policy and credit markets.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/solution"
                className="rounded-full bg-[#247246] px-8 py-4 font-semibold text-white hover:bg-[#2F8A57]"
              >
                See Solution
              </a>

              <a
                href="/business-model"
                className="rounded-full border border-[#247246] px-8 py-4 font-semibold text-[#247246] hover:bg-[#EAF5EE]"
              >
                View Market Model
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-[36px] bg-[#EAF5EE] p-6"
          >
            <div className="rounded-[28px] bg-[#FAFAF8] p-6 shadow-sm">
              <h3 className="text-2xl font-bold">Crisis Snapshot</h3>

              <div className="mt-6 space-y-4">
                {[
                  ["Plastic Waste", "800,000+ tons/year"],
                  ["Organic Waste", "80% of urban MSW"],
                  ["Recycling Failure", "Sachets + films ignored"],
                  ["Proof Gap", "No audit-ready impact data"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 border-t border-[#DCE9E0] pt-4"
                  >
                    <span className="text-[#5F6F7A]">{label}</span>
                    <span className="text-right font-bold text-[#247246]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Crisis Cards */}
      <section className="px-6 pb-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {crisisCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border-t border-[#DCE9E0] pt-6"
              >
                <Icon className="text-[#247246]" size={34} />
                <p className="mt-8 text-3xl font-bold text-[#247246]">
                  {item.value}
                </p>
                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-[#5F6F7A]">{item.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Charts */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Waste Pressure
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              The unmanaged waste burden is increasing.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[32px] bg-[#FAFAF8] p-6"
            >
              <h3 className="mb-6 text-2xl font-bold">
                Plastic & Organic Waste Trend
              </h3>

              <div className="h-[330px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={wasteTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#DCE9E0" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="organic"
                      stroke="#263847"
                      fill="#DCE9E0"
                      strokeWidth={3}
                    />
                    <Area
                      type="monotone"
                      dataKey="plastic"
                      stroke="#247246"
                      fill="#A8D8B5"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-[32px] bg-[#FAFAF8] p-6"
            >
              <h3 className="mb-6 text-2xl font-bold">
                Market Opportunity Size
              </h3>

              <div className="h-[330px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marketData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#DCE9E0" />
                    <XAxis dataKey="market" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="value"
                      fill="#247246"
                      radius={[10, 10, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why recycling fails */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Why Existing Recycling Fails
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              The current system captures value selectively.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              Most recycling models prioritize high-value plastics only. This
              leaves organic waste, sachets, films and mixed plastics unmanaged,
              while communities lack incentives and companies lack verified data.
            </p>
          </div>

          <div className="space-y-6">
            {failureReasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="border-t border-[#DCE9E0] pt-6"
                >
                  <Icon className="text-[#247246]" size={32} />
                  <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-8 text-[#5F6F7A]">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Alignment */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Policy & Climate Finance Alignment
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Regulation and finance are creating a new market.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              Sustainable procurement, EPR rules, plastic credits, carbon
              credits and climate finance are increasing demand for verified
              circular infrastructure.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {policies.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                className="border-t border-[#DCE9E0] bg-[#FAFAF8] p-6"
              >
                <BarChart3 className="text-[#247246]" size={28} />
                <h3 className="mt-5 font-bold">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity */}
      <section className="px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-7xl border-t border-[#DCE9E0] pt-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <h2 className="text-4xl font-bold md:text-5xl">
              WasteWiz turns system failure into circular infrastructure.
            </h2>

            <div>
              <p className="text-lg leading-8 text-[#5F6F7A]">
                The opportunity is not only to collect waste, but to create a
                verified engine for construction, agriculture, climate finance,
                and corporate compliance.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/solution"
                  className="rounded-full bg-[#247246] px-7 py-3 font-semibold text-white hover:bg-[#2F8A57]"
                >
                  View Solution
                </a>

                <a
                  href="/technology"
                  className="rounded-full border border-[#247246] px-7 py-3 font-semibold text-[#247246] hover:bg-[#EAF5EE]"
                >
                  See Technology
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Problem;