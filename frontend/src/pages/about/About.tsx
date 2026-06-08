import React from 'react';
import {
  Building2,
  Target,
  Eye,
  Heart,
  Globe,
  Users,
  Leaf,
  Recycle,
  Shield,
  TrendingUp,
  Sparkles,

  CheckCircle,
  Flag,

  History,
  
  Handshake,
  BadgeCheck,

  Scale,
  Lock,

  Fingerprint,
  FileCheck,
  UserCheck,

  UsersRound,

  Brain
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

// About Header Component
const AboutHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navyLight text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L1000,0 L1000,800 L0,800 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="750" cy="550" r="220" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <rect x="450" y="300" width="250" height="250" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Company Overview</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About
            <span className="text-accent"> WasteWiz</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            The South Asian Circular Engine — transforming waste into wealth through AI-driven manufacturing 
            and inclusive community growth.
          </p>
        </div>
      </div>
    </div>
  );
};

// Company Overview Component
const CompanyOverview = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-softGreen rounded-full px-4 py-2 mb-4">
              <Building2 className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-navy">Legal Entity</span>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Company Overview
            </h2>
            <div className="space-y-4 text-textMuted">
              <p>
                <span className="font-semibold text-navy">WasteWiz</span> (formerly RePlastIQ) is a circular economy 
                technology company headquartered in Bangladesh, with a strategic roadmap for regional expansion 
                across South Asia.
              </p>
              <p>
                We have evolved from a student-led community collection pilot into a diversified, financially 
                resilient circular manufacturing engine that processes high-value plastics, sequesters low-value 
                plastics into construction materials, and converts organic waste into certified bio-fertilizer.
              </p>
              <p>
                Our name "WasteWiz" embodies our mission: making waste management intelligent, efficient, and 
                value-generating — turning discarded materials into wealth for communities and the planet.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-softGreen rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-accent">2024</p>
                <p className="text-xs text-textMuted">Founded as RePlastIQ</p>
              </div>
              <div className="bg-softGreen rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-accent">Bangladesh</p>
                <p className="text-xs text-textMuted">Country of Operation</p>
              </div>
              <div className="bg-softGreen rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-accent">2030</p>
                <p className="text-xs text-textMuted">500 Hubs across South Asia</p>
              </div>
              <div className="bg-softGreen rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-accent">2035</p>
                <p className="text-xs text-textMuted">2,000+ Hubs Globally</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-navy to-navyLight rounded-2xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold">W</span>
              </div>
              <div>
                <p className="text-2xl font-bold">WasteWiz</p>
                <p className="text-xs text-gray-300">The South Asian Circular Engine</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-b border-white/20 pb-3">
                <p className="text-sm text-gray-300">Legal Name</p>
                <p className="font-semibold">WasteWiz Technologies Ltd.</p>
              </div>
              <div className="border-b border-white/20 pb-3">
                <p className="text-sm text-gray-300">Headquarters</p>
                <p className="font-semibold">Dhaka, Bangladesh</p>
              </div>
              <div className="border-b border-white/20 pb-3">
                <p className="text-sm text-gray-300">CEO & Co-founder</p>
                <p className="font-semibold">Md Emon Chowdhury</p>
              </div>
              <div>
                <p className="text-sm text-gray-300">Funding Stage</p>
                <p className="font-semibold text-accent">Series A | $2-5M Raise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mission & Vision Component
const MissionVision = () => {
  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
              <Flag className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
            <p className="text-textMuted leading-relaxed">
              To transform Bangladesh's plastic crisis into a resilient "waste-to-wealth" engine that converts 
              discarded materials into durable industrial infrastructure and sustainable agricultural inputs, 
              while creating dignified livelihoods for marginalized communities.
            </p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-accent">
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">15,000+ tons diverted annually by Year 3</span>
              </div>
            </div>
          </div>
          
          <div className="bg-navy rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-white">
            <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To establish the world's most comprehensive circular economy platform built upon a decentralized, 
              AI-enabled network that maximizes value extraction from every major component of municipal solid 
              waste while promoting the Quadruple Bottom Line of People, Planet, Prosperity, and Proof.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center gap-2 text-accent">
                <Globe className="w-4 h-4" />
                <span className="text-sm">2,000+ hubs globally by 2035</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Core Ideology Component
const CoreIdeology = () => {
  const ideologies = [
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "Integrated triple-loop system processing high-value plastics, sequestering low-value plastics into construction materials, and converting organic waste into certified bio-fertilizer.",
      color: "bg-green-50",
      iconColor: "text-accent"
    },
    {
      icon: Target,
      title: "3ZERO Focus",
      description: "Led by CEO Md Emon Chowdhury, a key figure in the 3ZERO Club targeting Zero Net Carbon Emissions, Zero Wealth Concentration, and Zero Unemployment through social business and innovation.",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Proof-Based Impact",
      description: "Proprietary 'Proof Layer' utilizing AI-driven quality control and Blockchain traceability for immutable audit trail of every ton of waste managed.",
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Core Ideology</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4 max-w-2xl mx-auto">
            The foundational principles that guide every decision at WasteWiz
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {ideologies.map((item, idx) => (
            <div key={idx} className={`${item.color} rounded-2xl p-6 hover:shadow-lg transition`}>
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                <item.icon className={`${item.iconColor} w-7 h-7`} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Evolution Timeline Component
const EvolutionTimeline = () => {
  const milestones = [
    {
      year: "2023",
      title: "Research Pilot",
      description: "Student-led community collection model under RePlastIQ began testing waste diversion strategies.",
      status: "completed"
    },
    {
      year: "2024",
      title: "MVP Development",
      description: "AI-enabled smart bins deployed with 50-user pilot achieving 95%+ sorting accuracy.",
      status: "completed"
    },
    {
      year: "2025",
      title: "WasteWiz Rebrand",
      description: "Transition from pilot to diversified circular manufacturing engine with triple-loop model.",
      status: "completed"
    },
    {
      year: "2026",
      title: "Series A Expansion",
      description: "Scaling to 10-20 urban hubs, seeking $2-5M for nationwide deployment.",
      status: "current"
    },
    {
      year: "2028",
      title: "Regional Leadership",
      description: "500 hubs across South Asia (India, Pakistan, Sri Lanka).",
      status: "upcoming"
    },
    {
      year: "2035",
      title: "Global Platform",
      description: "2,000+ hubs worldwide, establishing the largest circular economy network.",
      status: "upcoming"
    }
  ];

  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4">
            <History className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-navy">Our Journey</span>
          </div>
          <h2 className="text-3xl font-bold text-navy mb-3">Evolution & Milestones</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4 max-w-2xl mx-auto">
            From RePlastIQ research pilot to South Asia's leading circular engine
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 md:w-1/2"></div>
                
                <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-white border-4 border-accent flex items-center justify-center transform -translate-x-1/2 md:translate-x-0 md:-translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full ${milestone.status === 'completed' ? 'bg-accent' : milestone.status === 'current' ? 'bg-accent animate-pulse' : 'bg-gray-300'}`}></div>
                </div>
                
                <div className={`flex-1 md:w-1/2 pl-16 md:pl-8 ${idx % 2 === 0 ? 'md:pr-8 md:pl-0' : 'md:pl-8'}`}>
                  <div className={`bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition ${
                    milestone.status === 'current' ? 'border-l-4 border-accent' : ''
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-accent font-bold text-lg">{milestone.year}</span>
                      {milestone.status === 'completed' && <CheckCircle className="w-4 h-4 text-accent" />}
                      {milestone.status === 'current' && <Sparkles className="w-4 h-4 text-accent" />}
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

// Quadruple Bottom Line Component
const QuadrupleBottomLine = () => {
  const pillars = [
    {
      icon: Users,
      title: "People",
      description: "Social inclusion & institutionalized livelihoods for women entrepreneurs",
      metrics: ["500+ jobs created", "50%+ gender equity", "$200-500 monthly income"],
      color: "bg-pink-50",
      borderColor: "border-pink-200",
      iconColor: "text-pink-600"
    },
    {
      icon: Leaf,
      title: "Planet",
      description: "Waste diversion & ecological resilience through sequestration",
      metrics: ["15,000+ tons diverted", "75,000 tons CO₂e reduced", "2,000+ hectares preserved"],
      color: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Prosperity",
      description: "Commercial output & economic efficiency",
      metrics: ["5M bricks produced", "10,000 tons fertilizer", "$10M annual revenue"],
      color: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Fingerprint,
      title: "Proof",
      description: "Digital verification & audit readiness",
      metrics: ["Blockchain verified", "95%+ AI accuracy", "$1M+ credit revenue"],
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Quadruple Bottom Line</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-textMuted max-w-2xl mx-auto">
            Measured impact, not claims — every claim backed by empirical data and immutable digital records
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div key={idx} className={`${pillar.color} rounded-2xl p-6 border ${pillar.borderColor} hover:shadow-xl transition`}>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4">
                <pillar.icon className={`${pillar.iconColor} w-6 h-6`} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{pillar.title}</h3>
              <p className="text-textMuted text-xs mb-4">{pillar.description}</p>
              <div className="space-y-2">
                {pillar.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-accent" />
                    <span className="text-xs text-textMuted">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Governance Philosophy Component
const GovernancePhilosophy = () => {
  const principles = [
    {
      icon: Shield,
      title: "Worker Safety First",
      description: "Mandatory capital investment in fume extraction hoods and VOC detectors for all manufacturing hubs.",
      color: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Fingerprint,
      title: "Proof-Based Reporting",
      description: "Private blockchain 'Proof Layer' providing immutable verification of every ton of waste processed.",
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: UsersRound,
      title: "Community Dignity",
      description: "Cooperative Environmental Governance (CEG) transforming informal waste picking into institutionalized women-led manufacturing roles.",
      color: "bg-green-50",
      iconColor: "text-accent"
    },
    {
      icon: Scale,
      title: "ESG Integrity",
      description: "50%+ gender inclusion target across all roles, stable wages, and legal labor protections.",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <div className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Governance Philosophy</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Institutional-grade accountability anchored in worker safety, proof-based impact, and community dignity
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {principles.map((principle, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition">
              <div className={`w-12 h-12 ${principle.color} rounded-xl flex items-center justify-center mb-4`}>
                <principle.icon className={`${principle.iconColor} w-6 h-6`} />
              </div>
              <h3 className="font-bold text-lg mb-2">{principle.title}</h3>
              <p className="text-gray-300 text-sm">{principle.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white/10 rounded-2xl p-6 border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-5 h-5 text-accent" />
            <h3 className="font-bold">Data Governance & Audit Readiness</h3>
          </div>
          <p className="text-gray-300 text-sm mb-4">
            All material flow data is immutable on our private blockchain, providing audit readiness for plastic credit verification. 
            All executives and board members must sign Conflict of Interest disclosures annually.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 text-xs bg-white/10 rounded-full px-3 py-1.5">
              <FileCheck className="w-3 h-3 text-accent" />
              <span>Audit Trail</span>
            </div>
            <div className="flex items-center gap-2 text-xs bg-white/10 rounded-full px-3 py-1.5">
              <UserCheck className="w-3 h-3 text-accent" />
              <span>Conflict of Interest Policy</span>
            </div>
            <div className="flex items-center gap-2 text-xs bg-white/10 rounded-full px-3 py-1.5">
              <BadgeCheck className="w-3 h-3 text-accent" />
              <span>ESG Compliance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Values Component
const ValuesSection = () => {
  const values = [
    { icon: Heart, title: "Inclusive Growth", desc: "Empowering women and marginalized communities through dignified work" },
    { icon: Recycle, title: "Circular Thinking", desc: "No waste left behind — every component becomes value" },
    { icon: Brain, title: "Innovation First", desc: "AI, IoT, and blockchain driving measurable impact" },
    { icon: Handshake, title: "Stakeholder Partnership", desc: "Collaborating with government, corporates, and communities" },
    { icon: Eye, title: "Radical Transparency", desc: "Blockchain-verified data for complete accountability" },
    { icon: Shield, title: "Safety Non-Negotiable", desc: "Worker protection at the heart of operations" }
  ];

  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Our Core Values</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4">The principles that drive everything we do</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 flex gap-3 hover:shadow-md transition">
              <div className="w-10 h-10 bg-softGreen rounded-lg flex items-center justify-center flex-shrink-0">
                <value.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-navy">{value.title}</h3>
                <p className="text-textMuted text-sm">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main About Page Component
const About= () => {
  return (
    <div className="font-sans antialiased">
      <AboutHeader />
      <CompanyOverview />
      <MissionVision />
      <CoreIdeology />
      <EvolutionTimeline />
      <QuadrupleBottomLine />
      <GovernancePhilosophy />
      <ValuesSection />
      
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

export default About;