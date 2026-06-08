const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-[#F8FAFC] to-white py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
        <div>
          <span className="rounded-full bg-[#EAF7EF] px-5 py-2 text-sm font-bold text-[#267246]">
            Contact
          </span>

          <h1 className="mt-6 text-4xl font-black text-[#2B3F55] md:text-6xl">
            Partner, invest, or collaborate with WasteWiz.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Reach out for B2G, B2B, investor, research, or organization inquiries.
          </p>

          <div className="mt-8 rounded-[2rem] bg-white p-7 shadow-xl">
            <p className="font-bold text-[#2B3F55]">Email</p>
            <p className="mt-2 text-slate-600">hello@wastewiz.ai</p>
            <p className="mt-6 font-bold text-[#2B3F55]">Location</p>
            <p className="mt-2 text-slate-600">Bangladesh, scaling across South Asia</p>
          </div>
        </div>

        <form className="rounded-[2rem] bg-white p-8 shadow-2xl">
          <div className="grid gap-5">
            <input className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#267246]" placeholder="Your name" />
            <input className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#267246]" placeholder="Email address" />
            <select className="rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#267246]">
              <option>Partnership Type</option>
              <option>Investor</option>
              <option>Government</option>
              <option>FMCG / EPR</option>
              <option>NGO</option>
              <option>Research / Lab</option>
            </select>
            <textarea className="min-h-40 rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-[#267246]" placeholder="Tell us about your inquiry" />
            <button className="rounded-full bg-[#267246] px-8 py-4 font-bold text-white">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;