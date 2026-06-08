import { useEffect, useRef, useState } from "react";
import {
  BriefcaseBusiness,
  Factory,
  Leaf,
  Recycle,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    value: 15000,
    suffix: "+",
    label: "Tons Waste Diverted",
    icon: <Recycle size={28} />,
    gradient: "from-[#267246] to-[#3FAE6A]",
  },
  {
    value: 75000,
    suffix: "",
    label: "Tons CO₂ Reduced",
    icon: <Leaf size={28} />,
    gradient: "from-[#52B788] to-[#267246]",
  },
  {
    value: 500,
    suffix: "+",
    label: "Green Jobs Created",
    icon: <BriefcaseBusiness size={28} />,
    gradient: "from-[#2B3F55] to-[#3E5873]",
  },
  {
    value: 5,
    suffix: "M+",
    label: "Bricks Produced",
    icon: <Factory size={28} />,
    gradient: "from-[#267246] to-[#2B3F55]",
  },
];

const AnimatedNumber = ({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let frame: number;
    const duration = 2200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

const ImpactCounter = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-white py-28"
    >
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#267246]/10 blur-3xl" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-[#2B3F55]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF7EF] px-5 py-2 text-sm font-bold text-[#267246]">
            <TrendingUp size={16} />
            Measurable Climate Impact
          </span>

          <h2 className="mt-6 text-4xl font-black text-[#2B3F55] md:text-6xl">
            Numbers That Matter
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            WasteWiz creates measurable environmental, social, and economic
            value through smart waste management and circular manufacturing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-[32px] border border-slate-100 bg-white/90 p-8 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div
                className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${stat.gradient} opacity-10 blur-3xl`}
              />

              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg`}
              >
                {stat.icon}
              </div>

              <h3 className="text-5xl font-black tracking-tight text-[#2B3F55]">
                <AnimatedNumber
                  value={stat.value}
                  suffix={stat.suffix}
                  start={startCount}
                />
              </h3>

              <p className="mt-3 text-lg font-semibold text-slate-600">
                {stat.label}
              </p>

              <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full bg-gradient-to-r ${stat.gradient} transition-all duration-700 group-hover:w-full`}
                  style={{ width: "70%" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-[#267246] via-[#2E7D53] to-[#2B3F55] p-10 text-center text-white shadow-2xl md:p-14">
          <h3 className="text-3xl font-black md:text-5xl">
            People • Planet • Prosperity • Proof
          </h3>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-white/80">
            Every kilogram of waste processed generates measurable climate
            impact, sustainable livelihoods, and transparent proof for
            governments, investors, and communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;