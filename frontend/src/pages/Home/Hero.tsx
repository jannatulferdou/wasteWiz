import { useEffect, useRef } from "react";
import {
  ArrowRight,
  BarChart3,
  Cpu,
  Factory,
  Recycle,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { animate, stagger } from "animejs";
import bgimg from "../../assets/compostvsrecycling.jpg"
const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-title", {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.35,
        ease: "power3.out",
      });

      gsap.from(".hero-btn", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        delay: 0.55,
        stagger: 0.12,
        ease: "back.out(1.7)",
      });

      gsap.from(".hero-stat", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        delay: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".hero-visual", {
        x: 80,
        opacity: 0,
        duration: 1,
        delay: 0.35,
        ease: "power3.out",
      });

      gsap.from(".flow-card", {
        y: 35,
        opacity: 0,
        duration: 0.7,
        delay: 0.7,
        stagger: 0.18,
        ease: "power3.out",
      });
    }, heroRef);

    animate(".floating-card", {
      translateY: [-8, 8],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 2600,
      delay: stagger(300),
    });

    animate(".pulse-dot", {
      scale: [1, 1.35],
      opacity: [0.5, 1],
      direction: "alternate",
      loop: true,
      easing: "easeInOutQuad",
      duration: 1200,
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      <img
        src={bgimg}
        alt="Recycling and waste management background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-white/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/80" />

      <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-[#267246]/20 blur-3xl" />
      <div className="absolute bottom-20 right-20 h-80 w-80 rounded-full bg-[#2B3F55]/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-28 lg:grid-cols-2">
        <div>
          <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-[#267246]/20 bg-white/80 px-5 py-2 text-sm font-bold text-[#267246] shadow-sm backdrop-blur">
            <Recycle size={17} />
            AI Powered Circular Economy
          </span>

          <h1 className="hero-title mt-8 max-w-3xl text-5xl font-black leading-tight tracking-tight text-[#2B3F55] md:text-7xl">
            Transforming
            <span className="block text-[#267246]">Waste Into Wealth</span>
          </h1>

          <p className="hero-text mt-6 max-w-xl text-lg leading-8 text-slate-700">
            WasteWiz converts plastic and organic waste into climate-resilient
            infrastructure, bio-fertilizer, verified impact credits, and
            sustainable green jobs.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/partners"
              className="hero-btn rounded-full bg-[#267246] px-7 py-4 font-bold text-white shadow-lg shadow-[#267246]/25 transition hover:-translate-y-1 hover:scale-105"
            >
              Partner With Us
            </Link>

            <Link
              to="/funding"
              className="hero-btn rounded-full bg-[#2B3F55] px-7 py-4 font-bold text-white shadow-lg shadow-[#2B3F55]/25 transition hover:-translate-y-1 hover:scale-105"
            >
              Invest Now
            </Link>

            <Link
              to="/impact"
              className="hero-btn flex items-center gap-2 rounded-full border border-[#2B3F55]/20 bg-white/75 px-7 py-4 font-bold text-[#2B3F55] backdrop-blur transition hover:bg-white"
            >
              View Impact
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl gap-4 sm:grid-cols-3">
            <Stat number="15K+" label="Tons Waste Diverted" />
            <Stat number="500+" label="Green Jobs" />
            <Stat number="75K" label="CO₂ Reduced" />
          </div>
        </div>

        <div className="hero-visual relative hidden lg:block">
          <div className="relative ml-auto max-w-md rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[#EAF7EF] to-[#EEF3F8] p-6">
              <div className="grid gap-5">
                <FlowCard
                  icon={<Cpu size={22} />}
                  title="Smart Collection"
                  text="AI sorting with OpenCV + TensorFlow Lite"
                />

                <Connector />

                <FlowCard
                  icon={<Factory size={22} />}
                  title="Micro-Factories"
                  text="Plastic-to-bricks and organic-to-fertilizer"
                  navy
                />

                <Connector />

                <FlowCard
                  icon={<ShieldCheck size={22} />}
                  title="Proof Layer"
                  text="Blockchain traceability for impact credits"
                />
              </div>
            </div>
          </div>

          <FloatingCard
            className="-left-8 top-8"
            icon="♻"
            title="95%+"
            text="AI Sorting Accuracy"
          />

          <FloatingCard
            className="-right-5 top-44"
            icon="🧱"
            title="5M"
            text="Bricks Target"
          />

          <FloatingCard
            className="-left-4 bottom-20"
            icon="🌱"
            title="10K"
            text="Tons Fertilizer"
          />

          <div className="floating-card absolute -bottom-8 right-16 rounded-3xl border border-[#267246]/10 bg-white/90 p-5 shadow-xl backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-[#2B3F55] text-white">
                <BarChart3 size={22} />
              </div>
              <div>
                <h4 className="font-black text-[#2B3F55]">Live Impact</h4>
                <p className="text-sm text-slate-600">Dashboard ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="hero-stat rounded-3xl border border-[#267246]/10 bg-white/80 p-5 shadow-lg backdrop-blur">
      <h3 className="text-3xl font-black text-[#267246]">{number}</h3>
      <p className="mt-1 text-sm font-semibold text-slate-600">{label}</p>
    </div>
  );
};

const Connector = () => {
  return (
    <div className="relative mx-auto h-10 w-[2px] rounded-full bg-[#267246]/30">
      <span className="pulse-dot absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#267246]" />
    </div>
  );
};

const FlowCard = ({
  icon,
  title,
  text,
  navy,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  navy?: boolean;
}) => {
  return (
    <div className="flow-card rounded-3xl bg-white p-5 shadow-lg">
      <div className="flex items-start gap-4">
        <div
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white ${
            navy ? "bg-[#2B3F55]" : "bg-[#267246]"
          }`}
        >
          {icon}
        </div>

        <div>
          <h3 className="font-black text-[#2B3F55]">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
        </div>
      </div>
    </div>
  );
};

const FloatingCard = ({
  className,
  icon,
  title,
  text,
}: {
  className: string;
  icon: string;
  title: string;
  text: string;
}) => {
  return (
    <div
      className={`floating-card absolute rounded-3xl border border-[#267246]/10 bg-white/90 p-5 shadow-xl backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{icon}</span>
        <div>
          <h4 className="text-xl font-black text-[#267246]">{title}</h4>
          <p className="text-sm font-semibold text-slate-600">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;