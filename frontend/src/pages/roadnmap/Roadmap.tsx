import React, { useState } from 'react';
import {
  Rocket,
  Target,
  CheckCircle,
  Circle,

  Sparkles,
  Award,
  TrendingUp,
  Users,
  Globe,
  Factory,
  
  Sprout,
  Leaf,
  Recycle,
  Building2,
  
  DollarSign,
 
  Cpu,
 
  MapPin,

  Milestone,
 
  ArrowRight,
 

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
  orange: '#F97316',
  cyan: '#06B6D4',
  pink: '#EC4899',
};

// Roadmap Header Component
const RoadmapHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navyLight text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L1000,0 L1000,800 L0,800 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="750" cy="550" r="180" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M200,350 L400,500 L600,400 L800,550" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5"/>
          </svg>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Milestone className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Strategic Journey</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Roadmap &
            <span className="text-accent"> Milestones</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            From community pilot to regional circular manufacturing engine — our strategic path to transforming 
            waste into wealth across South Asia and beyond.
          </p>
        </div>
      </div>
    </div>
  );
};

// Interactive Timeline Component
const InteractiveTimeline = () => {
  const [activePhase, setActivePhase] = useState(1);
  
  const phases = [
    {
      id: 1,
      period: "0-6 Months",
      title: "Prototype & MVP Stage",
      status: "completed",
      year: "2024-2025",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      details: {
        deployment: "Build MVP smart bin using low-cost hardware (Raspberry Pi/Arduino). Launch 50-user pilot program.",
        hiring: "Consolidate core leadership team: CEO, CTO, CFO. Onboard community participants and women-led NGO partners.",
        revenue: "Secure grants from UNIDO and DoE. Seek $500,000 seed investment.",
        impact: "Establish baseline of 100-200 tons of waste processed per year per hub."
      },
      milestones: [
        "AI smart bin prototype completed",
        "50-user pilot launched",
        "OpenCV/TensorFlow Lite integration",
        "Initial waste diversion metrics tracked",
        "Power BI dashboard established"
      ]
    },
    {
      id: 2,
      period: "6-18 Months",
      title: "Pilot Expansion & Commercialization",
      status: "current",
      year: "2025-2026",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      details: {
        deployment: "Deploy 10-20 hubs in Dhaka and Chittagong. Full Power BI dashboard integration. Launch mobile app.",
        hiring: "Institutionalize women-led groups as franchisees. Train cooperatives in P2B and OFC production.",
        revenue: "Secure $2-5M Series A (Gender Lens Investment). Begin B2G contracts and bio-fertilizer sales.",
        impact: "Create 50-100 institutionalized processing roles. Secure BARC fertilizer approval."
      },
      milestones: [
        "10-20 urban hubs operational",
        "Series A $2-5M raise",
        "Blockchain 'Proof Layer' deployed",
        "B2G contracts secured",
        "Women-led cooperatives formalized",
        "Safety infrastructure (fume hoods) installed"
      ]
    },
    {
      id: 3,
      period: "3-5 Years",
      title: "Regional Scaling & Leadership",
      status: "upcoming",
      year: "2026-2028",
      icon: Globe,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      details: {
        deployment: "100 hubs across Bangladesh by Year 3. 500 hubs across South Asia (India, Pakistan, Sri Lanka) by Year 5.",
        hiring: "500+ institutionalized jobs in Bangladesh. 5,000+ jobs across South Asia.",
        revenue: "$10M annual revenue by Year 3. $1M+ annual credit revenue. $5M+ by Year 5.",
        impact: "15,000+ tons waste diverted. 5M bricks produced. 10,000 tons fertilizer. 75,000 tons CO₂e reduced."
      },
      milestones: [
        "100 hubs across Bangladesh",
        "500 hubs across South Asia",
        "$10M annual revenue",
        "15,000+ tons waste diverted annually",
        "5 million climate-resilient bricks",
        "75,000 tons CO₂e reduction"
      ]
    },
    {
      id: 4,
      period: "5-10 Years",
      title: "Global Platform",
      status: "vision",
      year: "2028-2035",
      icon: Award,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      details: {
        deployment: "2,000+ hubs globally across Asia, Africa, and Latin America.",
        hiring: "50,000+ global jobs in circular economy.",
        revenue: "$50M+ annual revenue. Credit revenue exceeds $10M.",
        impact: "500,000+ tons waste diverted. 100M+ bricks produced. 500,000+ housing units."
      },
      milestones: [
        "2,000+ hubs globally",
        "International franchising program",
        "Global credit market leadership",
        "Partnership with UN agencies",
        "Circular economy standards setting"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'current': return <Sparkles className="w-5 h-5 text-accent animate-pulse" />;
      default: return <Circle className="w-5 h-5 text-gray-300" />;
    }
  };

  const activeData = phases.find(p => p.id === activePhase);

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Strategic Roadmap</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-textMuted max-w-2xl mx-auto">
            Our phased approach to scaling from pilot to global circular economy platform
          </p>
        </div>
        
        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activePhase === phase.id
                  ? `bg-gradient-to-r ${phase.color} text-white shadow-lg scale-105`
                  : 'bg-gray-100 text-navy hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <phase.icon className="w-4 h-4" />
                <span>{phase.period}</span>
              </div>
            </button>
          ))}
        </div>
        
        {/* Timeline Progress Bar */}
        <div className="relative mb-12">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(activePhase / phases.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-textMuted">
            <span>MVP</span>
            <span>Expansion</span>
            <span>Regional</span>
            <span>Global</span>
          </div>
        </div>
        
        {/* Active Phase Details */}
        {activeData && (
          <div className={`${activeData.bgColor} rounded-2xl p-8 border-2 ${activeData.borderColor} shadow-xl`}>
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${activeData.color} flex items-center justify-center`}>
                    <activeData.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-textMuted">{activeData.period}</p>
                    <h3 className="text-2xl font-bold text-navy">{activeData.title}</h3>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(activeData.status)}
                <span className={`text-sm font-semibold ${
                  activeData.status === 'completed' ? 'text-green-600' : 
                  activeData.status === 'current' ? 'text-accent' : 'text-gray-500'
                }`}>
                  {activeData.status === 'completed' ? 'Completed' : 
                   activeData.status === 'current' ? 'Current Focus' : 'Upcoming'}
                </span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/60 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Rocket className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-navy">Deployment</span>
                </div>
                <p className="text-sm text-textMuted">{activeData.details.deployment}</p>
              </div>
              <div className="bg-white/60 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-navy">Hiring</span>
                </div>
                <p className="text-sm text-textMuted">{activeData.details.hiring}</p>
              </div>
              <div className="bg-white/60 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-navy">Revenue</span>
                </div>
                <p className="text-sm text-textMuted">{activeData.details.revenue}</p>
              </div>
              <div className="bg-white/60 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-4 h-4 text-accent" />
                  <span className="text-xs font-semibold text-navy">Impact</span>
                </div>
                <p className="text-sm text-textMuted">{activeData.details.impact}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-navy mb-3 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-accent" />
                Key Milestones
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {activeData.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    </div>
                    <span className="text-sm text-textMuted">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Vertical Timeline Component
const VerticalTimeline = () => {
  const milestones = [
    {
      year: "2024",
      quarter: "Q3-Q4",
      title: "Research & Validation",
      description: "Initial research under RePlastIQ, community collection model testing, material strength validation (12.43 N/mm² bricks).",
      icon: Flask,
      color: "bg-blue-500",
      completed: true
    },
    {
      year: "2025",
      quarter: "Q1-Q2",
      title: "MVP Development",
      description: "AI-enabled smart bins deployed, 50-user pilot completed, 95%+ sorting accuracy achieved.",
      icon: Cpu,
      color: "bg-cyan-500",
      completed: true
    },
    {
      year: "2025",
      quarter: "Q3-Q4",
      title: "WasteWiz Launch",
      description: "Rebrand from RePlastIQ to WasteWiz, triple-loop model finalized, seed funding secured.",
      icon: Rocket,
      color: "bg-green-500",
      completed: true
    },
    {
      year: "2026",
      quarter: "Q1-Q2",
      title: "Series A Fundraising",
      description: "Target $2-5M Gender Lens Investment for safety infrastructure and hub deployment.",
      icon: DollarSign,
      color: "bg-accent",
      completed: false,
      current: true
    },
    {
      year: "2026",
      quarter: "Q3-Q4",
      title: "Urban Hub Rollout",
      description: "Deploy 10-20 hubs in Dhaka and Chittagong with full blockchain integration.",
      icon: Factory,
      color: "bg-orange-500",
      completed: false
    },
    {
      year: "2027",
      quarter: "Q1-Q4",
      title: "Nationwide Scaling",
      description: "Expand to 100 hubs across Bangladesh, secure B2G contracts, achieve $10M ARR.",
      icon: Globe,
      color: "bg-purple-500",
      completed: false
    },
    {
      year: "2028",
      quarter: "Q1-Q4",
      title: "South Asian Expansion",
      description: "Launch operations in India, Pakistan, and Sri Lanka with 500+ hubs regionally.",
      icon: MapPin,
      color: "bg-pink-500",
      completed: false
    },
    {
      year: "2029-2035",
      quarter: "",
      title: "Global Platform",
      description: "2,000+ hubs worldwide, circular economy standards leadership, IPO readiness.",
      icon: Infinity,
      color: "bg-gold",
      completed: false
    }
  ];

  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Detailed Milestone Timeline</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4">Key achievements and targets along our journey</p>
        </div>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 md:w-1/2"></div>
                
                <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-white border-4 border-accent flex items-center justify-center transform -translate-x-1/2 md:translate-x-0 md:-translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${milestone.completed ? 'bg-accent' : milestone.current ? 'bg-accent animate-pulse' : 'bg-gray-300'}`}></div>
                </div>
                
                <div className={`flex-1 md:w-1/2 pl-16 md:pl-8 ${idx % 2 === 0 ? 'md:pr-8 md:pl-0' : 'md:pl-8'}`}>
                  <div className={`bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition ${
                    milestone.current ? 'border-l-4 border-accent shadow-xl' : ''
                  }`}>
                    <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-accent font-bold">{milestone.year}</span>
                        {milestone.quarter && <span className="text-xs text-textMuted">{milestone.quarter}</span>}
                      </div>
                      {milestone.completed && <CheckCircle className="w-4 h-4 text-green-500" />}
                      {milestone.current && <Sparkles className="w-4 h-4 text-accent" />}
                    </div>
                    <h3 className="text-lg font-bold text-navy">{milestone.title}</h3>
                    <p className="text-textMuted text-sm mt-1">{milestone.description}</p>
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

// Impact Milestones Component
const ImpactMilestones = () => {
  const milestones = [
    { year: "Year 1", target: "100-200 tons processed", icon: Recycle, color: "bg-blue-100", textColor: "text-blue-600" },
    { year: "Year 2", target: "2,500+ tons diverted", icon: Leaf, color: "bg-green-100", textColor: "text-accent" },
    { year: "Year 3", target: "15,000+ tons diverted", icon: Target, color: "bg-purple-100", textColor: "text-purple-600" },
    { year: "Year 5", target: "100,000+ tons diverted", icon: Globe, color: "bg-orange-100", textColor: "text-orange-600" },
  ];

  const productionMilestones = [
    { metric: "Bricks Produced", year1: "50,000", year3: "5M", year5: "25M", icon: Building2 },
    { metric: "Bio-Fertilizer (tons)", year1: "500", year3: "10,000", year5: "50,000", icon: Sprout },
    { metric: "CO₂e Reduced (tons)", year1: "2,500", year3: "75,000", year5: "250,000", icon: Leaf },
    { metric: "Jobs Created", year1: "50", year3: "500", year5: "5,000", icon: Users },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Impact Growth Trajectory</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4">Scaling impact alongside operational growth</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {milestones.map((item, idx) => (
            <div key={idx} className={`${item.color} rounded-2xl p-6 text-center`}>
              <item.icon className={`${item.textColor} w-10 h-10 mx-auto mb-3`} />
              <p className="text-2xl font-bold text-navy">{item.year}</p>
              <p className="text-sm font-semibold text-navy">{item.target}</p>
            </div>
          ))}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-softGreen rounded-2xl overflow-hidden">
            <thead className="bg-navy">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Metric</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">Year 1</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">Year 3</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">Year 5</th>
               </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {productionMilestones.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/50 transition">
                  <td className="px-6 py-4 font-semibold text-navy flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-accent" />
                    {item.metric}
                  </td>
                  <td className="px-6 py-4 text-center text-textMuted">{item.year1}</td>
                  <td className="px-6 py-4 text-center font-bold text-accent">{item.year3}</td>
                  <td className="px-6 py-4 text-center text-textMuted">{item.year5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Financial Milestones Component
const FinancialMilestones = () => {
  const financials = [
    { stage: "Pre-Seed", target: "$500K", unlocks: "MVP, 50-user pilot, initial metrics", year: "2024-2025" },
    { stage: "Seed", target: "$1-2M", unlocks: "10-20 hubs, blockchain integration, initial B2G", year: "2025-2026" },
    { stage: "Series A", target: "$2-5M", unlocks: "100 hubs, safety infrastructure, $10M ARR", year: "2026", current: true },
    { stage: "Series B", target: "$15-25M", unlocks: "South Asian expansion, 500 hubs", year: "2027-2028" },
    { stage: "Series C", target: "$50M+", unlocks: "Global scaling, 2,000+ hubs", year: "2030+" },
  ];

  const revenueProjection = [
    { year: "Year 1", revenue: "$0.5M", margin: "15%" },
    { year: "Year 2", revenue: "$3M", margin: "30%" },
    { year: "Year 3", revenue: "$10M", margin: "45%" },
    { year: "Year 5", revenue: "$25M", margin: "55%" },
  ];

  return (
    <div className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Capital Strategy & Financial Roadmap</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Phased fundraising aligned with technical and operational milestones
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <DollarSign className="text-accent" /> Funding Stages
            </h3>
            <div className="space-y-3">
              {financials.map((item, idx) => (
                <div key={idx} className={`bg-white/10 rounded-xl p-4 ${item.current ? 'border-l-4 border-accent' : ''}`}>
                  <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                    <span className="font-bold text-accent">{item.stage}</span>
                    <span className="text-sm text-gray-300">{item.year}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold">{item.target}</span>
                    {item.current && <span className="text-xs bg-accent/20 px-2 py-1 rounded-full">Current Raise</span>}
                  </div>
                  <p className="text-sm text-gray-300">{item.unlocks}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="text-accent" /> Revenue Projections
            </h3>
            <div className="bg-white/10 rounded-xl p-6">
              {revenueProjection.map((item, idx) => (
                <div key={idx} className="mb-4 last:mb-0">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.year}</span>
                    <span className="font-semibold">{item.revenue}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all"
                      style={{ width: `${parseInt(item.revenue) / 50}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Target Margin: {item.margin}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 bg-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Award className="text-accent w-5 h-5" />
                <span className="font-semibold">Strategic Optimization Targets</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Runway & Resilience: Regenerative Loop (OFC) as stable revenue base</li>
                <li>• Deployments: 100 hubs (2026) → 500 hubs (2028) → 2,000+ hubs (2035)</li>
                <li>• Certifications: BARC (fertilizer) + BUET (construction materials)</li>
                <li>• Revenue Capture: AI + Blockchain for premium credit pricing ($140-670/ton)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Call to Action Component
const RoadmapCTA = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-softGreen to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Rocket className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-3xl font-bold text-navy mb-3">Join Our Journey</h2>
          <p className="text-textMuted mb-6">
            We're seeking strategic partners, investors, and franchisees to help scale the circular economy across South Asia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary flex items-center gap-2">
              Invest in WasteWiz <ArrowRight size={18} />
            </button>
            <button className="px-6 py-3 border-2 border-navy text-navy rounded-full font-semibold hover:bg-navy hover:text-white transition">
              Become a Franchise Partner
            </button>
          </div>
          <p className="text-xs text-textMuted mt-6">
            Series A: $2-5M | Gender Lens Investment | Safety Infrastructure | Nationwide Scaling
          </p>
        </div>
      </div>
    </div>
  );
};

// Flask icon component (for research milestone)
const Flask = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 3L15 3M12 3V8M10.5 10.5L19 19M5 21H19M6 15L10 11M6 19L16 9" stroke="currentColor" strokeLinecap="round"/>
    <path d="M8 21L16 13" stroke="currentColor" strokeLinecap="round"/>
  </svg>
);

// Main Roadmap Page Component
const Roadmap = () => {
  return (
    <div className="font-sans antialiased">
      <RoadmapHeader />
      <InteractiveTimeline />
      <VerticalTimeline />
      <ImpactMilestones />
      <FinancialMilestones />
      <RoadmapCTA />
      
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
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default Roadmap;