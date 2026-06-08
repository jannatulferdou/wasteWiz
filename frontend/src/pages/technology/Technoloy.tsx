import React from 'react';
import {
  Cpu,
  Coins,
  Microchip,
  Brain,
  Camera,
  Wifi,
  Route,
  BarChart3,
  LineChart,
  Lock,
  CheckCircle,
  Cloud,
  Server,
  Radio,
  Gauge,
  TrendingUp,
  Eye,
  Zap,
  Fingerprint,
  FileCheck,
  Network,
  Activity,
  Signal,
  Thermometer,
  Droplets,
  Weight,
  Timer,
} from 'lucide-react';

const colors = {
  white: '#FFFFFF',
  softGreen: '#E8F3EB',
  navy: '#0A2540',
  accentGreen: '#2E7D32',
  navyLight: '#1A3A5C',
  textDark: '#1A2C2C',
  textMuted: '#5A6E6E',
  purple: '#7C3AED',
  orange: '#F97316',
  cyan: '#06B6D4',
};

// Technology Header Component
const TechHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-navy to-navyLight text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 L1000,0 L1000,800 L0,800 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="200" cy="300" r="150" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="700" cy="500" r="200" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <rect x="400" y="200" width="200" height="200" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Cpu className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Proprietary Technology Stack</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Digital Backbone of
            <span className="text-accent"> Circular Economy</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            AI-powered sorting, IoT-optimized logistics, blockchain-verified proof — transforming waste collection into data-rich manufacturing and financial verification hubs.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
              <CheckCircle className="w-3 h-3 text-accent" />
              <span className="text-xs">95%+ Sorting Accuracy</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
              <CheckCircle className="w-3 h-3 text-accent" />
              <span className="text-xs">14% Logistics Reduction</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5">
              <CheckCircle className="w-3 h-3 text-accent" />
              <span className="text-xs">Immutable Blockchain Trail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Architecture Overview Component
const ArchitectureOverview = () => {
  const layers = [
    {
      title: "Smart Collection Layer",
      icon: Camera,
      color: "bg-cyan-50",
      borderColor: "border-cyan-200",
      iconColor: "text-cyan-600",
      technologies: ["Computer Vision", "TensorFlow Lite", "OpenCV", "Raspberry Pi"],
      description: "Solar-powered smart bins with 95%+ accurate polymer classification"
    },
    {
      title: "IoT & Logistics Layer",
      icon: Radio,
      color: "bg-orange-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600",
      technologies: ["Sensor Networks", "TOPSIS Algorithm", "Real-time Monitoring", "VOC Detection"],
      description: "Dynamic route optimization reducing vehicle distance by 14%"
    },
    {
      title: "Data & Analytics Layer",
      icon: BarChart3,
      color: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
      technologies: ["Power BI Dashboards", "KPI Tracking", "Predictive Analytics", "Impact Metrics"],
      description: "Centralized visualization for investors and policymakers"
    },
    {
      title: "Proof Layer (Blockchain)",
      icon: Lock,
      color: "bg-emerald-50",
      borderColor: "border-emerald-200",
      iconColor: "text-emerald-600",
      technologies: ["Private Blockchain", "Immutable Ledger", "Smart Contracts", "Audit Trail"],
      description: "Tamper-proof verification for premium credit monetization"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-navy mb-3">System Architecture</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-textMuted max-w-2xl mx-auto">
            Smart Collection → Intelligent Processing → Immutable Proof
          </p>
        </div>

        <div className="relative">
          {/* Connecting lines - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-200 via-purple-200 to-emerald-200 -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 grid lg:grid-cols-4 gap-6">
            {layers.map((layer, idx) => (
              <div key={idx} className={`${layer.color} rounded-2xl p-6 border-l-4 ${layer.borderColor} hover:shadow-xl transition-all group`}>
                <div className={`w-14 h-14 ${layer.color} rounded-xl flex items-center justify-center mb-4 border-2 border-white shadow-sm`}>
                  <layer.icon className={`${layer.iconColor} w-7 h-7`} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{layer.title}</h3>
                <p className="text-textMuted text-sm mb-4">{layer.description}</p>
                <div className="flex flex-wrap gap-2">
                  {layer.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-white/80 rounded-full px-2 py-1 text-navy">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// AI & Computer Vision Deep Dive
const AISection = () => {
  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 mb-4">
              <Brain className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-navy">AI Core</span>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Computer Vision & 
              <span className="text-accent"> Intelligent Sorting</span>
            </h2>
            <p className="text-textMuted mb-6 leading-relaxed">
              WasteWiz utilizes embedded Artificial Intelligence, specifically OpenCV and TensorFlow Lite models, 
              to power its solar-powered smart bins — achieving 95%+ classification accuracy across seven different 
              polymer types at the community level.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Eye className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Real-time Polymer Recognition</h4>
                  <p className="text-sm text-textMuted">PET, PP, HDPE, LDPE, PVC, PS, and multilayer films identified instantly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Edge Computing on Device</h4>
                  <p className="text-sm text-textMuted">Low-power Raspberry Pi/Arduino hardware processes locally — no cloud dependency</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Continuous Model Training</h4>
                  <p className="text-sm text-textMuted">Models improve with each batch, adapting to local waste stream variations</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-2xl p-4 border border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-semibold text-navy">Classification Accuracy</span>
                <span className="text-2xl font-bold text-accent">95%+</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
              <p className="text-xs text-textMuted mt-2">Validated across 7 polymer types in pilot studies</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Camera className="text-accent w-6 h-6" />
              <h3 className="text-xl font-bold text-navy">AI Vision Stack</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-navy">OpenCV</span>
                  <span className="text-xs text-textMuted">Image Processing</span>
                </div>
                <div className="text-xs text-textMuted">Preprocessing, feature extraction, edge detection for waste stream analysis</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-navy">TensorFlow Lite</span>
                  <span className="text-xs text-textMuted">Model Inference</span>
                </div>
                <div className="text-xs text-textMuted">Lightweight neural network deployment on edge devices for real-time classification</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-navy">MobileNet SSD</span>
                  <span className="text-xs text-textMuted">Object Detection</span>
                </div>
                <div className="text-xs text-textMuted">Efficient architecture for detecting and localizing waste items in bins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// IoT & Logistics Section
const IoTSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-navy rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Wifi className="text-accent w-6 h-6" />
                <h3 className="text-xl font-bold">IoT Sensor Network</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-xl p-3">
                  <Thermometer className="w-4 h-4 text-accent mb-2" />
                  <p className="text-xs">Temperature</p>
                  <p className="text-sm font-semibold">Real-time monitoring</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <Weight className="w-4 h-4 text-accent mb-2" />
                  <p className="text-xs">Fill Level</p>
                  <p className="text-sm font-semibold">Ultrasonic sensors</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <Droplets className="w-4 h-4 text-accent mb-2" />
                  <p className="text-xs">Moisture</p>
                  <p className="text-sm font-semibold">Organic decomposition</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <Activity className="w-4 h-4 text-accent mb-2" />
                  <p className="text-xs">VOC</p>
                  <p className="text-sm font-semibold">Toxicity detection</p>
                </div>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">TOPSIS-based Routing</span>
                  <span className="text-2xl font-bold text-accent">-14%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Minimum reduction in vehicle travel distance</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-softGreen rounded-full px-4 py-2 mb-4">
              <Signal className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-navy">IoT & Logistics</span>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Smart Logistics with
              <span className="text-accent"> TOPSIS Optimization</span>
            </h2>
            <p className="text-textMuted mb-6 leading-relaxed">
              Our IoT sensor array monitors fill levels, material composition, and potential toxicity in real-time, 
              feeding data into a TOPSIS-based multi-criteria decision algorithm for dynamic route optimization.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Route className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Dynamic Route Optimization</h4>
                  <p className="text-sm text-textMuted">Collection routes adapt in real-time based on bin fill levels and priority</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gauge className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Fuel & Carbon Reduction</h4>
                  <p className="text-sm text-textMuted">14% less distance = lower costs + verifiable carbon credits</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Timer className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy">Predictive Maintenance</h4>
                  <p className="text-sm text-textMuted">Sensor data predicts equipment failures before they happen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data Analytics Section
const DataAnalyticsSection = () => {
  const metrics = [
    { label: "Waste Diversion", value: "15,000+", unit: "tons/year" },
    { label: "CO₂ Reduction", value: "75,000", unit: "tons/year" },
    { label: "Jobs Created", value: "500+", unit: "women-led" },
    { label: "Bricks Produced", value: "5M", unit: "units" },
  ];

  return (
    <div className="py-20 bg-softGreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 mb-4">
              <LineChart className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-navy">Analytics Layer</span>
            </div>
            <h2 className="text-3xl font-bold text-navy mb-4">
              Real-Time Dashboards &
              <span className="text-accent"> Stakeholder Transparency</span>
            </h2>
            <p className="text-textMuted mb-6 leading-relaxed">
              Power BI dashboards consolidate real-time information from across the hub network — visualizing 
              KPIs such as total waste diverted, carbon sequestration totals, and job creation metrics for 
              investors, grant providers, and policymakers.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {metrics.map((metric, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-accent">{metric.value}</p>
                  <p className="text-xs text-textMuted">{metric.label}</p>
                  <p className="text-xs text-navy font-medium">{metric.unit}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-navy">Live Monitoring Feed</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-textMuted">Today's Diversion</span>
                  <span className="font-semibold text-navy">42.5 tons</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-textMuted">Active Hubs</span>
                  <span className="font-semibold text-navy">8</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-textMuted">Active Collection</span>
                  <span className="font-semibold text-navy">156 workers</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-navy">Power BI Dashboard Preview</h3>
              <BarChart3 className="text-accent w-5 h-5" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Waste Diverted (MTD)</span>
                  <span className="font-semibold">1,284 tons</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: '64%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Carbon Credits Generated</span>
                  <span className="font-semibold">342 credits</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Women Employed</span>
                  <span className="font-semibold">287</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '57%' }}></div>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-textMuted">Exportable Reports</span>
                  <FileCheck className="text-accent w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Blockchain Proof Layer Section
const BlockchainSection = () => {
  return (
    <div className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-4">
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-sm">The Proof Layer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Blockchain-Verified
            <span className="text-accent"> Immutable Trust</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Every transaction logged on a private, secure blockchain platform — from initial deposit to final industrial sale
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
              <Fingerprint className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Immutable Audit Trail</h3>
            <p className="text-gray-300 text-sm">Every material movement recorded permanently — no deletion, no tampering</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">EPR Compliance Ready</h3>
            <p className="text-gray-300 text-sm">Exact data required for FMCG Extended Producer Responsibility mandates</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
              <Coins className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-2">Premium Credit Pricing</h3>
            <p className="text-gray-300 text-sm">AI (quality) + Blockchain (volume) = $140–670 per ton valuation</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 text-navy">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Network className="text-accent" />
              <span className="font-semibold">Blockchain Transaction Flow</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xs bg-softGreen px-3 py-1 rounded-full">Hyperledger Fabric</span>
              <span className="text-xs bg-softGreen px-3 py-1 rounded-full">Private Permissioned</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-sm font-bold">1</span>
              </div>
              <p className="text-xs font-medium">User Deposit</p>
              <p className="text-xs text-textMuted">Timestamp + user ID + weight</p>
            </div>
            <div className="p-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-sm font-bold">2</span>
              </div>
              <p className="text-xs font-medium">AI Sorting</p>
              <p className="text-xs text-textMuted">Polymer type + purity score</p>
            </div>
            <div className="p-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-sm font-bold">3</span>
              </div>
              <p className="text-xs font-medium">Processing Batch</p>
              <p className="text-xs text-textMuted">Manufacturing ID + output volume</p>
            </div>
            <div className="p-3">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-sm font-bold">4</span>
              </div>
              <p className="text-xs font-medium">Final Sale</p>
              <p className="text-xs text-textMuted">Buyer + credit generation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Tech Stack Summary Component
const TechStackSummary = () => {
  const stacks = [
    { category: "AI & ML", items: ["TensorFlow Lite", "OpenCV", "MobileNet SSD", "Python"], icon: Brain },
    { category: "Hardware", items: ["Raspberry Pi", "Arduino", "IoT Sensors", "Solar Panels"], icon: Microchip },
    { category: "Backend", items: ["Node.js", "PostgreSQL", "MQTT", "WebSocket"], icon: Server },
    { category: "Blockchain", items: ["Hyperledger Fabric", "Smart Contracts", "IPFS", "Node.js"], icon: Lock },
    { category: "Analytics", items: ["Power BI", "Tableau", "Apache Kafka", "Redis"], icon: BarChart3 },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "GitHub Actions"], icon: Cloud },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy mb-3">Full Technology Stack</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          <p className="text-textMuted mt-4">Open-source, scalable, and locally adaptable infrastructure</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {stacks.map((stack, idx) => (
            <div key={idx} className="bg-softGreen rounded-2xl p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <stack.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-navy">{stack.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stack.items.map((item, i) => (
                  <span key={i} className="text-xs bg-white rounded-full px-3 py-1.5 text-navy shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Technology Page Component
const Technology = () => {
  return (
    <div className="font-sans antialiased">
      <TechHeader />
      <ArchitectureOverview />
      <AISection />
      <IoTSection />
      <DataAnalyticsSection />
      <BlockchainSection />
      <TechStackSummary />
      
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
        .btn-primary {
          background-color: ${colors.accentGreen};
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-primary:hover {
          background-color: #1B5E20;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default Technology;