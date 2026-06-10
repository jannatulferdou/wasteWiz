import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown,  Menu, X } from "lucide-react";
import logo from "../../assets/waste-wiz-logo.png";

const mainLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Problem", path: "/problem" },
  { name: "Solution", path: "/solution" },
  { name: "Technology", path: "/technology" },
  { name: "Business", path: "/business-model" },
  { name: "Impact", path: "/impact" },
  { name: "Team", path: "/team" },
];

const moreLinks = [

  { name: "Roadmap", path: "/roadmap" },
  { name: "Safety Governance", path: "/safety-governance" },
  { name: "Risk Mitigation", path: "/risk-mitigation" },
  { name: "Funding", path: "/funding" },
  { name: "Partners", path: "/partners" },
  { name: "Contact", path: "/contact" },
];

// const dashboardLinks = [
//   { name: "Dashboard", path: "/dashboard" },
//   { name: "Smart Bins", path: "/dashboard/smart-bins" },
//   { name: "Hubs", path: "/dashboard/hubs" },
//   { name: "Credits", path: "/dashboard/credits" },
//   { name: "Reports", path: "/dashboard/reports" },
// ];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  // const [dashboardOpen, setDashboardOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition duration-300 ${
      isActive ? "text-[#267246]" : "text-slate-600 hover:text-[#2B3F55]"
    }`;

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#267246]/10 bg-white/90 px-4 py-3 shadow-[0_10px_40px_rgba(43,63,85,0.10)] backdrop-blur-xl">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center ">
            <img src={logo} alt="WasteWiz Logo" className="object-cover h-full w-full" />
          </div>

          <div>
            <h1 className="text-xl font-black tracking-tight text-[#2B3F55]">
              WasteWiz
            </h1>
            <p className="-mt-1 text-[11px] font-bold text-[#267246]">
              South Asian Circular Engine
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-5 xl:flex">
          {mainLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navClass}>
              {link.name}
            </NavLink>
          ))}

          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-[#2B3F55]"
            >
              More <ChevronDown size={16} />
            </button>

            {moreOpen && (
              <div className="absolute right-0 top-9 w-64 rounded-3xl border border-[#267246]/10 bg-white p-3 shadow-2xl">
                {moreLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setMoreOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-[#EAF7EF] hover:text-[#267246]"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          {/* <div className="relative">
            <button
              onClick={() => setDashboardOpen(!dashboardOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-slate-600 transition hover:text-[#2B3F55]"
            >
              Dashboard <ChevronDown size={16} />
            </button>

            {dashboardOpen && (
              <div className="absolute right-0 top-9 w-56 rounded-3xl border border-[#2B3F55]/10 bg-white p-3 shadow-2xl">
                {dashboardLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setDashboardOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-[#EEF3F8] hover:text-[#2B3F55]"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div> */}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            to="/partners"
            className="rounded-full border border-[#267246] px-5 py-2.5 text-sm font-bold text-[#267246] transition hover:bg-[#267246] hover:text-white"
          >
            Partner
          </Link>

          <Link
            to="/funding"
            className="rounded-full bg-[#2B3F55] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#2B3F55]/20 transition hover:scale-105 hover:bg-[#223245]"
          >
            Invest Now
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden"
        >
          {mobileOpen ? (
            <X className="text-[#2B3F55]" />
          ) : (
            <Menu className="text-[#2B3F55]" />
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-3xl border border-[#267246]/10 bg-white p-5 shadow-2xl xl:hidden">
          <div className="grid gap-2">
            {[...mainLinks, ...moreLinks].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-[#EAF7EF] hover:text-[#267246]"
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/funding"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-[#2B3F55] px-5 py-3 text-center font-bold text-white"
            >
              Invest Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;