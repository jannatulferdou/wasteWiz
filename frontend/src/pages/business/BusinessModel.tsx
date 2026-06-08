import React from 'react';
import {
  Building2,
  Leaf,
  Recycle,
  Coins,
  Briefcase,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
  Layers,

  Target,
  Lock,
  Database,
  Cloud,
  ChevronRight,
  Store,
  Landmark,
  Building,
  PiggyBank
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
};

// Business Model Header Component
const BusinessModelHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navyLight text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Layers className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Stacked Revenue Architecture</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Resilient, Multi-Stream
            <span className="text-accent"> Business Model</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Decoupling financial performance from plastic commodity volatility through five interlocking revenue streams across construction, agriculture, and digital asset markets.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm">Recession-Resistant</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm">60%+ Margins</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-sm">$10M ARR Target by Year 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Revenue Streams Overview Component
const RevenueStreamsOverview = () => {
  const streams = [
    {
      id: 1,
      icon: Building2,
      title: "Infrastructure Loop",
      subtitle: "Plastic-to-Bricks (P2B/R)",
      description: "Climate-resilient bricks and pavers for government housing and road projects",
      price: "$0.15 – $0.25",
      unit: "per unit",
      margin: "40%",
      target: "$3.5M",
      color: "bg-orange-50",
      iconColor: "text-orange-600",
      features: ["7x stronger than clay", "Flood resistant", "B2G volume contracts via SPP Policy 2023"]
    },
    {
      id: 2,
      icon: Leaf,
      title: "Regenerative Loop",
      subtitle: "Organic Fertilizer (OFC)",
      description: "Certified bio-fertilizer from organic waste using Modified Indonesian Windrow Technique",
      price: "$150 – $250",
      unit: "per ton",
      margin: "60%",
      target: "$2.5M",
      color: "bg-green-50",
      iconColor: "text-accent",
      features: ["15% crop yield increase", "Reduces chemical fertilizer use", "Non-volatile domestic demand"]
    },
    {
      id: 3,
      icon: Recycle,
      title: "High-Value Materials",
      subtitle: "Recycled Polymers",
      description: "AI-sorted PET, PP, HDPE granules sold to SME recycling partners",
      price: "$500 – $800",
      unit: "per ton",
      margin: "25%",
      target: "$1.5M",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      features: ["95%+ purity", "Steady local demand", "Existing recycling infrastructure"]
    },
    {
      id: 4,
      icon: Coins,
      title: "Digital Impact Assets",
      subtitle: "Plastic + Carbon Credits",
      description: "Monetized bundled credits verified via private blockchain",
      price: "$140 – $670",
      unit: "per ton",
      margin: "High (85%+)",
      target: "$2.0M",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      features: ["Global market access", "Blockchain-verified", "Premium pricing vs competitors"]
    },
    {
      id: 5,
      icon: Briefcase,
      title: "Franchise & Licensing",
      subtitle: "WasteWiz Kit Model",
      description: "Standardized hub kits with ongoing royalties and platform fees",
      price: "$5,000 – $15,000",
      unit: "per kit",
      margin: "10% Royalty",
      target: "$0.5M",
      color: "bg-indigo-50",
      iconColor: "text-indigo-600",
      features: ["Rapid scaling", "Local entrepreneurship", "Centralized QC & AI updates"]
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-navy mb-3">Five Interlocking Revenue Streams</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-textMuted max-w-2xl mx-auto">
            Each stream hedges against the volatility of others, creating a resilient, recession-proof financial engine
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {streams.map((stream) => (
            <div key={stream.id} className="group bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className={`${stream.color} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm`}>
                    <stream.icon className={`${stream.iconColor} w-7 h-7`} />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-navy">{stream.price}</p>
                    <p className="text-xs text-textMuted">{stream.unit}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy">{stream.title}</h3>
                <p className="text-sm text-accent font-semibold mb-2">{stream.subtitle}</p>
                <p className="text-textMuted text-sm">{stream.description}</p>
              </div>
              
              <div className="p-6 bg-white">
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                  <div>
                    <p className="text-xs text-textMuted uppercase tracking-wide">Target Margin</p>
                    <p className="text-2xl font-bold text-accent">{stream.margin}</p>
                  </div>
                  <div>
                    <p className="text-xs text-textMuted uppercase tracking-wide">Year 3 Revenue</p>
                    <p className="text-2xl font-bold text-navy">{stream.target}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {stream.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span className="text-xs text-textMuted">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Unit Economics Table Component
const UnitEconomicsTable = () => {
  const products = [
    { product: "Plastic Bricks", price: "$0.15 – $0.25/unit", margin: "40%", driver: "B2G volume contracts via SPP", volume: "5M units/year" },
    { product: "Organic Fertilizer", price: "$150 – $250/ton", margin: "60%", driver: "Non-volatile domestic demand", volume: "10,000 tons/year" },
    { product: "Plastic Credits", price: "$140 – $670/ton", margin: "High (85%+)", driver: "Verifiable 'Proof' for FMCGs", volume: "5,000 tons/year" },
    { product: "Carbon Credits", price: "$15 – $45/ton CO2e", margin: "High", driver: "IoT-optimized logistics", volume: "75,000 tons CO2e/year" },
    { product: "Franchise Hub", price: "$5k – $15k/kit", margin: "10% Royalties", driver: "Standardized, low-cost scaling", volume: "500+ hubs by 2028" },
  ];

  return (
    <div className="py-16 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Unit Economics at Scale</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4">Verified metrics driving institutional-grade profitability</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-navy">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Product/Service</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Estimated Pricing</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Target Margin</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Key Driver</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Scale Target</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((item, idx) => (
                <tr key={idx} className="hover:bg-softGreen/30 transition">
                  <td className="px-6 py-4 font-semibold text-navy">{item.product}</td>
                  <td className="px-6 py-4 text-accent font-medium">{item.price}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                      item.margin.includes('60') ? 'bg-green-100 text-green-700' :
                      item.margin.includes('40') ? 'bg-orange-100 text-orange-700' :
                      'bg-purple-100 text-purple-700'
                    }`}>
                      {item.margin}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-textMuted text-sm">{item.driver}</td>
                  <td className="px-6 py-4 text-textMuted text-sm font-medium">{item.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Market Segments Component
const MarketSegments = () => {
  const segments = [
    {
      title: "Business-to-Government (B2G)",
      icon: Landmark,
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      description: "Capitalizing on Sustainable Public Procurement Policy (2023) for guaranteed off-take contracts",
      opportunities: [
        "Ashrayan housing project bricks",
        "RHD road construction aggregates",
        "Municipal waste management partnerships"
      ],
      size: "$34.4B by 2025",
      policy: "SPP Policy Mandate"
    },
    {
      title: "Business-to-Business (B2B)",
      icon: Building,
      color: "bg-emerald-50",
      iconColor: "text-emerald-600",
      description: "EPR partnerships with FMCG giants for auditable plastic neutrality data",
      opportunities: [
        "Unilever plastic neutrality",
        "P&G packaging compliance",
        "Nestlé supply chain reporting"
      ],
      size: "$3B+ plastic industry",
      policy: "Extended Producer Responsibility"
    },
    {
      title: "Impact Credit Markets",
      icon: Globe,
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      description: "Premium pricing through bundled plastic + carbon credits via blockchain verification",
      opportunities: [
        "Verra-registered credits",
        "Corporate ESG buyers",
        "Carbon offset portfolios"
      ],
      size: "$462M global market",
      policy: "Blockchain-verified Proof Layer"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-navy mb-3">Target Market Segments</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4 max-w-2xl mx-auto">
            Strategic alignment with Bangladesh's regulatory landscape and global market opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((segment, idx) => (
            <div key={idx} className={`${segment.color} rounded-2xl p-6 hover:shadow-xl transition-all`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-3 rounded-xl">
                  <segment.icon className={`${segment.iconColor} w-6 h-6`} />
                </div>
                <h3 className="text-xl font-bold text-navy">{segment.title}</h3>
              </div>
              <p className="text-textMuted text-sm mb-4">{segment.description}</p>
              <div className="space-y-2 mb-4">
                {segment.opportunities.map((opp, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <ChevronRight className="w-3 h-3 text-accent" />
                    <span className="text-xs text-textMuted">{opp}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 mt-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-textMuted">Market Size</span>
                  <span className="text-sm font-bold text-accent">{segment.size}</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-textMuted">Policy Driver</span>
                  <span className="text-xs font-medium text-navy">{segment.policy}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Franchise Model Component
const FranchiseModel = () => {
  return (
    <div className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Store className="w-4 h-4 text-accent" />
              <span className="text-sm">Franchise Model</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Future-Proofing for
              <span className="text-accent"> Exponential Scale</span>
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The WasteWiz franchise model enables rapid South Asian expansion while maintaining rigorous quality control through centralized AI and blockchain oversight.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Decentralized Production</h4>
                  <p className="text-gray-400 text-sm">Women-led cooperatives manage local hubs with standardized, low-cost equipment (DIY Brick Press &lt;$1,500)</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cloud className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Centralized High-Value Functions</h4>
                  <p className="text-gray-400 text-sm">HQ retains control over AI stack, QC protocols, credit sales, and B2G contracts</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Operational Security</h4>
                  <p className="text-gray-400 text-sm">Regenerative Loop (OFC) provides stable revenue base — organic waste is 80% of volume, non-volatile</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Digital Monitoring</h4>
                  <p className="text-gray-400 text-sm">Blockchain platform automates performance tracking and standardized payments across network</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-accent mb-2">500+</div>
              <p className="text-gray-300">Hubs Across South Asia by 2028</p>
              <div className="w-full bg-navy h-2 rounded-full mt-4 overflow-hidden">
                <div className="bg-accent h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
              <p className="text-xs text-gray-400 mt-2">Current: 10-20 hubs target | Goal: 2,000+ globally by 2035</p>
            </div>
            
            <div className="border-t border-white/20 pt-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-300">Franchise Kit Cost</span>
                <span className="text-white font-bold">$5,000 – $15,000</span>
              </div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-gray-300">Ongoing Royalty</span>
                <span className="text-white font-bold">10% of revenue</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Hub Operator Income</span>
                <span className="text-white font-bold">$200 – $500/month</span>
              </div>
            </div>
            
            <button className="w-full mt-6 bg-accent text-white py-3 rounded-xl font-semibold hover:bg-accent/80 transition flex items-center justify-center gap-2">
              Become a Franchise Partner <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Competitive Advantages Component
const CompetitiveAdvantages = () => {
  const advantages = [
    { icon: Shield, title: "Risk Hedging", desc: "Multi-stream revenue protects against plastic commodity volatility", color: "bg-blue-50" },
    { icon: TrendingUp, title: "Superior Margins", desc: "60% on fertilizer, 40% on bricks, 85%+ on credits", color: "bg-green-50" },
    { icon: Zap, title: "Scalability", desc: "Franchise model + IoT logistics (14% reduced distance)", color: "bg-orange-50" },
    { icon: Lock, title: "Proof Layer", desc: "Blockchain-verified impact for premium credit pricing", color: "bg-purple-50" },
  ];

  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Why Integration Matters</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4">The competitive edge of a truly circular engine</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className={`${adv.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <adv.icon className="text-accent w-8 h-8" />
              </div>
              <h3 className="font-bold text-navy mb-2">{adv.title}</h3>
              <p className="text-textMuted text-sm">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Financial Projections Component
const FinancialProjections = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Financial Trajectory</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4">Clear path to profitability and scale</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-softGreen rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">$500K</div>
            <p className="font-semibold text-navy mb-1">Seed Stage</p>
            <p className="text-xs text-textMuted">MVP & Pilot Validation</p>
          </div>
          <div className="bg-navy rounded-2xl p-6 text-center text-white shadow-xl transform scale-105 border-2 border-accent">
            <div className="text-4xl font-bold text-accent mb-2">$2-5M</div>
            <p className="font-semibold mb-1">Series A</p>
            <p className="text-xs text-gray-300">Nationwide Scaling & Safety Infrastructure</p>
            <div className="mt-3 inline-block bg-accent/20 px-3 py-1 rounded-full text-xs">Current Raise</div>
          </div>
          <div className="bg-softGreen rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">$10M</div>
            <p className="font-semibold text-navy mb-1">Year 3 ARR</p>
            <p className="text-xs text-textMuted">100 hubs, 15k+ tons diverted</p>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-navy to-navyLight rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <PiggyBank className="text-accent" /> Use of Series A Funds
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between"><span>Safety Infrastructure (Fume Hoods, VOC Detectors)</span><span className="font-bold text-accent">35%</span></li>
                <li className="flex justify-between"><span>Hub Deployments (10-20 urban hubs)</span><span className="font-bold text-accent">40%</span></li>
                <li className="flex justify-between"><span>R&D & Blockchain Integration</span><span className="font-bold text-accent">15%</span></li>
                <li className="flex justify-between"><span>Operations & Team Expansion</span><span className="font-bold text-accent">10%</span></li>
              </ul>
            </div>
            <div className="border-l border-white/20 pl-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Target className="text-accent" /> Strategic Unlocks
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> 100 hubs nationwide by Year 3</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> B2G contracts secured</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> 500+ institutionalized women-led jobs</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-accent" /> Blockchain credit monetization live</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Business Model Page Component
const BusinessModel = () => {
  return (
    <div className="font-sans antialiased">
      <BusinessModelHeader />
      <RevenueStreamsOverview />
      <UnitEconomicsTable />
      <MarketSegments />
      <FranchiseModel />
      <CompetitiveAdvantages />
      <FinancialProjections />
      
      <style>{`
        .btn-primary {
          background-color: ${colors.accentGreen};
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .btn-primary:hover {
          background-color: #1B5E20;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(46, 125, 50, 0.3);
        }
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

export default BusinessModel;