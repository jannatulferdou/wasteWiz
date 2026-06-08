import React from 'react';
import {
  Users,
  Mail, 
  Globe,
  Package,
  Award,
  CheckCircle,
  Shield,
  Lock,

  BadgeCheck,
  Target,

  Heart,

  Cpu,
  Activity,

  Calendar,

  Crown,
  Scale,

  UsersRound,
  Factory,
} from 'lucide-react';

const colors = {
  white: '#FFFFFF',
  softGreen: '#E8F3EB',
  navy: '#0A2540',
  accentGreen: '#2E7D32',
  navyLight: '#1A3A5C',
  textDark: '#1A2C2C',
  textMuted: '#5A6E6E',
  gold: '#FFC107',
  blue: '#3B82F6',
  purple: '#8B5CF6',
  pink: '#EC4899',
  orange: '#F97316',
  cyan: '#06B6D4',
};

// Team Header Component
const TeamHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navyLight text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L1000,0 L1000,800 L0,800 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="750" cy="550" r="180" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <rect x="420" y="280" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Leadership</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Meet the
            <span className="text-accent"> Team</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A diverse group of entrepreneurs, technologists, and impact leaders united by a shared vision 
            of a circular economy for South Asia.
          </p>
        </div>
      </div>
    </div>
  );
};

// Founder & Co-Founders Component
const FoundersSection = () => {
  const founders = [
    {
      name: "Md Emon Chowdhury",
      role: "Co-Founder & Chief Executive Officer",
      bio: "Aspiring economist, researcher, and key figure in the 3ZERO Club dedicated to achieving zero net carbon emissions and zero poverty. Provides strategic vision, B2G negotiations, and Series A fundraising.",
      icon: "👨‍💼",
      expertise: ["Strategic Vision", "B2G Negotiations", "Policy Alignment", "Fundraising"],
      linkedin: "https://www.linkedin.com/in/-emon-chowdhury26688/",
      email: "mdemonchowdhury72@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Anik Agarwal",
      role: "Co-Founder & Chief Financial Officer",
      bio: "BBA in Accounting and Information Systems from the University of Dhaka. Manages multi-layered revenue architecture, financial modeling, and credit monetization.",
      icon: "💰",
      expertise: ["Financial Modeling", "Credit Monetization", "Cash Flow Management", "Revenue Architecture"],
      linkedin: "#",
      email: "anik@wastewiz.com",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Jannatul Ferdous",
      role: "Co-Founder & Chief Technology Officer",
      bio: "Former Tech Lead during prototype phase, now oversees AI, IoT, and Blockchain architecture. Ensures 95%+ sorting accuracy and Proof Layer security.",
      icon: "👩‍💻",
      expertise: ["AI/ML Models", "IoT Networks", "Blockchain", "System Architecture"],
      linkedin: "#",
      email: "jannatul@wastewiz.com",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-softGreen rounded-full px-4 py-2 mb-4">
            <Crown className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-navy">Leadership</span>
          </div>
          <h2 className="text-3xl font-bold text-navy mb-3">Founders & Co-Founders</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4 max-w-2xl mx-auto">
            The visionary minds behind WasteWiz, bringing together expertise in economics, finance, and technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {founders.map((founder, idx) => (
            <div key={idx} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className={`bg-gradient-to-r ${founder.color} p-6 text-white relative`}>
                <div className="absolute top-4 right-4 opacity-20">
                  <Users className="w-16 h-16" />
                </div>
                <div className="text-6xl mb-3">{founder.icon}</div>
                <h3 className="text-2xl font-bold">{founder.name}</h3>
                <p className="text-sm opacity-90 mt-1">{founder.role}</p>
              </div>
              
              <div className="p-6">
                <p className="text-textMuted text-sm leading-relaxed mb-4">{founder.bio}</p>
                
                <div className="mb-4">
                  <p className="text-xs font-semibold text-navy mb-2">Core Expertise</p>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((exp, i) => (
                      <span key={i} className="text-xs bg-softGreen text-navy px-2 py-1 rounded-full">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" 
                     className="text-navy hover:text-accent transition">
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${founder.email}`} className="text-navy hover:text-accent transition">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// C-Suite Overview Component
const CSuiteSection = () => {
  const executives = [
    {
      title: "Chief Operating Officer (COO)",
      responsibility: "Owns geographical synchronization of triple-loop system, managing co-location of collection hubs and processing micro-factories.",
      icon: Factory,
      color: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Chief Product Officer (CPO)",
      responsibility: "Owns certification pathways and quality standards for industrial outputs, including P2B/R bricks and OFC bio-fertilizers.",
      icon: Package,
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Chief Development Officer (CDO)",
      responsibility: "Manages investor linkages and strategic expansion into South Asian markets.",
      icon: Globe,
      color: "bg-green-50",
      iconColor: "text-accent"
    },
    {
      title: "Chief Marketing Officer (CMO)",
      responsibility: "Owns 'Award-Winning Narrative' and global brand visibility with tier-1 development partners.",
      icon: Award,
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "Chief Human Resources Officer (CHRO)",
      responsibility: "Responsible for welfare and institutionalization of 500+ women-led cooperative workforce.",
      icon: UsersRound,
      color: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      title: "Chief Legal & Compliance Officer (CLCO)",
      responsibility: "Manages Extended Producer Responsibility (EPR) data reporting and regulatory compliance.",
      icon: Shield,
      color: "bg-cyan-50",
      iconColor: "text-cyan-600"
    }
  ];

  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">C-Suite Leadership</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4">Institutional-grade management for diversified manufacturing and digital asset loops</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {executives.map((exec, idx) => (
            <div key={idx} className={`${exec.color} rounded-2xl p-5 hover:shadow-lg transition`}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <exec.icon className={`${exec.iconColor} w-5 h-5`} />
                </div>
                <h3 className="font-bold text-navy">{exec.title}</h3>
              </div>
              <p className="text-textMuted text-sm leading-relaxed">{exec.responsibility}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Board Oversight Component
const BoardSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-navy/10 rounded-full px-4 py-2 mb-4">
              <Scale className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-navy">Governance</span>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Board Oversight
            </h2>
            <p className="text-textMuted mb-6 leading-relaxed">
              The Board of Directors provides high-level fiduciary and strategic oversight, ensuring WasteWiz 
              adheres to its mission of 3ZERO alignment and circular growth.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-softGreen rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Composition</h4>
                  <p className="text-sm text-textMuted">Co-Founders + independent directors from academia, NGOs, and Cleantech Accelerator network</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-softGreen rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Meeting Cadence</h4>
                  <p className="text-sm text-textMuted">Quarterly reviews of financial performance, ESG impact metrics, and technological roadmaps</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-softGreen rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Decision Rights</h4>
                  <p className="text-sm text-textMuted">Final approval for regional expansion, equity distribution, annual budget, and C-Suite reviews</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-navy rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Shield className="text-accent" /> Board Responsibilities
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Approving annual budget and Series A capital allocation ($2-5M)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Ensuring integrity of Blockchain audit trails</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Overseeing ESG compliance and impact measurement</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm">Reviewing executive performance and succession planning</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Governance Policies Component
const GovernancePolicies = () => {
  const policies = [
    {
      title: "Health, Safety, and Environment (HSE)",
      description: "Mandatory capital investment in industrial fume extraction hoods and low-cost VOC detectors. Regular safety audits at every hub maintain compliance with global ESG standards.",
      icon: Shield,
      color: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      title: "ESG & Social Integrity",
      description: "50%+ gender inclusion target across all processing, management, and collection roles. Formalizing informal pickers into institutionalized roles with stable wages.",
      icon: Heart,
      color: "bg-pink-50",
      iconColor: "text-pink-600"
    },
    {
      title: "Data Governance",
      description: "Private blockchain prevents data tampering and 'greenwashing'. Immutable material flow data ensures audit readiness for plastic credit verification.",
      icon: Lock,
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "Conflict of Interest",
      description: "All executives and board members sign annual Conflict of Interest disclosures, specifically regarding third-party recycling contracts and B2G procurement bids.",
      icon: Scale,
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Governance Policies</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4">Institutional-grade accountability at every level</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {policies.map((policy, idx) => (
            <div key={idx} className={`${policy.color} rounded-2xl p-6 flex gap-4 hover:shadow-lg transition`}>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <policy.icon className={`${policy.iconColor} w-6 h-6`} />
              </div>
              <div>
                <h3 className="font-bold text-navy mb-2">{policy.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{policy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// KPIs & Decision Rights Component
const KPIDecisionRights = () => {
  const kpis = [
    { role: "CEO", person: "Md Emon Chowdhury", responsibilities: "Strategic direction, B2G linkages, 3ZERO alignment", kpis: "Total Mass Diverted (15k+ Tons), Hub Expansion (100 hubs), Series A funding target" },
    { role: "CFO", person: "Anik Agarwal", responsibilities: "Financial analysis, credit monetization, cash flow", kpis: "Annual Credit Revenue ($1M+), Profit margins (40-60%), Hub-level IRR" },
    { role: "CTO", person: "Jannatul Ferdous", responsibilities: "AI, IoT, and Blockchain architecture", kpis: "AI sorting accuracy (95%+), Logistics efficiency (14%+ reduction), System uptime" },
    { role: "Lead Researcher", person: "Bilkis Akther Niha", responsibilities: "AI/ML development and model validation", kpis: "ML model precision, Certification throughput, Contamination detection rate" },
  ];

  const decisionRights = [
    { role: "CEO", rights: "B2G contract finalization, Series A term sheets, strategic brand sponsorships, C-Suite hiring" },
    { role: "CFO", rights: "Hub CAPEX allocations (shredders/safety kits), credit marketplace transactions, franchise fee adjustments" },
    { role: "CTO", rights: "Blockchain protocol changes, AI model updates, IoT infrastructure deployment at new hubs" },
    { role: "Board", rights: "Regional expansion beyond Bangladesh, equity distribution, annual budget approval, C-Suite performance reviews" },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-navy mb-3 text-center">Executive KPIs</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-navy">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Person</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Core Responsibilities</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">3-5 Key KPIs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {kpis.map((item, idx) => (
                  <tr key={idx} className="hover:bg-softGreen/30 transition">
                    <td className="px-6 py-4 font-semibold text-navy">{item.role}</td>
                    <td className="px-6 py-4 text-textMuted">{item.person}</td>
                    <td className="px-6 py-4 text-textMuted text-sm">{item.responsibilities}</td>
                    <td className="px-6 py-4 text-textMuted text-sm">{item.kpis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-navy mb-3 text-center">Decision Rights Matrix</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {decisionRights.map((item, idx) => (
              <div key={idx} className="bg-softGreen rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-navy">{item.role}</h3>
                </div>
                <p className="text-textMuted text-sm">{item.rights}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Hub/Field Governance Component
const HubGovernance = () => {
  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Hub & Field Governance</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4">Cooperative Environmental Governance (CEG) in action</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-softGreen rounded-full flex items-center justify-center mx-auto mb-4">
              <UsersRound className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Accountability</h3>
            <p className="text-textMuted text-sm">Local women entrepreneurs act as franchisees, managing decentralized micro-factories with full P&L responsibility.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-softGreen rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Standardization</h3>
            <p className="text-textMuted text-sm">HQ retains control over technology stack and enforces standardized QC protocols through AI-driven Quality Assurance Engine.</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 text-center">
            <div className="w-16 h-16 bg-softGreen rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-2">Monitoring</h3>
            <p className="text-textMuted text-sm">Real-time IoT sensors and Power BI dashboard track material throughput, worker safety, and decomposition rates at every hub.</p>
          </div>
        </div>
        
        <div className="mt-8 bg-navy rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <MessageIcon className="w-5 h-5 text-accent" />
            <h3 className="font-bold">Grievance Mechanism</h3>
          </div>
          <p className="text-gray-300 text-sm">
            Mobile-app-based grievance reporting system allows women operators and community collectors to report 
            safety violations or pay discrepancies directly to the CHRO and the Board's Audit Committee.
          </p>
        </div>
      </div>
    </div>
  );
};

// Research & Advisory Team Component
const ResearchTeam = () => {
  const researchers = [
    { name: "Bilkis Akther Niha", role: "Lead Researcher", focus: "AI/ML development and model validation", icon: "🔬" },
    { name: "Dr. Muhammad Hasan", role: "Technical Advisor", focus: "Materials science & polymer engineering", icon: "🧪" },
    { name: "Prof. Farhana Ahmed", role: "Sustainability Advisor", focus: "Environmental impact assessment", icon: "🌱" },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Research & Advisory</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4">Academic and technical expertise backing our innovation</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {researchers.map((researcher, idx) => (
            <div key={idx} className="bg-softGreen rounded-2xl p-6 text-center hover:shadow-lg transition">
              <div className="text-5xl mb-3">{researcher.icon}</div>
              <h3 className="text-xl font-bold text-navy">{researcher.name}</h3>
              <p className="text-accent font-semibold text-sm mb-2">{researcher.role}</p>
              <p className="text-textMuted text-sm">{researcher.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// MessageIcon component (custom since it wasn't imported)
const MessageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" fill="none"/>
  </svg>
);

// Main Team Page Component
const TeamPage = () => {
  return (
    <div className="font-sans antialiased">
      <TeamHeader />
      <FoundersSection />
      <CSuiteSection />
      <BoardSection />
      <GovernancePolicies />
      <KPIDecisionRights />
      <HubGovernance />
      <ResearchTeam />
      
      <style>{`
        .bg-navy {
          background-color: ${colors.navy};
        }
        .bg-navyLight {
          background-color: ${colors.navyLight};
        }
        .text-accent {
          color: ${colors.accentGreen};
        }
        .bg-accent {
          background-color: ${colors.accentGreen};
        }
        .bg-softGreen {
          background-color: ${colors.softGreen};
        }
      `}</style>
    </div>
  );
};

export default TeamPage;