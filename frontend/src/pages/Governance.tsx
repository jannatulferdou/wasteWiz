import { motion } from "framer-motion";
import {
  AlertCircle,
  Bell,
  CheckCircle2,
  Database,
  FileCheck2,
  Flame,
  Handshake,
  Lock,
  Scale,
  ShieldCheck,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";

type GovernanceCard = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const safetyStats = [
  { value: "100%", label: "Traceable Material Flow" },
  { value: "50%+", label: "Women Inclusion Target" },
  { value: "24/7", label: "Dashboard Monitoring" },
  { value: "0", label: "Tolerance for Unsafe Processing" },
];

const safetySystems: GovernanceCard[] = [
  {
    icon: Wind,
    title: "Fume Extraction Hoods",
    text: "Mandatory extraction systems protect workers during plastic processing and reduce exposure to harmful fumes.",
  },
  {
    icon: Bell,
    title: "VOC Detectors",
    text: "Low-cost VOC sensors monitor air quality and trigger safety alerts inside processing hubs.",
  },
  {
    icon: ShieldCheck,
    title: "PPE & Safety SOP",
    text: "Workers follow protective equipment, fire safety, handling, and emergency response procedures.",
  },
  {
    icon: AlertCircle,
    title: "Incident Reporting",
    text: "Safety incidents and pay concerns can be reported through grievance and escalation channels.",
  },
];

const governanceModel: GovernanceCard[] = [
  {
    icon: Users,
    title: "Women-led Cooperative Governance",
    text: "Local women entrepreneurs manage hub operations, workforce dignity, and community accountability.",
  },
  {
    icon: Scale,
    title: "Decision Rights Matrix",
    text: "CEO, CFO, CTO, and Board responsibilities are separated for faster, accountable execution.",
  },
  {
    icon: FileCheck2,
    title: "ESG Audit Readiness",
    text: "Worker safety, gender inclusion, output quality, and impact data are tracked for partner review.",
  },
  {
    icon: Handshake,
    title: "Grievance Mechanism",
    text: "Operators and collectors can escalate safety violations, wage issues, and governance concerns.",
  },
];

const dataGovernance: GovernanceCard[] = [
  {
    icon: Database,
    title: "Impact Data Governance",
    text: "Waste volume, hub output, jobs, CO₂ reduction, and credit records are tracked in dashboards.",
  },
  {
    icon: Lock,
    title: "Anti-Greenwashing Proof",
    text: "Blockchain-backed records reduce the risk of false impact claims and strengthen investor trust.",
  },
  {
    icon: Flame,
    title: "Safety-Linked Reporting",
    text: "VOC, incident, and hub safety data are linked to operational monitoring and ESG reporting.",
  },
];

const standards = [
  "Fume extraction required before scaled plastic processing",
  "VOC detector alerts monitored at hub level",
  "PPE and fire safety SOP for all processing workers",
  "Women-led cooperative governance across hub operations",
  "Blockchain proof layer for anti-greenwashing verification",
  "Grievance mechanism for safety, pay and operational concerns",
  "Board oversight for ESG, safety and capital allocation",
];

const SafetyGovernance = () => {
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
              Safety, ESG & Governance
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Worker safety and proof-based governance are non-negotiable.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F6F7A]">
              WasteWiz combines safety infrastructure, women-led cooperative
              governance, ESG audit readiness, grievance mechanisms, and
              blockchain-backed anti-greenwashing proof.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/risk-mitigation"
                className="rounded-full bg-[#247246] px-8 py-4 font-semibold text-white hover:bg-[#2F8A57]"
              >
                View Risk Mitigation
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
          {safetyStats.map((item) => (
            <div key={item.label} className="border-t border-[#DCE9E0] pt-6">
              <h2 className="text-5xl font-bold text-[#247246]">
                {item.value}
              </h2>
              <p className="mt-2 text-[#5F6F7A]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Safety Systems */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Occupational Safety
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Safety controls built into every processing hub.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              Plastic processing cannot scale without worker protection.
              WasteWiz makes fume extraction, VOC detection, PPE and safety SOPs
              part of the operating model.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {safetySystems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
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

      {/* Governance Model */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Governance Model
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Accountable governance for people, planet, prosperity and proof.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {governanceModel.map((item, index) => {
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
                  <p className="mt-4 leading-8 text-[#5F6F7A]">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Governance */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Data Governance & Anti-Greenwashing
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Verified claims, not vague sustainability promises.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              WasteWiz uses dashboards and blockchain records to make impact
              claims traceable from material deposit to final product output and
              credit reporting.
            </p>
          </div>

          <div className="space-y-6">
            {dataGovernance.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="border-t border-[#DCE9E0] bg-[#FAFAF8] p-6"
                >
                  <Icon className="text-[#247246]" size={30} />
                  <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-8 text-[#5F6F7A]">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance Standards */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Governance Standards
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Operating principles that protect workers and credibility.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              These standards help WasteWiz scale while maintaining safety,
              social integrity, data quality and ESG accountability.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-[#DCE9E0] bg-white">
            {standards.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex gap-4 border-b border-[#DCE9E0] p-5"
              >
                <CheckCircle2
                  className="mt-1 shrink-0 text-[#247246]"
                  size={20}
                />
                <p className="leading-7 text-[#5F6F7A]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Oversight */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
                Board Oversight
              </p>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Oversight for ESG, safety and capital allocation.
              </h2>
            </div>

            <div className="space-y-5">
              {[
                "Review financial performance and safety investments.",
                "Approve Series A capital allocation for safety infrastructure.",
                "Monitor ESG metrics, grievance reports and gender inclusion.",
                "Oversee blockchain proof integrity and audit readiness.",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex gap-4 border-t border-[#DCE9E0] pt-5"
                >
                  <CheckCircle2
                    className="mt-1 shrink-0 text-[#247246]"
                    size={20}
                  />
                  <p className="text-lg leading-8 text-[#5F6F7A]">{item}</p>
                </motion.div>
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
              Safety and governance strengthen WasteWiz’s investment case.
            </h2>

            <div>
              <p className="text-lg leading-8 text-[#5F6F7A]">
                Worker safety, grievance reporting, proof-based impact and ESG
                governance reduce operational risk and increase stakeholder
                trust.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/risk-mitigation"
                  className="rounded-full bg-[#247246] px-7 py-3 font-semibold text-white hover:bg-[#2F8A57]"
                >
                  View Risk Mitigation
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

export default SafetyGovernance;