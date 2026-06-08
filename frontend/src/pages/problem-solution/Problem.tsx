import React from 'react';
import {
  AlertTriangle,

  Factory,
  Fish,
  Trash2,
  XCircle,
  TrendingDown,
 
  Building2,
  Recycle,
  Leaf,
  Cpu,
 
  Zap,
  Shield,
  Globe,
  Home,

  Package,
  Award,
  Heart,

  Lightbulb,
  Target,

  Flame,
  Waves,

} from 'lucide-react';

const colors = {
  white: '#FFFFFF',
  softGreen: '#E8F3EB',
  navy: '#0A2540',
  accentGreen: '#2E7D32',
  navyLight: '#1A3A5C',
  textDark: '#1A2C2C',
  textMuted: '#5A6E6E',
  red: '#DC2626',
  orange: '#EA580C',
  amber: '#D97706',
};

// Header Component
const ProblemSolutionHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navyLight text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="w-4 h-4 text-red" />
              <span className="text-sm font-medium">The Crisis</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              From Crisis to
              <span className="text-accent"> Circular Solution</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Bangladesh faces a severe environmental crisis with 800,000+ tons of plastic waste annually, 
              while traditional recycling fails to manage low-value plastics and organic waste.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-red mb-1">800K+</div>
                <div className="text-xs text-gray-300">Tons Plastic/Year</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber mb-1">80%</div>
                <div className="text-xs text-gray-300">Organic Waste in Dhaka</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange mb-1">$34.4B</div>
                <div className="text-xs text-gray-300">Construction Market by 2025</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-1">$140-670</div>
                <div className="text-xs text-gray-300">Per Ton Credit Value</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Problem Deep Dive Component
const ProblemDeepDive = () => {
  const problems = [
    {
      icon: Trash2,
      title: "Dual Stream Failure",
      description: "Traditional recycling only targets high-value plastics, completely neglecting low-value plastics (sachets, films) and organic waste.",
      stat: "80% of municipal waste is organic",
      color: "bg-red-50",
      iconColor: "text-red"
    },
    {
      icon: XCircle,
      title: "No Incentive Models",
      description: "No scalable, incentivized systems exist to encourage households to consistently perform source-segregation.",
      stat: "20-30% diversion possible with incentives",
      color: "bg-orange-50",
      iconColor: "text-orange"
    },
    {
      icon: TrendingDown,
      title: "Commodity Volatility",
      description: "Traditional models rely on fluctuating plastic prices, destabilizing informal worker wages and operations.",
      stat: "WasteWiz diversifies into stable markets",
      color: "bg-amber-50",
      iconColor: "text-amber"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            The Systemic Crisis
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-textMuted max-w-2xl mx-auto">
            Bangladesh's waste management system is overwhelmed by two unmanaged streams that traditional recycling cannot address
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, idx) => (
            <div key={idx} className={`${problem.color} rounded-2xl p-6 hover:shadow-xl transition-all`}>
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                <problem.icon className={`${problem.iconColor} w-7 h-7`} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{problem.title}</h3>
              <p className="text-textMuted text-sm mb-4">{problem.description}</p>
              <div className="bg-white/80 rounded-lg p-3">
                <p className="text-xs text-navy font-semibold">{problem.stat}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Impact Stats */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <Waves className="w-8 h-8 text-red mx-auto mb-2" />
              <p className="text-2xl font-bold text-navy">4,000+</p>
              <p className="text-xs text-textMuted">Rivers polluted annually</p>
            </div>
            <div className="text-center">
              <Fish className="w-8 h-8 text-orange mx-auto mb-2" />
              <p className="text-2xl font-bold text-navy">1.5M+</p>
              <p className="text-xs text-textMuted">Marine species affected</p>
            </div>
            <div className="text-center">
              <Trash2 className="w-8 h-8 text-amber mx-auto mb-2" />
              <p className="text-2xl font-bold text-navy">60%+</p>
              <p className="text-xs text-textMuted">Landfill overflow by 2030</p>
            </div>
            <div className="text-center">
              <Flame className="w-8 h-8 text-red mx-auto mb-2" />
              <p className="text-2xl font-bold text-navy">15%</p>
              <p className="text-xs text-textMuted">Methane from organic waste</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Market Failure Visualization
const MarketFailure = () => {
  return (
    <div className="py-16 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-navy mb-2">Why Existing Systems Fail</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red/10 rounded-lg flex items-center justify-center">
                <span className="text-red font-bold">1</span>
              </div>
              <h3 className="font-bold text-navy">Selective Valorization</h3>
            </div>
            <p className="text-textMuted text-sm">
              Current infrastructure focuses almost exclusively on high-value plastics, completely neglecting 
              low-value plastics (multilayer sachets, films) and the massive organic stream.
            </p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex justify-between text-xs">
                <span className="text-textMuted">Neglected Stream:</span>
                <span className="font-semibold text-red">80% of total waste</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center">
                <span className="text-orange font-bold">2</span>
              </div>
              <h3 className="font-bold text-navy">Lack of Incentives</h3>
            </div>
            <p className="text-textMuted text-sm">
              While community awareness exists, there is a total absence of scalable, incentivized models 
              that encourage households to consistently perform source-segregation.
            </p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex justify-between text-xs">
                <span className="text-textMuted">Participation Gap:</span>
                <span className="font-semibold text-orange">0 incentive structures</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center">
                <span className="text-amber font-bold">3</span>
              </div>
              <h3 className="font-bold text-navy">Commodity Volatility</h3>
            </div>
            <p className="text-textMuted text-sm">
              Traditional models rely on fluctuating plastic commodity prices, making wages and operational 
              stability of informal waste workers highly volatile.
            </p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex justify-between text-xs">
                <span className="text-textMuted">WasteWiz Hedge:</span>
                <span className="font-semibold text-amber">Diversified stable markets</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Solution Overview Component
const SolutionOverview = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-softGreen rounded-full px-4 py-2 mb-4">
            <Lightbulb className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-navy">The Solution</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            The South Asian Circular Engine
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-textMuted max-w-2xl mx-auto">
            Under the leadership of CEO Md Emon Chowdhury, WasteWiz has developed an integrated circular manufacturing 
            engine designed to maximize value from every waste component.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">AI-Powered Smart Bins</h3>
                  <p className="text-textMuted text-sm">
                    Solar-powered bins using OpenCV and TensorFlow Lite perform 95%+ accurate source-segregation 
                    at the community level with digital incentives for consistent participation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Factory className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">Decentralized Micro-Factories</h3>
                  <p className="text-textMuted text-sm">
                    Clean feedstock funneled into co-located community micro-factories, minimizing logistics costs 
                    and associated carbon emissions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">Blockchain Proof Layer</h3>
                  <p className="text-textMuted text-sm">
                    IoT sensor network + private blockchain creates immutable audit trail — from initial deposit 
                    to final industrial sale, enabling premium credit monetization.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-navy to-navyLight rounded-2xl p-6 text-white">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-accent" />
              <h3 className="font-bold">3ZERO Alignment</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs">1</span>
                </div>
                <div>
                  <p className="font-semibold">Zero Net Carbon Emissions</p>
                  <p className="text-xs text-gray-300">75,000 tons CO₂e reduced annually</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs">2</span>
                </div>
                <div>
                  <p className="font-semibold">Zero Wealth Concentration</p>
                  <p className="text-xs text-gray-300">500+ institutionalized women-led jobs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-xs">3</span>
                </div>
                <div>
                  <p className="font-semibold">Zero Unemployment</p>
                  <p className="text-xs text-gray-300">Social business & innovation workforce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Triple Loop Model Component
const TripleLoop = () => {
  const loops = [
    {
      icon: Recycle,
      title: "High-Value Loop",
      subtitle: "Recycling",
      description: "AI-sorted polymers like PET, PP, and HDPE are funneled to existing SME recycling partners for conversion into plastic granules.",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
      impact: "80%+ recovery rate"
    },
    {
      icon: Building2,
      title: "Infrastructure Loop",
      subtitle: "Plastic-to-Bricks (P2B/R)",
      description: "Low-value, difficult-to-recycle plastics (sachets and films) sequestered into climate-resilient bricks — 7x stronger than clay, flood-resistant.",
      color: "bg-orange-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600",
      impact: "7x stronger than clay"
    },
    {
      icon: Leaf,
      title: "Regenerative Loop",
      subtitle: "Organic Fertilizer (OFC)",
      description: "80% of municipal waste converted into certified bio-fertilizer using Modified Indonesian Windrow Technique — supporting national food security.",
      color: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-accent",
      impact: "15% yield increase"
    }
  ];

  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">The Triple-Loop Model</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-textMuted max-w-2xl mx-auto">
            No waste left behind — three simultaneous value chains ensuring every component is transformed into value
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting lines - decorative */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-orange-200 to-green-200 -translate-y-1/2"></div>
          
          <div className="relative grid lg:grid-cols-3 gap-6 z-10">
            {loops.map((loop, idx) => (
              <div key={idx} className={`${loop.color} rounded-2xl p-6 border-2 ${loop.borderColor} hover:shadow-xl transition-all group`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <loop.icon className={`${loop.iconColor} w-6 h-6`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy">{loop.title}</h3>
                    <p className="text-xs text-accent font-semibold">{loop.subtitle}</p>
                  </div>
                </div>
                <p className="text-textMuted text-sm mb-4">{loop.description}</p>
                <div className="bg-white/80 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-textMuted">Key Impact</span>
                    <span className="text-xs font-bold text-navy">{loop.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Policy Alignment Component
const PolicyAlignment = () => {
  const policies = [
    {
      title: "Sustainable Public Procurement (SPP) Policy 2023",
      description: "Mandates sustainable materials in public infrastructure — guaranteed B2G market for our bricks",
      icon: Building2,
      status: "Active",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      title: "Extended Producer Responsibility (EPR)",
      description: "Forthcoming guidelines mandating FMCGs provide auditable proof of plastic collection",
      icon: Package,
      status: "Forthcoming",
      statusColor: "bg-amber-100 text-amber-700"
    },
    {
      title: "World Bank $900M Environmental Program",
      description: "Direct alignment with major climate finance funding pools for infrastructure",
      icon: Globe,
      status: "Aligned",
      statusColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "ADB $400M Climate-Resilient Fund",
      description: "Pay-for-Success impact bond opportunities for verified pollution reduction",
      icon: Shield,
      status: "Targeting",
      statusColor: "bg-purple-100 text-purple-700"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Strategic Policy Alignment</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-textMuted max-w-2xl mx-auto">
            WasteWiz is engineered to capitalize on a rapidly maturing regulatory landscape in Bangladesh and globally
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {policies.map((policy, idx) => (
            <div key={idx} className="bg-softGreen rounded-xl p-5 flex gap-4 hover:shadow-md transition">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
                <policy.icon className="text-accent w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-bold text-navy">{policy.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${policy.statusColor}`}>
                    {policy.status}
                  </span>
                </div>
                <p className="text-textMuted text-sm">{policy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Why Now Component
const WhyNow = () => {
  const drivers = [
    {
      icon: TrendingDown,
      title: "Matured Credit Markets",
      desc: "Global plastic credits market valued at $462M in 2024",
      value: "$140-670/ton"
    },
    {
      icon: Target,
      title: "EPR Mandates Coming",
      desc: "FMCGs need auditable proof of plastic collection",
      value: "2026-2027"
    },
    {
      icon: Home,
      title: "SPP Policy Active",
      desc: "Guaranteed government off-take for sustainable materials",
      value: "Effective 2023"
    },
    {
      icon: Award,
      title: "Climate Finance Ready",
      desc: "WB + ADB multi-billion dollar programs",
      value: "$1.3B+ available"
    }
  ];

  return (
    <div className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Why Now?</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A convergence of policy, market, and climate finance drivers makes this the optimal moment for WasteWiz
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {drivers.map((driver, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/15 transition">
              <driver.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-1">{driver.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{driver.desc}</p>
              <div className="text-accent font-bold text-lg">{driver.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Solution Benefits Component
const SolutionBenefits = () => {
  const benefits = [
    { icon: Shield, title: "Risk Hedging", desc: "Diversified revenue protects against plastic commodity volatility" },
    { icon: TrendingDown, title: "Superior Margins", desc: "60% on fertilizer, 40% on bricks, 85%+ on credits" },
    { icon: Zap, title: "Scalability", desc: "Franchise model + IoT logistics for rapid expansion" },
    { icon: Heart, title: "Social Inclusion", desc: "500+ institutionalized women-led manufacturing jobs" },
  ];

  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Why Integration Matters</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition">
              <div className="w-14 h-14 bg-softGreen rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-navy mb-2">{benefit.title}</h3>
              <p className="text-textMuted text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Problem + Solution Page Component
const Problem = () => {
  return (
    <div className="font-sans antialiased">
      <ProblemSolutionHeader />
      <ProblemDeepDive />
      <MarketFailure />
      <SolutionOverview />
      <TripleLoop />
      <PolicyAlignment />
      <WhyNow />
      <SolutionBenefits />
      
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
        .text-red {
          color: ${colors.red};
        }
        .bg-red {
          background-color: ${colors.red};
        }
        .text-orange {
          color: ${colors.orange};
        }
        .text-amber {
          color: ${colors.amber};
        }
      `}</style>
    </div>
  );
};

export default Problem;