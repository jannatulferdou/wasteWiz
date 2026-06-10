import { motion } from "framer-motion";
import {
  Cpu,
  DollarSign,
  FlaskConical,

  Link2Icon,

  Mail,
  ShieldCheck,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

type Member = {
  name: string;
  role: string;
  image: string;
  icon: LucideIcon;
  bio: string;
  focus: string[];
  email?: string;
  linkedin?: string;
};

const members: Member[] = [
  {
    name: "Md Emon Chowdhury",
    role: "Co-Founder & CEO",
    image: "/team/emon.jpg",
    icon: Target,
    bio: "Leads WasteWiz strategy, B2G partnerships, fundraising, policy alignment, and South Asian expansion.",
    focus: ["Strategy", "Policy", "Fundraising"],
    email: "mdemonchowdhury72@gmail.com",
    linkedin: "https://www.linkedin.com/in/-emon-chowdhury26688/",
  },
  {
    name: "Anik Agarwal",
    role: "Co-Founder & CFO",
    image: "/team/anik.jpg",
    icon: DollarSign,
    bio: "Owns financial modeling, impact credit monetization, revenue architecture, and investment readiness.",
    focus: ["Finance", "Credits", "Revenue"],
  },
  {
    name: "Jannatul Ferdous",
    role: "Co-Founder & CTO",
    image: "/team/jannatul.jpg",
    icon: Cpu,
    bio: "Leads AI sorting, IoT logistics, blockchain traceability, dashboard systems, and product technology.",
    focus: ["AI / IoT", "Blockchain", "Dashboard"],
  },
  {
    name: "Bilkis Akther Niha",
    role: "Lead Researcher",
    image: "/team/niha.jpg",
    icon: FlaskConical,
    bio: "Supports AI/ML validation, contamination detection, product testing, and certification roadmap.",
    focus: ["Research", "ML Validation", "QC"],
  },
];

const stats = [
  { value: "4", label: "Core Leaders" },
  { value: "500+", label: "Future Jobs" },
  { value: "100", label: "Target Hubs" },
  { value: "15,000+", label: "Tons Waste Diverted" },
];

const governance = [
  {
    icon: Users,
    title: "People",
    text: "Women-led cooperative governance and dignified green jobs.",
  },
  {
    icon: ShieldCheck,
    title: "Proof",
    text: "AI, IoT, dashboard and blockchain-backed impact verification.",
  },
  {
    icon: Target,
    title: "Prosperity",
    text: "Circular manufacturing, credit monetization and resilient revenue.",
  },
];

const Team = () => {
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
              Team & Governance
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Building a circular future for South Asia.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F6F7A]">
              WasteWiz is led by a multidisciplinary team combining technology,
              finance, research, climate strategy, and proof-based governance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wide Image Banner */}
      <section className="px-6 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#EAF5EE]">
          <img
            src="/team/team-banner.jpg"
            alt="WasteWiz team"
            className="h-[360px] w-full object-cover"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 lg:px-20">
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

      {/* Leadership Editorial */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Leadership
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Founder-led execution with clear ownership.
            </h2>
          </div>

          <div className="space-y-20">
            {members.map((member, index) => {
              const Icon = member.icon;
              const reverse = index % 2 !== 0;

              return (
                <motion.article
                  key={member.name}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-[32px] bg-[#EAF5EE]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-[520px] w-full object-cover"
                    />
                  </div>

                  <div>
                    <div className="mb-6 inline-flex rounded-full bg-[#EAF5EE] p-4 text-[#247246]">
                      <Icon size={30} />
                    </div>

                    <h3 className="text-4xl font-bold">{member.name}</h3>
                    <p className="mt-2 text-xl font-semibold text-[#247246]">
                      {member.role}
                    </p>

                    <p className="mt-6 max-w-xl text-lg leading-9 text-[#5F6F7A]">
                      {member.bio}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {member.focus.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#247246] shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex gap-3">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="rounded-full border border-[#DCE9E0] bg-white p-3 text-[#247246] hover:bg-[#EAF5EE]"
                        >
                          <Mail size={19} />
                        </a>
                      )}

                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full border border-[#DCE9E0] bg-white p-3 text-[#247246] hover:bg-[#EAF5EE]"
                        >
                          <Link2Icon size={19} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Governance Framework
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              People, prosperity and proof at every level.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {governance.map((item) => {
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
              Partner with a team building verified circular infrastructure.
            </h2>

            <div>
              <p className="text-lg leading-8 text-[#5F6F7A]">
                WasteWiz combines climate innovation, AI-enabled proof systems,
                and inclusive workforce development to transform waste into
                measurable social and environmental value.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#247246] px-7 py-3 font-semibold text-white hover:bg-[#2F8A57]"
                >
                  Contact Team
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

export default Team;