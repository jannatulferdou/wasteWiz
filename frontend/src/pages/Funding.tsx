import { motion } from "framer-motion";
import {
  BarChart3,
  Building2,
  Cpu,
  DollarSign,
  Factory,
  Leaf,
  ShieldCheck,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

type Stat = {
  value: string;
  label: string;
};

type FundItem = {
  icon: LucideIcon;
  title: string;
  percent: number;
  text: string;
};

const stats: Stat[] = [
  { value: "$2M–$5M", label: "Series A Ask" },
  { value: "$500K", label: "Seed Target" },
  { value: "$10M+", label: "Year 3 Revenue Goal" },
  { value: "15,000+", label: "Tons Waste Diverted" },
];

const useOfFunds: FundItem[] = [
  {
    icon: Building2,
    title: "Hub Infrastructure",
    percent: 30,
    text: "Smart bins, micro-factories and processing units.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Equipment",
    percent: 25,
    text: "Fume extraction hoods, VOC detectors and worker safety systems.",
  },
  {
    icon: Cpu,
    title: "Technology & Proof",
    percent: 20,
    text: "AI sorting, IoT sensors, Power BI dashboard and blockchain traceability.",
  },
  {
    icon: Users,
    title: "Workforce Development",
    percent: 15,
    text: "Women-led cooperative training, fair wages and governance.",
  },
  {
    icon: TrendingUp,
    title: "Market Expansion",
    percent: 10,
    text: "B2G contracts, FMCG partnerships, EPR data and credit markets.",
  },
];

const investmentHighlights = [
  "AI-powered smart bins with 95%+ sorting accuracy",
  "10–20 urban hubs targeted in the next scale-up phase",
  "Women-led circular manufacturing workforce",
  "Blockchain-backed plastic and carbon credit verification",
  "Revenue from bricks, fertilizer, credits, franchise kits and EPR data",
];

const revenueModel = [
  "Plastic Bricks & Pavers",
  "Bio-Fertilizer",
  "Recycled Polymers",
  "Plastic Credits",
  "Carbon Credits",
  "Franchise Kits",
  "EPR Compliance Data",
];

const Funding = () => {
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
              Funding / Investor Page
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Funding circular infrastructure for South Asia.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F6F7A]">
              WasteWiz is seeking strategic capital to scale AI-enabled waste
              collection, women-led micro-factories, verified impact reporting,
              and climate finance monetization.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#247246] px-8 py-4 font-semibold text-white hover:bg-[#2F8A57]"
              >
                Request Investor Deck
              </a>

              <a
                href="/impact"
                className="rounded-full border border-[#247246] px-8 py-4 font-semibold text-[#247246] hover:bg-[#EAF5EE]"
              >
                View Impact
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

      {/* Main Ask */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Capital Ask
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              $2M–$5M Series A to move from pilot to institutional scale.
            </h2>

            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              The Series A round will finance hub expansion, safety-mandated
              manufacturing infrastructure, AI/IoT deployment, blockchain proof
              systems, and women-led workforce institutionalization.
            </p>
          </div>

          <div className="bg-[#FAFAF8] p-8">
            <DollarSign className="text-[#247246]" size={42} />

            <h3 className="mt-8 text-3xl font-bold">$2M–$5M</h3>
            <p className="mt-2 text-lg font-semibold text-[#247246]">
              Series A Funding Target
            </p>

            <div className="mt-8 space-y-4">
              {investmentHighlights.map((item) => (
                <div
                  key={item}
                  className="border-t border-[#DCE9E0] pt-4 text-[#5F6F7A]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use of Funds */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Use of Funds
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Capital allocated to scale, safety, proof and market access.
            </h2>
          </div>

          <div className="space-y-6">
            {useOfFunds.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="grid gap-6 border-t border-[#DCE9E0] pt-6 md:grid-cols-[80px_1fr_120px]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF5EE] text-[#247246]">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="mt-2 max-w-2xl leading-8 text-[#5F6F7A]">
                      {item.text}
                    </p>

                    <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#EAF5EE]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full bg-[#247246]"
                      />
                    </div>
                  </div>

                  <p className="text-4xl font-bold text-[#247246]">
                    {item.percent}%
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Revenue */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Revenue Model
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              A stacked revenue engine designed to reduce commodity risk.
            </h2>

            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              WasteWiz combines material sales, organic fertilizer, franchise
              kits, EPR compliance data, plastic credits and carbon credits to
              reduce dependency on volatile plastic commodity prices.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {revenueModel.map((item) => (
              <div
                key={item}
                className="border-t border-[#DCE9E0] bg-[#FAFAF8] p-5"
              >
                <Factory className="text-[#247246]" size={26} />
                <h3 className="mt-5 text-xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Why Now
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Policy, market and climate finance are converging.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Leaf,
                title: "Climate Finance",
                text: "Impact bonds and credit monetization can fund verified pollution reduction.",
              },
              {
                icon: ShieldCheck,
                title: "EPR Compliance",
                text: "FMCG partners need auditable plastic collection and neutrality data.",
              },
              {
                icon: BarChart3,
                title: "Verified Data",
                text: "AI, IoT and blockchain create investor-grade proof instead of claimed impact.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="bg-[#FAFAF8] p-8">
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
              Invest in proof-based circular infrastructure.
            </h2>

            <div>
              <p className="text-lg leading-8 text-[#5F6F7A]">
                WasteWiz is building a scalable waste-to-wealth platform that
                connects climate impact, inclusive jobs, verified ESG data and
                resilient revenue.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#247246] px-7 py-3 font-semibold text-white hover:bg-[#2F8A57]"
                >
                  Contact Investor Relations
                </a>

                <a
                  href="/business-model"
                  className="rounded-full border border-[#247246] px-7 py-3 font-semibold text-[#247246] hover:bg-[#EAF5EE]"
                >
                  View Business Model
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Funding;