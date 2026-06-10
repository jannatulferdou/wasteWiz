import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
 
  FlaskConical,

  Landmark,

  Sprout,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";

type PartnerType = {
  icon: LucideIcon;
  title: string;
  text: string;
  examples: string[];
};

const partnerTypes: PartnerType[] = [
  {
    icon: Landmark,
    title: "Government Partners",
    text: "Municipal bodies, public housing, roads, procurement and climate-resilient infrastructure programs.",
    examples: ["City Corporations", "Public Housing", "Roads & Highways"],
  },
  {
    icon: Store,
    title: "FMCG Partners",
    text: "Brands needing EPR compliance, plastic neutrality proof and auditable collection data.",
    examples: ["EPR Data", "Plastic Credits", "Brand Sponsorship"],
  },
  {
    icon: Users,
    title: "NGO Partners",
    text: "Community mobilization, women-led cooperatives, awareness campaigns and field governance.",
    examples: ["Community Training", "Women-led Hubs", "Awareness"],
  },
  {
    icon: Sprout,
    title: "Agriculture Partners",
    text: "Cooperatives and buyers for certified bio-fertilizer from organic household waste.",
    examples: ["Fertilizer Buyers", "Agri Co-ops", "Soil Health"],
  },
  {
    icon: Building2,
    title: "Construction Partners",
    text: "Buyers and validators for climate-resilient bricks, pavers and low-carbon materials.",
    examples: ["Bricks", "Pavers", "Green Construction"],
  },
  {
    icon: FlaskConical,
    title: "University / Lab Partners",
    text: "Certification, strength testing, fertilizer approval and research validation roadmap.",
    examples: ["BARC", "BUET", "Certification"],
  },
];

const partnershipFlow = [
  "Identify Need",
  "Pilot Design",
  "Data Collection",
  "Verification",
  "Scale Agreement",
];

const benefits = [
  "Verified plastic and carbon impact data",
  "Community-level collection and engagement",
  "Women-led cooperative implementation",
  "Low-carbon construction and agriculture outputs",
  "Policy-aligned EPR and ESG reporting",
];

const Partners = () => {
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
              Partners / B2G / B2B
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Partner with WasteWiz to scale circular infrastructure.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-[#5F6F7A]">
              WasteWiz works with government, FMCG brands, NGOs, agriculture,
              construction and research partners to turn waste into verified
              social, environmental and economic value.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#247246] px-8 py-4 font-semibold text-white hover:bg-[#2F8A57]"
              >
                Become a Partner
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

      {/* Partner Stats */}
      <section className="px-6 pb-16 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {[
            { value: "6", label: "Partner Categories" },
            { value: "B2G", label: "Infrastructure & Procurement" },
            { value: "B2B", label: "EPR & Credit Markets" },
            { value: "100%", label: "Proof-Based Reporting" },
          ].map((item) => (
            <div key={item.label} className="border-t border-[#DCE9E0] pt-6">
              <h2 className="text-5xl font-bold text-[#247246]">
                {item.value}
              </h2>
              <p className="mt-2 text-[#5F6F7A]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partner Types */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Partnership Pathways
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Different partners, one circular engine.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="rounded-[28px] border border-[#DCE9E0] bg-[#FAFAF8] p-7"
                >
                  <div className="inline-flex rounded-full bg-white p-4 text-[#247246]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-8 text-[#5F6F7A]">{item.text}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#247246]"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Animated Partnership Flow */}
      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#FAFAF8] p-8 md:p-12">
          <div className="mb-10 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Partnership Process
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              From pilot to scalable partnership.
            </h2>
          </div>

          <div className="relative">
            <motion.div
              className="absolute left-0 top-1/2 hidden h-1 bg-[#247246] md:block"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />

            <div className="relative grid gap-6 md:grid-cols-5">
              {partnershipFlow.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.14 }}
                  className="rounded-3xl border border-[#DCE9E0] bg-white p-6 shadow-sm"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF5EE] text-lg font-bold text-[#247246]">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold">{item}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Value */}
      <section className="bg-[#EAF5EE] px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              Partner Value
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Partners gain verified impact, market access and community trust.
            </h2>

            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              WasteWiz provides the infrastructure, data and community operating
              model needed for credible climate, ESG, EPR and circular economy
              partnerships.
            </p>
          </div>

          <div className="space-y-5">
            {benefits.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex gap-4 border-t border-[#DCE9E0] bg-[#FAFAF8] p-5"
              >
                <ArrowRight className="mt-1 shrink-0 text-[#247246]" />
                <p className="text-lg leading-8 text-[#5F6F7A]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Partners */}
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#247246]">
              University & Lab Certification Roadmap
            </p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Research validation strengthens product credibility.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5F6F7A]">
              WasteWiz’s certification roadmap includes lab validation for
              bricks, pavers and bio-fertilizer to support B2G procurement,
              agriculture markets and investor confidence.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "BARC fertilizer approval",
              "BUET strength testing",
              "Compost standard compliance",
              "Construction material validation",
              "ESG audit readiness",
              "Credit verification support",
            ].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -5 }}
                className="border-t border-[#DCE9E0] bg-white p-6"
              >
                <FlaskConical className="text-[#247246]" size={28} />
                <h3 className="mt-5 font-bold">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-20">
        <div className="mx-auto max-w-7xl border-t border-[#DCE9E0] pt-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <h2 className="text-4xl font-bold md:text-5xl">
              Build verified circular value with WasteWiz.
            </h2>

            <div>
              <p className="text-lg leading-8 text-[#5F6F7A]">
                Whether you are a government body, FMCG brand, NGO, agriculture
                network, construction buyer or research institution, WasteWiz
                can support measurable circular economy outcomes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="rounded-full bg-[#247246] px-7 py-3 font-semibold text-white hover:bg-[#2F8A57]"
                >
                  Start Partnership
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

export default Partners;