import React from 'react';
import {
  Users,
  Leaf,
  TrendingUp,
  Fingerprint,
  Heart,
  Globe,
  Factory,
  Home,
  Sprout,
  Droplets,
  TreePine,
  Fish,
  Wind,
  Battery,
  Recycle,
  Building2,
  Award,
  CheckCircle,
  Target,
  Activity,
  Shield,
  Lock,
  FileCheck,
 
  Truck,
  Trash2,
 
  UsersRound,

  Wallet,
  DollarSign,
  PiggyBank,

 
  Sparkles,

} from 'lucide-react';

const colors = {
  white: '#FFFFFF',
  softGreen: '#E8F3EB',
  navy: '#0A2540',
  accentGreen: '#2E7D32',
  navyLight: '#1A3A5C',
  textDark: '#1A2C2C',
  textMuted: '#5A6E6E',
  pink: '#EC4899',
  blue: '#3B82F6',
  purple: '#8B5CF6',
  orange: '#F97316',
  teal: '#14B8A6',
};

// Impact Header Component
const ImpactHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navyLight text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L1000,0 L1000,800 L0,800 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="300" cy="250" r="200" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="700" cy="500" r="180" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <rect x="400" y="350" width="180" height="180" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Quadruple Bottom Line</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Measured Impact,
            <span className="text-accent"> Not Claims</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Every environmental and social claim backed by empirical data and immutable digital records — 
            meeting the rigorous due diligence standards of international development banks and impact investors.
          </p>
        </div>
      </div>
    </div>
  );
};

// Global Impact Stats Component
const GlobalImpactStats = () => {
  const stats = [
    { value: "800K+", label: "Tons Plastic/Year", icon: Trash2, color: "text-orange", bg: "bg-orange/10" },
    { value: "80%", label: "Organic Waste Stream", icon: Leaf, color: "text-accent", bg: "bg-accent/10" },
    { value: "$34.4B", label: "Construction Market", icon: Building2, color: "text-blue", bg: "bg-blue/10" },
    { value: "$462M", label: "Global Credit Market", icon: Globe, color: "text-purple", bg: "bg-purple/10" },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-6 bg-softGreen rounded-2xl hover:shadow-lg transition">
              <div className={`w-14 h-14 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`${stat.color} w-7 h-7`} />
              </div>
              <p className="text-3xl font-bold text-navy">{stat.value}</p>
              <p className="text-sm text-textMuted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// PEOPLE Pillar Component
const PeoplePillar = () => {
  const metrics = [
    { value: "500+", label: "Institutionalized Jobs", desc: "Women-led manufacturing roles", icon: Users },
    { value: "50%+", label: "Gender Equity", desc: "Minimum women in all roles", icon: UsersRound },
    { value: "$200-500", label: "Monthly Income", desc: "Stable, audited wages", icon: Wallet },
    { value: "25,000", label: "Housing Units", desc: "Climate-resilient homes", icon: Home },
  ];

  const initiatives = [
    "Safety protocols with fume extraction hoods and VOC detectors",
    "Cooperative Environmental Governance (CEG) framework",
    "Skills training and capacity building programs",
    "Healthcare access and social protection"
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-pink-100 rounded-full px-4 py-2 mb-4">
              <Heart className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-700">Pillar 1</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              PEOPLE: Social Inclusion & 
              <span className="text-pink-600"> Institutionalized Livelihoods</span>
            </h2>
            <p className="text-textMuted mb-6 leading-relaxed">
              WasteWiz transitions women from the informal waste sector into institutionalized manufacturing and 
              management roles through Cooperative Environmental Governance (CEG).
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-pink-100">
                  <metric.icon className="w-5 h-5 text-pink-500 mb-2" />
                  <p className="text-2xl font-bold text-navy">{metric.value}</p>
                  <p className="text-sm font-semibold text-pink-600">{metric.label}</p>
                  <p className="text-xs text-textMuted">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-pink-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
              <Shield className="text-pink-600" /> Worker Safety & Dignity
            </h3>
            <ul className="space-y-3">
              {initiatives.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <span className="text-textMuted text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-pink-200">
              <div className="flex items-center justify-between">
                <span className="text-sm text-navy font-semibold">Target Population Served</span>
                <span className="text-2xl font-bold text-pink-600">125,000+</span>
              </div>
              <p className="text-xs text-textMuted mt-1">Through housing construction from waste-derived materials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PLANET Pillar Component
const PlanetPillar = () => {
  const metrics = [
    { value: "15,000+", label: "Tons Diverted/Year", icon: Recycle, color: "text-accent" },
    { value: "75,000", label: "Tons CO₂e Reduced", icon: Leaf, color: "text-accent" },
    { value: "50,000", label: "Tons Plastic Sequestration", icon: Trash2, color: "text-accent" },
    { value: "2,000", label: "Hectares Preserved", icon: TreePine, color: "text-accent" },
  ];

  const environmentalImpacts = [
    { title: "Marine Pollution Reduction", value: "20% drop", icon: Fish },
    { title: "Landfill Diversion", value: "60% reduction", icon: Landfill },
    { title: "Methane Avoidance", value: "15% less", icon: Wind },
    { title: "Water Conservation", value: "500M liters", icon: Droplets },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <div className="bg-accent/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <Globe className="text-accent" /> Ecological Resilience
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {environmentalImpacts.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-3 text-center">
                    <item.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                    <p className="text-lg font-bold text-navy">{item.value}</p>
                    <p className="text-xs text-textMuted">{item.title}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-accent/20 pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Battery className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-navy">Carbon Mitigation Breakdown</span>
                </div>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Landfill Methane Avoidance</span>
                      <span>60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-accent h-1.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Logistics Optimization</span>
                      <span>25%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-teal h-1.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span>Sequestration in Bricks</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-blue h-1.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 mb-4">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Pillar 2</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              PLANET: Waste Diversion & 
              <span className="text-accent"> Ecological Resilience</span>
            </h2>
            <p className="text-textMuted mb-6 leading-relaxed">
              WasteWiz addresses the total waste stream, specifically targeting materials that typically escape 
              conventional recycling — creating lasting environmental impact.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                  <metric.icon className={`${metric.color} w-5 h-5 mb-2`} />
                  <p className="text-2xl font-bold text-navy">{metric.value}</p>
                  <p className="text-sm text-textMuted">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PROSPERITY Pillar Component
const ProsperityPillar = () => {
  const metrics = [
    { value: "5M", label: "Bricks Produced", icon: Factory, detail: "7x stronger than clay" },
    { value: "10,000", label: "Tons Bio-Fertilizer", icon: Sprout, detail: "15% yield increase" },
    { value: "$10M", label: "Annual Revenue", icon: DollarSign, detail: "By Year 3" },
    { value: "14%", label: "Logistics Reduction", icon: Truck, detail: "Fuel & emissions savings" },
  ];

  const economicImpacts = [
    "10,000 smallholder farmers with increased yields",
    "125,000 people in climate-resilient housing",
    "500+ women entrepreneurs earning stable income",
    "Local manufacturing ecosystem development"
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-4">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Pillar 3</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              PROSPERITY: Commercial Output & 
              <span className="text-blue-600"> Economic Efficiency</span>
            </h2>
            <p className="text-textMuted mb-6 leading-relaxed">
              Transforming waste into industrial-grade assets — creating economic value while building 
              a recession-resistant business model.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                  <metric.icon className="text-blue-500 w-5 h-5 mb-2" />
                  <p className="text-2xl font-bold text-navy">{metric.value}</p>
                  <p className="text-sm font-semibold text-blue-600">{metric.label}</p>
                  <p className="text-xs text-textMuted">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
              <PiggyBank className="text-blue-600" /> Economic Multiplier Effect
            </h3>
            <ul className="space-y-3 mb-6">
              {economicImpacts.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-textMuted text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-navy font-semibold">B2G Contract Pipeline</span>
                <span className="text-accent font-bold">$15M+</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <p className="text-xs text-textMuted mt-2">Active negotiations with government housing & roads departments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PROOF Pillar Component
const ProofPillar = () => {
  const features = [
    { icon: Fingerprint, title: "AI Quality Validation", desc: "95%+ feedstock purity", color: "text-purple-600" },
    { icon: Lock, title: "Blockchain Traceability", desc: "Immutable audit trail", color: "text-purple-600" },
    { icon: FileCheck, title: "Audit Ready", desc: "Registered credit standards", color: "text-purple-600" },
    { icon: Activity, title: "Real-Time Monitoring", desc: "IoT sensor network", color: "text-purple-600" },
  ];

  const creditValues = [
    { type: "Plastic Credits", value: "$140-670", unit: "per ton", quality: "Premium" },
    { type: "Carbon Credits", value: "$15-45", unit: "per ton CO₂e", quality: "Verifiable" },
    { type: "Bundled Credits", value: "$200-700", unit: "per ton", quality: "Premium+" },
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <div className="bg-purple-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <Shield className="text-purple-600" /> Credit Monetization Potential
              </h3>
              <div className="space-y-3">
                {creditValues.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-navy">{item.type}</p>
                      <p className="text-xs text-textMuted">{item.unit}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-accent">{item.value}</p>
                      <p className="text-xs text-purple-600">{item.quality}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center text-sm text-textMuted">
                *Premium pricing vs unverified competitors
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 mb-4">
              <Fingerprint className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-700">Pillar 4</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              PROOF: Digital Verification & 
              <span className="text-purple-600"> Audit Readiness</span>
            </h2>
            <p className="text-textMuted mb-6 leading-relaxed">
              The "Proof Layer" is our technological cornerstone — ensuring every impact claim is auditable, 
              transparent, and ready for global credit markets.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
                  <feature.icon className={`${feature.color} w-5 h-5 mb-2`} />
                  <p className="font-semibold text-navy text-sm">{feature.title}</p>
                  <p className="text-xs text-textMuted">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// KPI Summary Table Component
const KPISummaryTable = () => {
  const kpis = [
    { dimension: "People", target: "500+ Institutionalized Jobs", method: "Payroll data & Gender Inclusion Audits", status: "On Track" },
    { dimension: "Planet", target: "15,000+ Tons Waste Diverted", method: "AI/IoT sensors & Blockchain Ledger", status: "Progressing" },
    { dimension: "Prosperity", target: "5 Million Bricks/Pavers", method: "QC Lab Testing & B2G Sales Contracts", status: "Early Stage" },
    { dimension: "Proof", target: "$1M+ Annual Credit Revenue", method: "Registered Credit Standards (Verra)", status: "Targeting" },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-navy">3-Year Impact Targets</h2>
          <div className="w-16 h-0.5 bg-accent mx-auto rounded-full mt-2"></div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
            <thead className="bg-navy">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Impact Dimension</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">3-Year Target</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Verification Method</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {kpis.map((kpi, idx) => (
                <tr key={idx} className="hover:bg-softGreen/30 transition">
                  <td className="px-6 py-4 font-semibold text-navy">{kpi.dimension}</td>
                  <td className="px-6 py-4 text-textMuted">{kpi.target}</td>
                  <td className="px-6 py-4 text-textMuted text-sm">{kpi.method}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                      kpi.status === 'On Track' ? 'bg-green-100 text-green-700' :
                      kpi.status === 'Progressing' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {kpi.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Traction & Validation Component
const TractionSection = () => {
  const existing = [
    "AI-enabled smart bins with 95%+ sorting accuracy",
    "50-user pilot completed with digital incentives",
    "Power BI dashboard for real-time tracking",
    "1,000+ tons plastic diverted through community network"
  ];

  const validated = [
    "12.43 N/mm² brick strength (7x stronger than clay)",
    "0-2.84% water absorption rate",
    "Modified Indonesian Windrow Technique validated in Mirpur",
    "20-30% plastic diversion with incentive model"
  ];

  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Traction & Validation</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4">From pilot to proven impact</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="text-accent w-5 h-5" />
              <h3 className="text-xl font-bold text-navy">What Exists Already</h3>
            </div>
            <ul className="space-y-3">
              {existing.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  </div>
                  <span className="text-textMuted text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-accent w-5 h-5" />
              <h3 className="text-xl font-bold text-navy">What Has Been Validated</h3>
            </div>
            <ul className="space-y-3">
              {validated.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  </div>
                  <span className="text-textMuted text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 bg-navy rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-accent" />
            <h3 className="font-bold">What's Scaling Now</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <p className="text-sm font-semibold">Triple-Loop Integration</p>
              <p className="text-xs text-gray-300">Finalizing hub integration</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <p className="text-sm font-semibold">Blockchain Deployment</p>
              <p className="text-xs text-gray-300">Late-development stage</p>
            </div>
            <div className="bg-white/10 rounded-xl p-3 text-center">
              <p className="text-sm font-semibold">B2G Contracts</p>
              <p className="text-xs text-gray-300">Under negotiation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Impact Page Component
const Impact = () => {
  return (
    <div className="font-sans antialiased">
      <ImpactHeader />
      <GlobalImpactStats />
      <PeoplePillar />
      <PlanetPillar />
      <ProsperityPillar />
      <ProofPillar />
      <KPISummaryTable />
      <TractionSection />
      
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
        .text-pink-600 {
          color: ${colors.pink};
        }
        .bg-pink-50 {
          background-color: #FDF2F8;
        }
        .text-blue-600 {
          color: ${colors.blue};
        }
        .bg-blue-50 {
          background-color: #EFF6FF;
        }
        .text-purple-600 {
          color: ${colors.purple};
        }
        .bg-purple-50 {
          background-color: #F5F3FF;
        }
        .bg-teal {
          background-color: ${colors.teal};
        }
      `}</style>
    </div>
  );
};

// Helper component for Landfill icon (since it wasn't imported)
const Landfill: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 20h16M6 16l2-8h8l2 8M8 8l2-4h4l2 4" stroke="currentColor" fill="none"/>
  </svg>
);

export default Impact;