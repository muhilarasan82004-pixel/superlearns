export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Apple Style */}
      <section className="relative h-[692px] flex items-center justify-center overflow-hidden bg-[#fbfbfd] dark:bg-[#000000]">
        <div className="text-center px-6">
          <h1 className="text-[56px] leading-[1.07] font-semibold tracking-[-0.005em] text-[#1d1d1f] dark:text-[#f5f5f7] mb-2">
            SuperLearn
          </h1>
          <p className="text-[28px] leading-[1.14] font-normal tracking-[0.007em] text-[#1d1d1f] dark:text-[#f5f5f7] mb-6">
            The future of learning.
          </p>
          <p className="text-[21px] leading-[1.38] font-normal tracking-[0.011em] text-[#1d1d1f] dark:text-[#f5f5f7] mb-8">
            From $29/month
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-full bg-[#0071e3] dark:bg-[#2997ff] text-white text-[17px] leading-[1.17] font-normal hover:bg-[#0077ed] dark:hover:bg-[#3fa4ff] transition-colors"
            >
              Get started
            </a>
            <a
              href="#"
              className="inline-block px-6 py-3 text-[#06c] dark:text-[#2997ff] text-[17px] leading-[1.17] font-normal hover:underline"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 px-6 bg-white dark:bg-[#000000]">
        <div className="max-w-[980px] mx-auto">
          <h2 className="text-[48px] leading-[1.08] font-semibold tracking-[-0.003em] text-[#1d1d1f] dark:text-[#f5f5f7] text-center mb-16">
            Why SuperLearn?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fast", desc: "Blazing fast performance" },
              { title: "Simple", desc: "Easy to use interface" },
              { title: "Powerful", desc: "Advanced features" },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <h3 className="text-[24px] leading-[1.16] font-semibold tracking-[0.009em] text-[#1d1d1f] dark:text-[#f5f5f7] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[17px] leading-[1.47] font-normal tracking-[-0.022em] text-[#86868b]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
