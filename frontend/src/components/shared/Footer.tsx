import { Link } from "react-router-dom";
import {Leaf, Library, Link2Icon, Mail, MapPin } from "lucide-react";

const company = [
  ["/about", "About"],
  ["/problem", "Problem"],
  ["/solution", "Solution"],
  ["/technology", "Technology"],
  ["/business-model", "Business Model"],
];

const proofImpact = [
  ["/impact", "Impact Dashboard"],
  ["/traction", "Traction"],
  ["/roadmap", "Roadmap"],
  ["/safety-governance", "Safety & ESG"],
  ["/risk-mitigation", "Risk Mitigation"],
];

const growth = [
  ["/funding", "Funding"],
  ["/partners", "Partners"],
  ["/contact", "Contact"],
  ["/dashboard", "Internal Dashboard"],
];

const Footer = () => {
  return (
    <footer className="bg-[#2B3F55] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#267246] via-[#2c6d52] to-[#2B3F55] p-8 shadow-2xl md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#86D3A8]/20 blur-3xl" />

          <div className="relative z-10">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#DDF7E7]">
              Waste to Wealth Engine
            </p>

            <h2 className="max-w-3xl text-3xl font-black leading-tight md:text-5xl">
              Build South Asia’s circular future with AI, proof, and inclusive growth.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-white/80">
              Partner with WasteWiz to transform plastic and organic waste into
              bricks, bio-fertilizer, recycled polymers, verified credits, and jobs.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/partners"
                className="rounded-full bg-white px-7 py-3 text-center font-bold text-[#267246] transition hover:scale-105"
              >
                Partner With Us
              </Link>

              <Link
                to="/impact"
                className="rounded-full border border-white/30 px-7 py-3 text-center font-bold text-white transition hover:bg-white/10"
              >
                View Impact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#267246]">
                <Leaf size={25} />
              </div>

              <div>
                <h3 className="text-2xl font-black">WasteWiz</h3>
                <p className="text-sm font-semibold text-[#86D3A8]">
                  The South Asian Circular Engine
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-7 text-white/70">
              Transforming waste into wealth through AI-driven manufacturing,
              smart collection, blockchain proof, and women-led community growth.
            </p>

            <p className="mt-6 font-black text-[#86D3A8]">
              People • Planet • Prosperity • Proof
            </p>
          </div>

          <FooterGroup title="Company" links={company} />
          <FooterGroup title="Impact & Proof" links={proofImpact} />
          <FooterGroup title="Growth" links={growth} />
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-2">
          <div className="space-y-3 text-sm text-white/70">
            <p className="flex items-center gap-2">
              <MapPin size={17} className="text-[#86D3A8]" />
              Bangladesh, scaling across South Asia
            </p>

            <a
              href="mailto:hello@wastewiz.ai"
              className="flex items-center gap-2 transition hover:text-[#86D3A8]"
            >
              <Mail size={17} className="text-[#86D3A8]" />
              hello@wastewiz.ai
            </a>
          </div>

          <div className="flex items-center gap-3 md:justify-end">
            <a className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#86D3A8] hover:text-[#86D3A8]">
              <Link2Icon size={18} />
            </a>

            <a className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#86D3A8] hover:text-[#86D3A8]">
              <Library size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-white/50">
          © 2026 WasteWiz. Powered by Circular Intelligence.
        </div>
      </section>
    </footer>
  );
};

const FooterGroup = ({
  title,
  links,
}: {
  title: string;
  links: string[][];
}) => {
  return (
    <div>
      <h4 className="mb-5 font-black text-white">{title}</h4>

      <div className="grid gap-3">
        {links.map(([path, label]) => (
          <Link
            key={path}
            to={path}
            className="text-sm font-medium text-white/70 transition hover:text-[#86D3A8]"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;