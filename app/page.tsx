import ContactForm from "./components/ContactForm";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-foreground/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="text-xl font-bold text-foreground">
            AI Boardroom
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-foreground/70">
          <a href="#servicios" className="hover:text-primary transition">
            Services
          </a>
          <a href="#proceso" className="hover:text-primary transition">
            Process
          </a>
          <a href="#pricing" className="hover:text-primary transition">
            Pricing
          </a>
          <a
            href="#contacto"
            className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary/90 transition font-medium"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full" />
            AI strategy and transformation for enterprises
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            AI Will Reshape Your{" "}
            <span className="text-primary">
              Business. Lead the Change.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10 max-w-2xl">
            AI Boardroom helps executive teams understand where AI will
            transform their business model, identify the highest-value
            opportunities, align leadership around priorities, and define a
            practical roadmap — in weeks, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition text-lg"
            >
              Book an Executive Consultation
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center justify-center border-2 border-foreground/15 text-foreground font-semibold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition text-lg"
            >
              See how we work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemaOportunidad() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            AI is transforming every industry.
            <br />
            <span className="text-primary">Your leadership team needs a clear plan.</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            AI Boardroom helps executive teams understand where AI will reshape
            their business, identify high-value opportunities, align leadership
            around what matters, and define a practical roadmap to act on.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "\u26A0",
              title: "Strategic clarity",
              description:
                "Most enterprises know AI matters but lack a clear view of where it creates real value. We cut through the noise and focus your leadership on the decisions that matter most.",
            },
            {
              icon: "\u25CE",
              title: "High-value opportunities",
              description:
                "AI can transform operations, customer experience, and entire business models. We help you identify and prioritize the opportunities with the greatest enterprise-wide impact.",
            },
            {
              icon: "\u2192",
              title: "Leadership alignment",
              description:
                "Successful AI transformation requires your executive team to be aligned on priorities, investment, and timelines. We make that alignment happen — fast.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-background rounded-2xl p-8 border border-foreground/5"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-xl mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Servicios() {
  const servicios = [
    {
      number: "01",
      title: "Executive AI Strategy Workshop",
      description:
        "An intensive session with your leadership team to assess the AI landscape, identify the highest-impact opportunities, and align on strategic priorities. Designed for enterprise executives who need clarity, not complexity.",
      tags: ["Executive team", "Half day", "Cross-industry"],
    },
    {
      number: "02",
      title: "AI Opportunity Assessment",
      description:
        "A structured evaluation of where AI can create the most value across your organization. We analyze your operations, competitive position, and market dynamics to surface the opportunities worth pursuing.",
      tags: ["Opportunity mapping", "Enterprise-wide"],
    },
    {
      number: "03",
      title: "90-Day Transformation Roadmap",
      description:
        "A concrete, board-ready action plan with prioritized initiatives, defined owners, success metrics, and investment estimates. Built to move your organization from strategy to execution in 90 days.",
      tags: ["Actionable", "Board-ready"],
    },
    {
      number: "04",
      title: "Leadership Alignment Sessions",
      description:
        "Facilitated sessions that bring your C-suite and senior leaders into alignment on AI priorities, investment decisions, and organizational readiness. We ensure your leadership team moves forward together.",
      tags: ["C-suite", "Alignment", "Decision-making"],
    },
    {
      number: "05",
      title: "Strategic Advisory",
      description:
        "Ongoing strategic counsel for executive teams navigating AI transformation. We provide the frameworks, perspective, and decision support your leadership needs as priorities evolve.",
      tags: ["Ongoing", "Advisory", "Executive support"],
    },
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services designed for{" "}
            <span className="text-primary">executive decisions</span>
          </h2>
          <p className="text-lg text-foreground/70">
            We don&apos;t sell technology. We help executive teams make informed
            decisions about AI with clarity and speed.
          </p>
        </div>
        <div className="space-y-4">
          {servicios.map((s) => (
            <div
              key={s.number}
              className="bg-white rounded-2xl p-8 border border-foreground/5 hover:border-primary/20 transition group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <span className="text-sm font-bold text-secondary">
                  {s.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition">
                    {s.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-background text-foreground/60 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industrias() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI transformation across{" "}
            <span className="text-primary">your enterprise</span>
          </h2>
          <p className="text-lg text-foreground/70">
            We help large organizations identify where AI creates the greatest
            value — across functions, industries, and business models.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Operations", description: "Process automation, supply chain optimization, and intelligent workflows that drive efficiency at scale." },
            { title: "Customer Experience", description: "Personalization, predictive engagement, and AI-driven service that deepens customer relationships." },
            { title: "Knowledge Work", description: "Document intelligence, decision support, and productivity tools that amplify your workforce." },
            { title: "Risk & Compliance", description: "Automated monitoring, anomaly detection, and regulatory intelligence that reduce exposure." },
            { title: "Product Innovation", description: "AI-powered product development, market sensing, and rapid prototyping for competitive advantage." },
            { title: "Workforce Productivity", description: "Intelligent resource allocation, talent analytics, and AI-assisted collaboration across teams." },
          ].map((item) => (
            <div key={item.title} className="bg-background rounded-2xl p-8 border border-foreground/5">
              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Industries we serve
          </h3>
          <p className="text-foreground/70 mb-8">
            Our enterprise AI advisory works across sectors. We bring cross-industry
            perspective to every engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Healthcare", "Manufacturing", "Retail", "Logistics", "Financial Services", "Telecom", "Energy"].map((industry) => (
              <span key={industry} className="text-sm font-medium bg-primary/10 text-primary px-4 py-2 rounded-full">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  const pasos = [
    {
      step: "1",
      title: "Assessment",
      subtitle: "Week 1",
      description:
        "We evaluate your current AI position: organizational maturity, existing capabilities, competitive landscape, and the opportunities most relevant to your business.",
    },
    {
      step: "2",
      title: "Executive Workshop",
      subtitle: "Week 1-2",
      description:
        "An intensive session with your executive team where we prioritize use cases, evaluate impact vs. feasibility, and align the strategic AI vision.",
    },
    {
      step: "3",
      title: "90-Day Roadmap",
      subtitle: "Week 2",
      description:
        "We deliver a concrete action plan with prioritized initiatives, success metrics, owners, and estimated budget. Ready to present to the board.",
    },
  ];

  return (
    <section id="proceso" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How we work
          </h2>
          <p className="text-lg text-foreground/70">
            A 2-week process designed to take your executive team from
            uncertainty to action.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {pasos.map((paso) => (
            <div key={paso.step} className="relative">
              <div className="bg-white rounded-2xl p-8 border border-foreground/5 h-full">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  {paso.step}
                </div>
                <p className="text-sm font-medium text-secondary mb-2">
                  {paso.subtitle}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {paso.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {paso.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Entregables() {
  const items = [
    "AI maturity assessment of your organization",
    "Competitive exposure map for your market segment",
    "Use case prioritization by impact and feasibility",
    "90-day executive roadmap with metrics and owners",
    "Industry benchmark of AI use cases",
    "Board-ready executive one-pager",
    "Investment estimate and expected ROI",
    "Capability and talent recommendations",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Clear deliverables for{" "}
              <span className="text-primary">your executive team</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Everything you need to present a solid AI strategy to the board.
              No technical jargon — focused on business decisions.
            </p>
          </div>
          <div className="bg-background rounded-2xl p-8 border border-foreground/5">
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                  </span>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clear investment, measurable return
          </h2>
          <p className="text-lg text-foreground/70">
            Two formats designed for different levels of depth and urgency.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 border border-foreground/5 hover:border-primary/30 transition">
            <p className="text-sm font-medium text-secondary mb-2">
              Starting point
            </p>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Executive Workshop
            </h3>
            <p className="text-foreground/60 mb-6">
              Intensive half-day session with your executive team
            </p>
            <div className="mb-6">
              <span className="text-sm text-foreground/50">From</span>
              <div className="text-4xl font-bold text-foreground">
                USD 4,500
              </div>
            </div>
            <ul className="space-y-3 mb-8 text-foreground/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">\u2713</span>
                Competitive exposure assessment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">\u2713</span>
                Use case prioritization
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">\u2713</span>
                Board-ready executive one-pager
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">\u2713</span>
                Post-workshop Q&A session
              </li>
            </ul>
            <a
              href="#contacto"
              className="block text-center bg-foreground/5 text-foreground font-semibold py-4 px-8 rounded-full hover:bg-foreground/10 transition"
            >
              Book a Consultation
            </a>
          </div>
          <div className="bg-primary rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-secondary text-foreground text-xs font-bold px-3 py-1 rounded-full">
              Recommended
            </div>
            <p className="text-sm font-medium text-white/70 mb-2">
              Maximum depth
            </p>
            <h3 className="text-2xl font-bold mb-2">AI Strategy Sprint</h3>
            <p className="text-white/70 mb-6">
              Full 2-week strategic sprint
            </p>
            <div className="mb-6">
              <span className="text-sm text-white/50">From</span>
              <div className="text-4xl font-bold">USD 18,000</div>
            </div>
            <ul className="space-y-3 mb-8 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-secondary">\u2713</span>
                Everything in the Executive Workshop
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">\u2713</span>
                Deep AI maturity assessment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">\u2713</span>
                90-day executive roadmap
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">\u2713</span>
                Full industry benchmark
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">\u2713</span>
                Investment estimate and ROI
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">\u2713</span>
                2 post-sprint follow-up sessions
              </li>
            </ul>
            <a
              href="#contacto"
              className="block text-center bg-white text-primary font-semibold py-4 px-8 rounded-full hover:bg-white/90 transition"
            >
              Talk to AI Boardroom
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ParaQuien() {
  const perfiles = [
    {
      role: "CEOs",
      message:
        "Gain a clear perspective on how AI will reshape your business model and what strategic decisions to make in the next 90 days.",
    },
    {
      role: "Chief Strategy Officers",
      message:
        "Get a concrete, prioritized roadmap for integrating AI into your corporate strategy — with defined metrics and clear next steps.",
    },
    {
      role: "Chief Digital Officers",
      message:
        "Align AI initiatives with the highest-impact use cases across your organization, backed by practical ROI analysis.",
    },
    {
      role: "Transformation Leaders",
      message:
        "Equip yourself with the frameworks, deliverables, and executive alignment needed to drive AI adoption at the leadership level.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for{" "}
            <span className="text-primary">leaders who decide</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Our services are designed for executives who need to make strategic
            AI decisions with confidence.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perfiles.map((p) => (
            <div
              key={p.role}
              className="bg-background rounded-2xl p-8 border border-foreground/5"
            >
              <h3 className="text-lg font-bold text-primary mb-3">{p.role}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {p.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PorQueAIBoardroom() {
  const razones = [
    {
      title: "Executive-focused approach",
      description:
        "Everything we do is designed for senior decision-makers. We speak the language of business strategy, not technical jargon.",
    },
    {
      title: "Decision-ready deliverables",
      description:
        "Every output is built to go straight to the boardroom. Clear priorities, defined metrics, and actionable recommendations — ready for executive sign-off.",
    },
    {
      title: "Fast strategic clarity",
      description:
        "We deliver a complete AI strategy in weeks, not months. Your leadership team gets the clarity it needs to move forward with confidence.",
    },
    {
      title: "Built for leadership teams",
      description:
        "Our process is designed to align your C-suite around AI priorities, investment decisions, and organizational readiness — together.",
    },
    {
      title: "Cross-industry perspective",
      description:
        "We bring insights from multiple industries and enterprise contexts, giving your team a broader view of what AI makes possible.",
    },
    {
      title: "Independent and objective",
      description:
        "We don\u2019t sell software or implementation services. Our only goal is to help your leadership team make the best strategic decisions.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why <span className="text-primary">AI Boardroom</span>?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {razones.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-8 border border-foreground/5"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">
                {r.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to define your{" "}
              <span className="text-primary">AI strategy?</span>
              <br />
              Talk to AI Boardroom.
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Fill out the form and we&apos;ll be in touch within 24 business
              hours to schedule a complimentary executive consultation.
            </p>
            <div className="space-y-4 text-foreground/60 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  \u2709
                </span>
                info@example.com
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  \u260E
                </span>
                +00 000 000 0000
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  \u25C9
                </span>
                United States
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold">AI Boardroom</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="#servicios" className="hover:text-white transition">
              Services
            </a>
            <a href="#proceso" className="hover:text-white transition">
              Process
            </a>
            <a href="#pricing" className="hover:text-white transition">
              Pricing
            </a>
            <a
              href="#contacto"
              className="text-secondary hover:text-secondary/80 transition font-medium"
            >
              Book a Consultation
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>info@example.com</span>
            <span>+00 000 000 0000</span>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 pt-6 text-center text-sm text-white/40">
          &copy; 2026 AI Boardroom. AI strategy and transformation for
          enterprise leaders.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemaOportunidad />
        <Servicios />
        <Industrias />
        <Proceso />
        <Entregables />
        <Pricing />
        <ParaQuien />
        <PorQueAIBoardroom />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
