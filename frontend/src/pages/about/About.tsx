import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Globe2,
  Leaf,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

type Pillar = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const pillars: Pillar[] = [
  {
    icon: Users,
    title: "People",
    text: "Women-led cooperatives, safer jobs, fair income, and community ownership.",
  },
  {
    icon: Leaf,
    title: "Planet",
    text: "Plastic and organic waste diverted from landfills, rivers, and marine ecosystems.",
  },
  {
    icon: Building2,
    title: "Prosperity",
    text: "Circular products, green manufacturing, credits, and franchise-based growth.",
  },
  {
    icon: ShieldCheck,
    title: "Proof",
    text: "AI, IoT, dashboards, and blockchain-backed verification for every claim.",
  },
];

const ideology = [
  "Circular economy manufacturing",
  "3ZERO alignment",
  "Proof-based impact",
  "Women-led cooperative governance",
  "Policy and climate finance readiness",
];

const evolution = [
  {
    label: "RePlastIQ",
    text: "Started as a research and pilot concept focused on plastic waste collection and reuse.",
  },
  {
    label: "WasteWiz",
    text: "Evolved into an AI-enabled circular manufacturing engine for plastic, organic waste, credits, and ESG proof.",
  },
];

const About = () => {
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
              Company Overview
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              The South Asian Circular Engine.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F6F7A]">
              WasteWiz transforms unmanaged plastic and organic waste into
              climate-resilient infrastructure, certified bio-fertilizer,
              verified impact credits, and inclusive community growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/solution"
                className="rounded-full bg-[#247246] px-8 py-4 font-semibold text-white hover:bg-[#2F8A57]"
              >
                Explore Solution
              </a>

              <a
                href="/team"
                className="rounded-full border border-[#247246] px-8 py-4 font-semibold text-[#247246] hover:bg-[#EAF5EE]"
              >
                Meet Team
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
              <Globe2 className="text-[#247246]" size={42} />

              <h3 className="mt-8 text-3xl font-bold">
                Bangladesh to South Asia
              </h3>

              <p className="mt-5 text-lg leading-8 text-[#5F6F7A]">
                Built in Bangladesh with a roadmap for regional expansion across
                South Asia through decentralized hubs and standardized
                WasteWiz Kits.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  ["Country", "Bangladesh"],
                  ["Model", "Circular Manufacturing"],
                  ["System", "AI + IoT + Blockchain"],
                  ["Focus", "People, Planet, Prosperity, Proof"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-t border-[#DCE9E0] pt-4"
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

      {/* Mission Vision */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FAFAF8] p-8"
          >
            <Target className="text-[#247246]" size={38} />
            <p className="mt-8 font-bold uppercase tracking-[0.2em] text-[#247246]">
              Mission
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              Transform waste into resilient value.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              To transform Bangladesh’s plastic crisis into a resilient
              waste-to-wealth engine that converts discarded materials into
              durable industrial infrastructure and sustainable agricultural
              inputs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#FAFAF8] p-8"
          >
            <Sparkles className="text-[#247246]" size={38} />
            <p className="mt-8 font-bold uppercase tracking-[0.2em] text-[#247246]">
              Vision
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              Build a verified circular economy platform.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              To establish a comprehensive circular economy platform powered by
              decentralized AI-enabled networks that maximize value extraction
              from municipal solid waste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Evolution */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Evolution
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              From RePlastIQ to WasteWiz.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              WasteWiz evolved from a student-led community collection and
              research pilot into a financially resilient circular manufacturing
              platform.
            </p>
          </div>

          <div className="relative grid gap-8 lg:grid-cols-2">
            {evolution.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="rounded-[32px] border border-[#DCE9E0] bg-white p-8"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#247246]">
                  Phase {index + 1}
                </p>

                <h3 className="mt-5 text-4xl font-bold">{item.label}</h3>
                <p className="mt-5 text-lg leading-9 text-[#5F6F7A]">
                  {item.text}
                </p>
              </motion.div>
            ))}

            <motion.div
              className="hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:block lg:h-1 lg:w-24 lg:-translate-x-1/2 lg:bg-[#247246]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
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
              People, Planet, Prosperity and Proof.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#FAFAF8] p-8"
                >
                  <Icon className="text-[#247246]" size={34} />
                  <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-8 text-[#5F6F7A]">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Ideology */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Core Ideology
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Built for circular growth with verified accountability.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              WasteWiz connects climate action, social business, manufacturing,
              policy compliance and data verification into one operating model.
            </p>
          </div>

          <div className="space-y-5">
            {ideology.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-4 border-t border-[#DCE9E0] pt-5"
              >
                <ArrowRight className="mt-1 text-[#247246]" size={24} />
                <p className="text-lg font-medium text-[#5F6F7A]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Image */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[36px] bg-[#EAF5EE]">
            <img
              src="/about/community.jpg"
              alt="WasteWiz community circular economy"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Community-Centered Model
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Circular infrastructure that starts with people.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              WasteWiz is designed to formalize informal waste work, strengthen
              women-led hub operations, and turn community participation into
              measurable environmental and economic value.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Women-led hubs", "Digital incentives", "Safe work", "Verified impact"].map(
                (item) => (
                  <div
                    key={item}
                    className="border-t border-[#DCE9E0] pt-4 font-semibold"
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
              Learn how WasteWiz turns waste into verified circular value.
            </h2>

            <div>
              <p className="text-lg leading-8 text-[#5F6F7A]">
                Explore the problem, solution, technology and business model
                behind the WasteWiz circular engine.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/problem"
                  className="rounded-full bg-[#247246] px-7 py-3 font-semibold text-white hover:bg-[#2F8A57]"
                >
                  View Problem
                </a>

                <a
                  href="/solution"
                  className="rounded-full border border-[#247246] px-7 py-3 font-semibold text-[#247246] hover:bg-[#EAF5EE]"
                >
                  View Solution
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;