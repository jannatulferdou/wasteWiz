import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Database,
  Network,
  Route,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

type TechItem = {
  title: string;
  subtitle: string;
  text: string;
  icon: LucideIcon;
};

const techStack: TechItem[] = [
  {
    title: "AI Sorting",
    subtitle: "OpenCV + TensorFlow Lite",
    text: "Computer vision detects and classifies plastic types at the smart-bin level for cleaner source segregation.",
    icon: Brain,
  },
  {
    title: "IoT Sensors",
    subtitle: "Fill level + material status",
    text: "Sensors monitor bin fill levels, material flow, and safety signals in real time.",
    icon: Cpu,
  },
  {
    title: "TOPSIS Logistics",
    subtitle: "Route optimization",
    text: "Collection routes are optimized using multi-criteria decision logic to reduce travel distance and fuel use.",
    icon: Route,
  },
  {
    title: "Blockchain Proof",
    subtitle: "Traceability layer",
    text: "Material movement is logged from deposit to processing to final product for audit-ready impact claims.",
    icon: ShieldCheck,
  },
  {
    title: "Power BI Dashboard",
    subtitle: "Investor-grade reporting",
    text: "Impact, revenue, hub performance, and ESG metrics are visualized for decision makers.",
    icon: Database,
  },
  {
    title: "Smart Bin Architecture",
    subtitle: "Solar + edge AI",
    text: "Low-cost hardware supports decentralized collection, incentives, and real-time data capture.",
    icon: Smartphone,
  },
];

const flow = [
  "Smart Bin",
  "AI Classification",
  "IoT Signal",
  "Route Engine",
  "Micro-Factory",
  "Proof Layer",
  "Dashboard",
];

const architecture = [
  ["Input Layer", "Solar smart bins, user deposits, QR/reward events"],
  ["AI Layer", "OpenCV + TensorFlow Lite polymer classification"],
  ["IoT Layer", "Fill level, material status, sensor alerts"],
  ["Optimization Layer", "TOPSIS routing and collection priority"],
  ["Processing Layer", "Plastic bricks, recycled polymers, bio-fertilizer"],
  ["Proof Layer", "Blockchain traceability and credit verification"],
  ["Analytics Layer", "Power BI ESG dashboard and investor reporting"],
];

const Technology = () => {
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
              Technology Architecture
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Turning waste points into data-rich circular infrastructure.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F6F7A]">
              WasteWiz combines AI sorting, IoT sensing, TOPSIS logistics,
              blockchain traceability, and dashboard intelligence to verify
              material flow from collection to impact reporting.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/solution"
                className="rounded-full bg-[#247246] px-8 py-4 font-semibold text-white hover:bg-[#2F8A57]"
              >
                View Solution
              </a>

              <a
                href="/impact"
                className="rounded-full border border-[#247246] px-8 py-4 font-semibold text-[#247246] hover:bg-[#EAF5EE]"
              >
                View Impact
              </a>
            </div>
          </motion.div>

          {/* Hero visual image/mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-[36px] bg-[#EAF5EE] p-6"
          >
            <div className="rounded-[28px] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-[#DCE9E0] pb-5">
                <div>
                  <p className="text-sm font-semibold text-[#247246]">
                    Live System View
                  </p>
                  <h3 className="text-2xl font-bold">WasteWiz Tech Stack</h3>
                </div>
                <Network className="text-[#247246]" size={34} />
              </div>

              <div className="mt-6 space-y-4">
                {[
                  ["AI Sorting", "95%+ Accuracy"],
                  ["IoT Logistics", "14% Route Reduction"],
                  ["Proof Layer", "Blockchain Audit Trail"],
                  ["Dashboard", "Real-time ESG Metrics"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-2xl bg-[#FAFAF8] p-4"
                  >
                    <span className="font-semibold">{label}</span>
                    <span className="font-bold text-[#247246]">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Flow */}
      <section className="px-6 pb-20 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#EAF5EE] p-8 md:p-12">
          <div className="mb-10 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              System Flow
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              From smart collection to verified proof.
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

            <div className="relative grid gap-6 md:grid-cols-7">
              {flow.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 35, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  className="rounded-3xl border border-[#DCE9E0] bg-[#FAFAF8] p-5 shadow-sm"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-[#247246]">
                    {index + 1}
                  </div>

                  <h3 className="text-base font-bold">{item}</h3>

                  <motion.div
                    className="mt-5 h-2 rounded-full bg-[#247246]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${100 - index * 7}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12, duration: 0.7 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Core Technology
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Built for quality, efficiency and audit-ready impact.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {techStack.map((item, index) => {
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

                  <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#247246]">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-8 text-[#5F6F7A]">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture Table */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Architecture
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              A layered system for decentralized circular operations.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              Each layer is designed to improve feedstock quality, lower
              logistics cost, verify impact claims, and support expansion across
              multiple hubs.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#DCE9E0] bg-[#FAFAF8]">
            {architecture.map((row, index) => (
              <motion.div
                key={row[0]}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="grid gap-4 border-b border-[#DCE9E0] p-5 md:grid-cols-[180px_1fr]"
              >
                <p className="font-bold text-[#247246]">{row[0]}</p>
                <p className="leading-7 text-[#5F6F7A]">{row[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional image section */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[36px] bg-[#EAF5EE]">
            <img
              src="/technology/smart-bin.jpg"
              alt="WasteWiz smart bin technology"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Smart Bin Architecture
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Edge intelligence at the point of waste deposit.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              Smart bins capture collection events, classify materials, monitor
              fill level, and send live signals to the routing and dashboard
              systems. This creates the clean data foundation needed for product
              quality, efficient collection, and verified ESG reporting.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Solar-powered", "Low-cost hardware", "AI sorting", "IoT telemetry"].map(
                (item) => (
                  <div
                    key={item}
                    className="border-t border-[#DCE9E0] pt-4 font-semibold text-[#263847]"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-7xl border-t border-[#DCE9E0] pt-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <h2 className="text-4xl font-bold md:text-5xl">
              Technology that makes circular impact verifiable.
            </h2>

            <div>
              <p className="text-lg leading-8 text-[#5F6F7A]">
                WasteWiz does not only collect waste — it captures data,
                improves feedstock quality, reduces route inefficiency, and
                creates proof for impact markets.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/impact"
                  className="rounded-full bg-[#247246] px-7 py-3 font-semibold text-white hover:bg-[#2F8A57]"
                >
                  View Impact
                </a>

                <a
                  href="/business-model"
                  className="rounded-full border border-[#247246] px-7 py-3 font-semibold text-[#247246] hover:bg-[#EAF5EE]"
                >
                  Business Model
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technology;