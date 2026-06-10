import { motion } from "framer-motion";
import {
  
  BriefcaseBusiness,
  Factory,

  Leaf,
  Recycle,
  ShieldCheck,
  Sprout,
  Users,
  Waves,
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

type ImpactCard = {
  icon: LucideIcon;
  title: string;
  value: string;
  text: string;
};

const stats = [
  { value: "15,000+", label: "Tons Waste Diverted" },
  { value: "75,000", label: "Tons CO₂e Reduced" },
  { value: "500+", label: "Green Jobs" },
  { value: "5M+", label: "Bricks Produced" },
];

const wasteGrowth = [
  { year: "2026", waste: 1000 },
  { year: "2027", waste: 3500 },
  { year: "2028", waste: 7000 },
  { year: "2029", waste: 11000 },
  { year: "2030", waste: 15000 },
];

const co2Growth = [
  { year: "2026", co2: 5000 },
  { year: "2027", co2: 18000 },
  { year: "2028", co2: 35000 },
  { year: "2029", co2: 56000 },
  { year: "2030", co2: 75000 },
];

const outputData = [
  { name: "Bricks", value: 5 },
  { name: "Fertilizer", value: 10 },
  { name: "Jobs", value: 500 },
];

const impactCards: ImpactCard[] = [
  {
    icon: Recycle,
    title: "Waste Diverted",
    value: "15,000+ tons",
    text: "Annual mixed waste diversion target across plastic and organic streams.",
  },
  {
    icon: Leaf,
    title: "CO₂ Reduction",
    value: "75,000 tCO₂e",
    text: "Through landfill diversion, methane reduction and optimized logistics.",
  },
  {
    icon: Users,
    title: "Women-led Jobs",
    value: "500+",
    text: "Institutionalized roles for women-led collection and processing hubs.",
  },
  {
    icon: Factory,
    title: "Bricks Produced",
    value: "5M+",
    text: "Climate-resilient bricks and pavers from low-value plastic waste.",
  },
  {
    icon: Sprout,
    title: "Fertilizer Produced",
    value: "10,000 tons",
    text: "Certified bio-fertilizer from organic household waste.",
  },
  {
    icon: Waves,
    title: "Marine Pollution",
    value: "20% drop",
    text: "Projected reduction in targeted river and marine leakage zones.",
  },
];

const pillars = [
  {
    icon: Users,
    title: "People",
    text: "Stable jobs, women-led cooperatives, safer workplaces, and community dignity.",
  },
  {
    icon: Leaf,
    title: "Planet",
    text: "Plastic and organic waste diverted from landfills, rivers, and marine ecosystems.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Prosperity",
    text: "Bricks, fertilizer, credits, franchise kits, and EPR data create value.",
  },
  {
    icon: ShieldCheck,
    title: "Proof",
    text: "AI, IoT, dashboard, and blockchain make every claim audit-ready.",
  },
];

const verificationRows = [
  ["People", "500+ institutionalized jobs", "Payroll data & gender inclusion audits"],
  ["Planet", "15,000+ tons waste diverted", "AI/IoT sensors & blockchain ledger"],
  ["Prosperity", "5M bricks / pavers", "QC lab testing & B2G sales contracts"],
  ["Proof", "$1M+ annual credit revenue", "Registered credit standards"],
];

const Impact = () => {
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
              Impact Dashboard
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Impact that is measured, not claimed.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F6F7A]">
              WasteWiz tracks environmental, social, commercial, and proof-based
              performance through a Quadruple Bottom Line: People, Planet,
              Prosperity, and Proof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-16 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="border-t border-[#DCE9E0] pt-6">
              <h2 className="text-5xl font-bold text-[#247246]">
                {item.value}
              </h2>
              <p className="mt-2 text-[#5F6F7A]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Charts */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Impact Growth
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Growth targets shown through verifiable metrics.
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
                Waste Diversion Growth
              </h3>

              <div className="h-[330px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={wasteGrowth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#DCE9E0" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="waste"
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
                CO₂ Reduction Forecast
              </h3>

              <div className="h-[330px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={co2Growth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#DCE9E0" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="co2"
                      stroke="#263847"
                      fill="#DCE9E0"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Cards */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Impact Areas
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              From unmanaged waste to measurable public value.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {impactCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[28px] border border-[#DCE9E0] bg-white p-7 shadow-sm"
                >
                  <div className="inline-flex rounded-full bg-[#EAF5EE] p-4 text-[#247246]">
                    <Icon size={28} />
                  </div>

                  <p className="mt-8 text-4xl font-bold text-[#247246]">
                    {item.value}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-8 text-[#5F6F7A]">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quadruple Bottom Line */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Quadruple Bottom Line
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              A framework for credible climate-tech impact.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {pillars.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="bg-[#FAFAF8] p-8"
                >
                  <Icon className="text-[#247246]" size={34} />
                  <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-8 text-[#5F6F7A]">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Output Chart + Verification */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="rounded-[32px] bg-[#FAFAF8] p-6">
            <h3 className="mb-6 text-2xl font-bold">
              Output & Social Impact
            </h3>

            <div className="h-[330px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={outputData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#DCE9E0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#247246" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Verification
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Every impact claim has a verification method.
            </h2>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-[#DCE9E0] bg-[#FAFAF8]">
              {verificationRows.map((row) => (
                <div
                  key={row[0]}
                  className="grid gap-3 border-b border-[#DCE9E0] p-5 md:grid-cols-[120px_1fr]"
                >
                  <p className="font-bold text-[#247246]">{row[0]}</p>
                  <div>
                    <p className="font-semibold">{row[1]}</p>
                    <p className="mt-1 text-sm text-[#5F6F7A]">{row[2]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-7xl border-t border-[#DCE9E0] pt-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <h2 className="text-4xl font-bold md:text-5xl">
              View WasteWiz as a measurable circular infrastructure platform.
            </h2>

            <div>
              <p className="text-lg leading-8 text-[#5F6F7A]">
                Our impact model links every ton of waste, every product output,
                every job created, and every credit opportunity to verifiable
                data.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/funding"
                  className="rounded-full bg-[#247246] px-7 py-3 font-semibold text-white hover:bg-[#2F8A57]"
                >
                  View Funding
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

export default Impact;