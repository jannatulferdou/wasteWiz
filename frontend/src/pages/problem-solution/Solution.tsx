import { motion } from "framer-motion";
import {
  ArrowRight,
  
  Boxes,
  Brain,
  Factory,

  Recycle,
  
  ShieldCheck,
  Smartphone,
  Sprout,
  type LucideIcon,
} from "lucide-react";

type SolutionCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const systemFlow = [
  "Smart Collection",
  "AI Sorting",
  "Processing Hubs",
  "Triple-Loop Output",
  "Proof Layer",
  "Verified Impact",
];

const solutionCards: SolutionCard[] = [
  {
    icon: Smartphone,
    title: "Smart Collection",
    text: "Solar-powered smart bins collect source-level waste data and incentivize households through reward points.",
  },
  {
    icon: Brain,
    title: "AI Sorting",
    text: "OpenCV and TensorFlow Lite classify plastic types to improve feedstock purity and production quality.",
  },
  {
    icon: Factory,
    title: "Micro-Factories",
    text: "Local processing hubs convert clean waste streams into bricks, pavers, fertilizer, and recyclable polymers.",
  },
  {
    icon: ShieldCheck,
    title: "Proof Layer",
    text: "Blockchain traceability and dashboard reporting verify material movement, impact claims, and credit readiness.",
  },
];

const loops = [
  {
    icon: Recycle,
    title: "High-Value Loop",
    subtitle: "Recycled Polymers",
    text: "PET, PP and HDPE are sorted and supplied to SME recycling partners.",
  },
  {
    icon: Boxes,
    title: "Infrastructure Loop",
    subtitle: "Bricks & Pavers",
    text: "Low-value plastics like sachets and films are transformed into climate-resilient construction materials.",
  },
  {
    icon: Sprout,
    title: "Regenerative Loop",
    subtitle: "Bio-Fertilizer",
    text: "Organic waste is processed into certified fertilizer using composting methods.",
  },
];

const benefits = [
  "Handles both plastic and organic waste streams",
  "Reduces dependence on volatile plastic resale prices",
  "Creates women-led green jobs and local hub ownership",
  "Supports B2G, FMCG, EPR and impact credit markets",
];

const Solution = () => {
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
        

            <p className="mb-5 mt-10 text-sm font-bold uppercase tracking-[0.25em] text-[#247246]">
              WasteWiz Solution
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              An integrated circular engine from collection to verified impact.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F6F7A]">
              WasteWiz connects smart collection, decentralized micro-factories,
              and a proof layer to transform plastic and organic waste into
              infrastructure, fertilizer, credits, and auditable ESG data.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/technology"
                className="rounded-full bg-[#247246] px-8 py-4 font-semibold text-white hover:bg-[#2F8A57]"
              >
                See Technology
              </a>

              <a
                href="/impact"
                className="rounded-full border border-[#247246] px-8 py-4 font-semibold text-[#247246] hover:bg-[#EAF5EE]"
              >
                View Impact
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
              <h3 className="text-2xl font-bold">Solution Snapshot</h3>

              <div className="mt-6 space-y-4">
                {[
                  ["Input", "Plastic + Organic Waste"],
                  ["System", "Smart bins + Micro-factories"],
                  ["Output", "Bricks + Fertilizer + Credits"],
                  ["Verification", "AI + IoT + Blockchain"],
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

      {/* Animated Flow */}
      <section className="px-6 pb-20 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#EAF5EE] p-8 md:p-12">
          <div className="mb-10 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              System Flow
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              From community deposit to verified circular value.
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
              {systemFlow.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 35, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.13, duration: 0.5 }}
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
                    transition={{ delay: index * 0.14, duration: 0.8 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Cards */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Core Components
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Four layers working as one circular system.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionCards.map((item, index) => {
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
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Triple Loop */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Triple-Loop Model
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              No major waste stream is left behind.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {loops.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="bg-[#FAFAF8] p-8"
                >
                  <Icon className="text-[#247246]" size={38} />

                  <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#247246]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">{item.title}</h3>
                  <p className="mt-5 leading-8 text-[#5F6F7A]">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Integration Matters */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Why Integration Matters
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              WasteWiz is not only recycling — it is circular manufacturing.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              Traditional systems depend mostly on high-value plastic resale.
              WasteWiz combines multiple waste streams, production outputs, and
              proof-based data to create a more resilient circular platform.
            </p>
          </div>

          <div className="space-y-5">
            {benefits.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-4 border-t border-[#DCE9E0] pt-5"
              >
                <ArrowRight className="mt-1 text-[#247246]" size={24} />
                <p className="text-lg leading-8 text-[#5F6F7A]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Layer */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="rounded-[36px] bg-[#FAFAF8] p-8">
            <div className="grid gap-4">
              {[
                ["AI", "Quality validation"],
                ["IoT", "Real-time material tracking"],
                ["TOPSIS", "Collection optimization"],
                ["Blockchain", "Traceable proof records"],
                ["Dashboard", "Investor-grade ESG reporting"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="flex items-center justify-between gap-4 border-t border-[#DCE9E0] pt-4"
                >
                  <span className="font-bold text-[#247246]">{title}</span>
                  <span className="text-right text-[#5F6F7A]">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Proof Layer
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Making circular impact auditable.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              WasteWiz uses AI, IoT, routing intelligence, blockchain, and
              dashboards to connect every waste deposit to final product output,
              credit readiness, and ESG reporting.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["AI QA", "IoT Tracking", "Blockchain Ledger", "Power BI"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#FAFAF8] px-4 py-2 text-sm font-semibold text-[#247246]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Optional Image */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Processing Micro-Factories
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Local hubs reduce logistics cost and create community ownership.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              By placing processing close to collection points, WasteWiz reduces
              transport emissions, improves material quality, and creates local
              women-led operational roles.
            </p>
          </div>

          <div className="overflow-hidden rounded-[36px] bg-[#EAF5EE]">
            <img
              src="https://res.cloudinary.com/dwcqwzm0f/image/upload/v1781157873/blog-circular-manufacturing_mqltgs.webp"
              alt="WasteWiz processing micro-factory"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-7xl border-t border-[#DCE9E0] pt-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <h2 className="text-4xl font-bold md:text-5xl">
              Explore the technology behind the WasteWiz solution.
            </h2>

            <div>
              <p className="text-lg leading-8 text-[#5F6F7A]">
                The solution becomes scalable because collection, processing,
                revenue, and verification are designed as one connected system.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/technology"
                  className="rounded-full bg-[#247246] px-7 py-3 font-semibold text-white hover:bg-[#2F8A57]"
                >
                  View Technology
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

export default Solution;