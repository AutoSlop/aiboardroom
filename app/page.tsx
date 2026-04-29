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
            Request a workshop
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
            Strategic AI consulting for enterprise leaders
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            AI Strategy for{" "}
            <span className="text-primary">
              Enterprise Leaders.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10 max-w-2xl">
            We help executive teams understand where AI creates risk, unlocks
            growth, and demands action — with a clear roadmap for the next 90
            days, focused on business decisions, not technical noise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition text-lg"
            >
              Request executive workshop
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
            The problem isn&apos;t technology.
            <br />
            <span className="text-primary">It&apos;s not having a clear strategy.</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Executive teams face a critical dilemma: AI is advancing faster than
            their ability to make informed decisions. Without a clear roadmap,
            the risk isn&apos;t falling behind — it&apos;s investing poorly.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "\u26A0",
              title: "Competitive risk",
              description:
                "Competitors are already deploying AI across operations, customer experience, and decision-making. Every quarter without a strategy widens the gap.",
            },
            {
              icon: "\u25CE",
              title: "Concrete opportunity",
              description:
                "AI can reduce operating costs by 15-30%, improve customer retention, and accelerate processes that currently take weeks.",
            },
            {
              icon: "\u2192",
              title: "Priority decisions",
              description:
                "In the next 90 days, your executive team must define which use cases to prioritize, which capabilities to build, and where not to invest.",
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
        "An intensive half-day session with your executive team. We analyze the AI landscape relevant to your industry, identify concrete opportunities, and prioritize initiatives by impact and feasibility.",
      tags: ["Cross-industry", "Half day", "Executive team"],
    },
    {
      number: "02",
      title: "Competitive AI Exposure Assessment",
      description:
        "A deep evaluation of how AI is transforming your specific market segment. We map what competitors are doing, where vulnerabilities lie, and which moves are urgent.",
      tags: ["Competitive analysis", "Benchmarking"],
    },
    {
      number: "03",
      title: "90-Day Executive Roadmap",
      description:
        "A concrete action plan with clear priorities, defined owners, success metrics, and estimated budget. Designed to be presented and approved by the board.",
      tags: ["Actionable", "Board-ready"],
    },
    {
      number: "04",
      title: "Use Case Prioritization",
      description:
        "Comparative analysis of the leading AI use cases across your industry. Includes estimated ROI, implementation complexity, and relevance to your organization.",
      tags: ["Use cases", "ROI"],
    },
    {
      number: "05",
      title: "Board-Level AI Briefing",
      description:
        "A one-page executive document that synthesizes the AI strategy, priorities, and action plan. Designed to communicate clearly to the board and facilitate decision-making.",
      tags: ["Executive communication", "Board"],
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
            AI impact across{" "}
            <span className="text-primary">every enterprise function</span>
          </h2>
          <p className="text-lg text-foreground/70">
            AI is reshaping how large organizations operate, compete, and grow.
            We help you identify and prioritize the highest-impact opportunities
            across your business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background rounded-2xl p-10 border border-foreground/5">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl mb-6">
              \u2699
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Operations & Efficiency</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">\u2022</span>
                Process automation and intelligent workflows
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">\u2022</span>
                Predictive maintenance and supply chain optimization
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">\u2022</span>
                Document processing and knowledge management
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">\u2022</span>
                Quality control and anomaly detection
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">\u2022</span>
                Workforce productivity and resource allocation
              </li>
            </ul>
          </div>
          <div className="bg-background rounded-2xl p-10 border border-foreground/5">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl mb-6">
              \u2191
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Growth & Competitive Edge
            </h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">\u2022</span>
                Personalized customer experience at scale
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">\u2022</span>
                Revenue optimization and dynamic pricing
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">\u2022</span>
                Predictive analytics for customer retention
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">\u2022</span>
                Market intelligence and competitive monitoring
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">\u2022</span>
                New product development and innovation pipelines
              </li>
            </ul>
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
        "We evaluate your current AI position: organizational maturity, existing capabilities, competitive exposure, and opportunities specific to your industry.",
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
              Request information
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
              Request strategic sprint
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
        "You need a clear view of how AI impacts your business and what decisions to make in the next 90 days to maintain your competitive edge.",
    },
    {
      role: "Chief Strategy Officers",
      message:
        "You need a concrete roadmap to integrate AI into corporate strategy, with success metrics and clear priorities.",
    },
    {
      role: "Chief Digital Officers",
      message:
        "You need to align digital transformation initiatives with high-impact AI use cases and demonstrable ROI.",
    },
    {
      role: "Transformation Leaders",
      message:
        "You need the tools and arguments to drive AI adoption at the executive level, with board-ready deliverables.",
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
      title: "Enterprise AI specialists",
      description:
        "We are not a generalist consultancy. We understand the challenges, operating models, and competitive dynamics of large organizations.",
    },
    {
      title: "Focused on decisions, not technology",
      description:
        "We won\u2019t talk about algorithms. We\u2019ll help you decide where to invest, what to prioritize, and how to measure success.",
    },
    {
      title: "Board-ready deliverables",
      description:
        "Everything we produce is designed to be presented directly to the executive committee or the board. No translation needed.",
    },
    {
      title: "Results in 2 weeks",
      description:
        "We don\u2019t run 6-month projects. In 2 weeks you have an actionable roadmap with clear priorities and defined metrics.",
    },
    {
      title: "Senior enterprise experience",
      description:
        "We work with large enterprises across industries. We understand the complexities of driving AI strategy at scale.",
    },
    {
      title: "No conflict of interest",
      description:
        "We don\u2019t sell software or implement technology. Our only mission is to help you make the best strategic decisions.",
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
              Your executive team needs a{" "}
              <span className="text-primary">clear AI strategy.</span>
              <br />
              Let&apos;s get started.
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Fill out the form and we&apos;ll contact you within 24 business
              hours to schedule a no-commitment introductory call.
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
              Request a workshop
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
          &copy; 2026 AI Boardroom. Strategic AI consulting for enterprise
          leaders.
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
