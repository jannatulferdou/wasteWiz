import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import logo from "../../assets/waste-wiz-logo.png";
import { FaFacebook, FaLinkedin  } from "react-icons/fa";
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
];

const Footer = () => {
  return (
    <footer className="border-t border-[#DCE9E0] bg-[#FAFAF8] text-[#263847]">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="WasteWiz Logo"
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <h3 className="text-2xl font-black text-[#263847]">
                  WasteWiz
                </h3>
                <p className="text-sm font-semibold text-[#247246]">
                  The South Asian Circular Engine
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-7 text-[#667276]">
              Transforming waste into wealth through AI-driven manufacturing,
              smart collection, blockchain proof, and women-led community
              growth.
            </p>

            <p className="mt-6 font-black text-[#247246]">
              People • Planet • Prosperity • Proof
            </p>
          </div>

          <FooterGroup title="Company" links={company} />
          <FooterGroup title="Impact & Proof" links={proofImpact} />
          <FooterGroup title="Growth" links={growth} />
        </div>

        <div className="mt-14 grid gap-6 border-t border-[#DCE9E0] pt-8 md:grid-cols-2">
          <div className="space-y-3 text-sm text-[#667276]">
            <p className="flex items-center gap-2">
              <MapPin size={17} className="text-[#247246]" />
              Bangladesh, scaling across South Asia
            </p>

            <a
              href="mailto:hello@wastewiz.ai"
              className="flex items-center gap-2 transition hover:text-[#247246]"
            >
              <Mail size={17} className="text-[#247246]" />
              hello@wastewiz.ai
            </a>
          </div>

          <div className="flex items-center gap-3 md:justify-end">
            <a
              href="#"
              className="grid h-11 w-11 place-items-center rounded-full border border-[#DCE9E0] bg-white text-[#667276] transition hover:border-[#247246] hover:bg-[#EAF5EE] hover:text-[#247246]"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="grid h-11 w-11 place-items-center rounded-full border border-[#DCE9E0] bg-white text-[#667276] transition hover:border-[#247246] hover:bg-[#EAF5EE] hover:text-[#247246]"
            >
              <FaLinkedin  size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-[#7C8A86]">
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
      <h4 className="mb-5 text-sm font-black uppercase tracking-[0.14em] text-[#263847]">
        {title}
      </h4>

      <div className="grid gap-3">
        {links.map(([path, label]) => (
          <Link
            key={path}
            to={path}
            className="text-sm font-medium text-[#667276] transition hover:text-[#247246]"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;