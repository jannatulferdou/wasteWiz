import { motion } from "framer-motion";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  Cpu,
  Factory,
  Flame,
  Layers,
  LineChart,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

type RiskItem = {
  title: string;
  risk: string;
  impact: string;
  mitigation: string;
  icon: LucideIcon;
};

const stats = [
  { value: "90%+", label: "Operational Risks Covered" },
  { value: "6", label: "Primary Risk Categories" },
  { value: "3", label: "Safety Layers" },
  { value: "100%", label: "Traceable Waste Flow" },
];

const risks: RiskItem[] = [
  {
    title: "Commodity Price Volatility",
    risk: "Plastic resale prices fluctuate and can reduce revenue stability.",
    impact: "Revenue instability",
    mitigation:
      "Diversified revenue through bricks, fertilizer, credits, franchise kits and EPR data.",
    icon: LineChart,
  },
  {
    title: "Feedstock Impurity",
    risk: "Mixed waste contamination can reduce product quality.",
    impact: "Product quality risk",
    mitigation:
      "AI sorting, source-segregation incentives, and hub-level quality control.",
    icon: AlertTriangle,
  },
  {
    title: "Certification Risk",
    risk: "Bricks and fertilizer may face approval delays.",
    impact: "Market access delay",
    mitigation:
      "Early BUET, BARC and BSTI certification roadmap with continuous testing.",
    icon: ShieldCheck,
  },
  {
    title: "Technology Cost",
    risk: "AI, IoT and blockchain deployment can increase CAPEX.",
    impact: "Scaling cost pressure",
    mitigation:
      "Low-cost modular smart bins, phased rollout and centralized software updates.",
    icon: Cpu,
  },
  {
    title: "Toxic Emissions",
    risk: "Plastic processing may release fumes, VOCs or unsafe emissions.",
    impact: "Worker safety risk",
    mitigation:
      "Fume extraction hoods, VOC detectors, PPE, fire safety and safety SOPs.",
    icon: Flame,
  },
  {
    title: "Community Adoption",
    risk: "Low household participation can reduce collection volume.",
    impact: "Low feedstock supply",
    mitigation:
      "Reward points, awareness campaigns, local partnerships and women-led hub ownership.",
    icon: Users,
  },
];

const safeguards = [
  {
    title: "Safety Layer",
    icon: ShieldCheck,
    items: ["VOC detectors", "Fume extraction", "PPE kits", "Fire safety protocol"],
  },
  {
    title: "Technology Layer",
    icon: Cpu,
    items: ["AI quality control", "IoT monitoring", "Dashboard alerts", "Smart routing"],
  },
  {
    title: "Governance Layer",
    icon: Users,
    items: [
      "Women-led governance",
      "ESG audits",
      "Grievance mechanism",
      "Blockchain verification",
    ],
  },
];

const resilience = [
  {
    title: "Diversified Revenue",
    text: "Bricks, fertilizer, credits, EPR data and franchise kits reduce dependence on plastic resale.",
    icon: BarChart3,
  },
  {
    title: "Decentralized Hubs",
    text: "Local hubs reduce single-point failure and support scalable community operations.",
    icon: Factory,
  },
  {
    title: "Proof Layer",
    text: "AI, IoT, dashboards and blockchain make environmental and financial claims traceable.",
    icon: Layers,
  },
  {
    title: "Policy Alignment",
    text: "SPP, EPR and climate finance alignment supports market access and institutional trust.",
    icon: ShieldCheck,
  },
];

const riskMatrix = [
  {
    label: "Toxic Emissions",
    x: "72%",
    y: "18%",
  },
  {
    label: "Certification Risk",
    x: "62%",
    y: "26%",
  },
  {
    label: "Feedstock Impurity",
    x: "58%",
    y: "44%",
  },
  {
    label: "Technology Cost",
    x: "44%",
    y: "58%",
  },
  {
    label: "Community Adoption",
    x: "35%",
    y: "70%",
  },
  {
    label: "Commodity Volatility",
    x: "24%",
    y: "78%",
  },
];

const RiskMitigation = () => {
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
              Risk & Mitigation
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Risk management for circular infrastructure at scale.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F6F7A]">
              WasteWiz manages operational, financial, regulatory, technology,
              safety and community risks through diversified revenue,
              AI-enabled quality control, safety systems and proof-based
              governance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/safety-governance"
                className="rounded-full bg-[#247246] px-8 py-4 font-semibold text-white hover:bg-[#2F8A57]"
              >
                View Governance
              </a>

              <a
                href="/funding"
                className="rounded-full border border-[#247246] px-8 py-4 font-semibold text-[#247246] hover:bg-[#EAF5EE]"
              >
                View Funding
              </a>
            </div>
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

      {/* Risk Matrix */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Risk Matrix
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              High-priority risks are identified before scaling.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              The matrix helps investors and partners understand where WasteWiz
              applies the strongest controls: worker safety, certification,
              feedstock quality, technology cost, adoption and market volatility.
            </p>
          </div>

          <div className="rounded-[32px] bg-[#FAFAF8] p-6">
            <div className="relative h-[420px] border-b-2 border-l-2 border-[#263847]">
              <p className="absolute -left-5 top-0 -rotate-90 text-sm font-bold uppercase tracking-[0.2em] text-[#263847]">
                Impact
              </p>
              <p className="absolute bottom-[-34px] right-0 text-sm font-bold uppercase tracking-[0.2em] text-[#263847]">
                Probability
              </p>

              <div className="absolute left-4 top-4 text-xs font-semibold text-[#5F6F7A]">
                High Impact
              </div>
              <div className="absolute bottom-4 right-4 text-xs font-semibold text-[#5F6F7A]">
                High Probability
              </div>

              {riskMatrix.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="absolute rounded-full bg-[#247246] px-4 py-2 text-xs font-bold text-white shadow-lg"
                  style={{
                    left: item.x,
                    top: item.y,
                  }}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Cards */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Primary Risk Categories
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Each risk has a practical mitigation pathway.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {risks.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[28px] border border-[#DCE9E0] bg-[#FAFAF8] p-7"
                >
                  <div className="inline-flex rounded-full bg-[#EAF5EE] p-4 text-[#247246]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>

                  <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-[#247246]">
                    Risk
                  </p>
                  <p className="mt-2 leading-7 text-[#5F6F7A]">{item.risk}</p>

                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-[#247246]">
                    Mitigation
                  </p>
                  <p className="mt-2 leading-7 text-[#5F6F7A]">
                    {item.mitigation}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safeguards */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Operational Safeguards
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Safety, technology and governance work together.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {safeguards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#FAFAF8] p-8"
                >
                  <Icon className="text-[#247246]" size={38} />
                  <h3 className="mt-8 text-3xl font-bold">{item.title}</h3>

                  <div className="mt-6 space-y-4">
                    {item.items.map((point) => (
                      <div key={point} className="flex gap-3">
                        <CheckCircle2
                          className="mt-1 shrink-0 text-[#247246]"
                          size={20}
                        />
                        <p className="leading-7 text-[#5F6F7A]">{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk Table */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Risk to Mitigation Table
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Investor-ready risk transparency.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              WasteWiz separates risks by impact and mitigation so partners can
              evaluate operational readiness clearly.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#DCE9E0] bg-white">
            {risks.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="grid gap-4 border-b border-[#DCE9E0] p-5 md:grid-cols-[1fr_1fr]"
              >
                <div>
                  <p className="font-bold text-[#247246]">{item.title}</p>
                  <p className="mt-1 text-sm text-[#5F6F7A]">{item.impact}</p>
                </div>
                <p className="leading-7 text-[#5F6F7A]">{item.mitigation}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resilience */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Resilience Framework
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Why the model is built to withstand shocks.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {resilience.map((item, index) => {
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
              Explore the governance and funding strategy behind WasteWiz.
            </h2>

            <div>
              <p className="text-lg leading-8 text-[#5F6F7A]">
                Risk management is connected to worker safety, data integrity,
                capital allocation and verified impact reporting.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/safety-governance"
                  className="rounded-full bg-[#247246] px-7 py-3 font-semibold text-white hover:bg-[#2F8A57]"
                >
                  View Governance
                </a>

                <a
                  href="/funding"
                  className="rounded-full border border-[#247246] px-7 py-3 font-semibold text-[#247246] hover:bg-[#EAF5EE]"
                >
                  View Funding
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RiskMitigation;