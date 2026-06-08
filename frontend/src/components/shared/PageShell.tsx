import { Link } from "react-router-dom";

type Item = {
  title: string;
  text: string;
};

const PageShell = ({
  badge,
  title,
  subtitle,
  items,
  ctaText,
  ctaLink,
}: {
  badge: string;
  title: string;
  subtitle: string;
  items: Item[];
  ctaText?: string;
  ctaLink?: string;
}) => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-[#F8FAFC] to-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <span className="rounded-full bg-[#EAF7EF] px-5 py-2 text-sm font-bold text-[#267246]">
            {badge}
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-[#2B3F55] md:text-6xl">
            {title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-[#267246]/10 bg-white p-7 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-black text-[#2B3F55]">
                {item.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>

        {ctaText && ctaLink && (
          <Link
            to={ctaLink}
            className="mt-12 inline-block rounded-full bg-[#267246] px-8 py-4 font-bold text-white"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
};

export default PageShell;