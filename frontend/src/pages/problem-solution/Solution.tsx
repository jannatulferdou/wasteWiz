import PageShell from "../../components/shared/PageShell";


const Solution = () => {
  return (
    <PageShell
      badge="WasteWiz Solution"
      title="Smart collection, local processing, and verified proof in one system."
      subtitle="WasteWiz connects community participation, AI sorting, processing micro-factories, and traceable impact reporting."
      items={[
        { title: "Smart Collection", text: "AI-powered bins support source segregation and cleaner feedstock." },
        { title: "Processing Micro-Factories", text: "Local hubs convert waste into bricks, pavers, fertilizer, and recycled materials." },
        { title: "Proof Layer", text: "Blockchain logs material movement for audit-ready impact verification." },
        { title: "Triple-Loop Model", text: "High-value recycling, low-value plastic-to-bricks, and organic fertilizer production." },
        { title: "Community Incentives", text: "Users receive rewards for consistent participation and segregation." },
        { title: "Scalable Hubs", text: "Standardized hub model supports replication across cities and regions." },
      ]}
    />
  );
};

export default Solution;