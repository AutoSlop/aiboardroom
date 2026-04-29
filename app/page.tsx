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
            Servicios
          </a>
          <a href="#proceso" className="hover:text-primary transition">
            Proceso
          </a>
          <a href="#pricing" className="hover:text-primary transition">
            Pricing
          </a>
          <a
            href="#contacto"
            className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-primary/90 transition font-medium"
          >
            Solicitar workshop
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
            Consultoría estratégica de IA para banca y seguros
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            La IA va a redefinir banca y seguros.{" "}
            <span className="text-primary">
              Decide antes de quedar atrás.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-10 max-w-2xl">
            Workshops ejecutivos y sprints estratégicos para grandes empresas de
            New York que necesitan una hoja de ruta clara de IA por industria,
            con foco en decisiones de negocio y no en ruido tecnológico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition text-lg"
            >
              Solicitar workshop ejecutivo
            </a>
            <a
              href="#proceso"
              className="inline-flex items-center justify-center border-2 border-foreground/15 text-foreground font-semibold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition text-lg"
            >
              Ver cómo trabajamos
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
            El problema no es la tecnología.
            <br />
            <span className="text-primary">Es no tener una estrategia clara.</span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Los comités ejecutivos de banca y seguros enfrentan un dilema: la IA
            avanza más rápido que su capacidad de tomar decisiones informadas.
            Sin una hoja de ruta clara, el riesgo no es quedarse atrás — es
            invertir mal.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "⚠",
              title: "Riesgo competitivo",
              description:
                "Competidores ya están implementando IA en underwriting, detección de fraude y experiencia del cliente. Cada trimestre sin estrategia amplía la brecha.",
            },
            {
              icon: "◎",
              title: "Oportunidad concreta",
              description:
                "La IA permite reducir costos operativos entre 15-30%, mejorar la retención de clientes y acelerar procesos que hoy toman semanas.",
            },
            {
              icon: "→",
              title: "Decisiones prioritarias",
              description:
                "En los próximos 90 días, su comité ejecutivo debe definir qué casos de uso priorizar, qué capacidades construir y dónde no invertir.",
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
      title: "Workshop Ejecutivo de IA por Industria",
      description:
        "Sesión intensiva de medio día con su comité ejecutivo. Analizamos el panorama de IA específico para su sector (banca o seguros), identificamos oportunidades concretas y priorizamos iniciativas por impacto y viabilidad.",
      tags: ["Banca", "Seguros", "Medio día"],
    },
    {
      number: "02",
      title: "Diagnóstico de Exposición Competitiva",
      description:
        "Evaluación profunda de cómo la IA está transformando su segmento específico. Mapeamos qué están haciendo sus competidores, dónde están las vulnerabilidades y qué movimientos son urgentes.",
      tags: ["Análisis competitivo", "Benchmarking"],
    },
    {
      number: "03",
      title: "Roadmap Ejecutivo de 90 Días",
      description:
        "Plan de acción concreto con prioridades claras, responsables definidos, métricas de éxito y presupuesto estimado. Diseñado para ser presentado y aprobado por el board.",
      tags: ["Accionable", "Board-ready"],
    },
    {
      number: "04",
      title: "Benchmark Sectorial de Casos de Uso",
      description:
        "Análisis comparativo de los principales casos de uso de IA en banca y seguros a nivel global. Incluye ROI estimado, complejidad de implementación y relevancia para su organización.",
      tags: ["Casos de uso", "ROI"],
    },
    {
      number: "05",
      title: "One-Pager para Board y Comité Ejecutivo",
      description:
        "Documento ejecutivo de una página que sintetiza la estrategia de IA, las prioridades y el plan de acción. Diseñado para comunicar con claridad al board y facilitar la toma de decisiones.",
      tags: ["Comunicación ejecutiva", "Board"],
    },
  ];

  return (
    <section id="servicios" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Servicios diseñados para{" "}
            <span className="text-primary">decisiones ejecutivas</span>
          </h2>
          <p className="text-lg text-foreground/70">
            No vendemos tecnología. Ayudamos a comités ejecutivos a tomar
            decisiones informadas sobre IA con claridad y velocidad.
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
            Especialización en{" "}
            <span className="text-primary">banca y seguros</span>
          </h2>
          <p className="text-lg text-foreground/70">
            No somos generalistas. Nos enfocamos exclusivamente en las dos
            industrias donde la IA tendrá el mayor impacto en los próximos 3
            años.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-background rounded-2xl p-10 border border-foreground/5">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl mb-6">
              🏦
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Banca</h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Automatización de procesos de crédito y onboarding
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Detección de fraude con modelos predictivos
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Personalización de productos financieros
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Optimización de riesgo y compliance regulatorio
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Asistentes inteligentes para banca privada
              </li>
            </ul>
          </div>
          <div className="bg-background rounded-2xl p-10 border border-foreground/5">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl mb-6">
              🛡
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Seguros
            </h3>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Automatización de suscripción y underwriting
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Procesamiento inteligente de siniestros
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Modelos predictivos de retención de clientes
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Pricing dinámico basado en datos
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                Detección de fraude en reclamaciones
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
      title: "Diagnóstico",
      subtitle: "Semana 1",
      description:
        "Evaluamos su posición actual frente a la IA: madurez organizacional, capacidades existentes, exposición competitiva y oportunidades específicas de su sector.",
    },
    {
      step: "2",
      title: "Workshop Ejecutivo",
      subtitle: "Semana 1-2",
      description:
        "Sesión intensiva con su comité ejecutivo donde priorizamos casos de uso, evaluamos impacto vs. viabilidad, y alineamos la visión estratégica de IA.",
    },
    {
      step: "3",
      title: "Roadmap de 90 Días",
      subtitle: "Semana 2",
      description:
        "Entregamos un plan de acción concreto con iniciativas priorizadas, métricas de éxito, responsables y presupuesto estimado. Listo para presentar al board.",
    },
  ];

  return (
    <section id="proceso" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-lg text-foreground/70">
            Un proceso de 2 semanas diseñado para llevar a su comité ejecutivo
            de la incertidumbre a la acción.
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
    "Diagnóstico de madurez de IA de su organización",
    "Mapa de exposición competitiva por segmento",
    "Priorización de casos de uso por impacto y viabilidad",
    "Roadmap ejecutivo de 90 días con métricas y responsables",
    "Benchmark sectorial de casos de uso de IA",
    "One-pager ejecutivo para board y comité",
    "Estimación de inversión y ROI esperado",
    "Recomendaciones de capacidades y talento necesario",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Entregables claros para{" "}
              <span className="text-primary">su comité ejecutivo</span>
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Todo lo que necesita para presentar una estrategia de IA sólida
              ante el board. Sin jerga técnica, con foco en decisiones de
              negocio.
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
            Inversión clara, retorno medible
          </h2>
          <p className="text-lg text-foreground/70">
            Dos formatos diseñados para diferentes niveles de profundidad y
            urgencia.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-10 border border-foreground/5 hover:border-primary/30 transition">
            <p className="text-sm font-medium text-secondary mb-2">
              Punto de entrada
            </p>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Workshop Ejecutivo
            </h3>
            <p className="text-foreground/60 mb-6">
              Sesión intensiva de medio día con su comité ejecutivo
            </p>
            <div className="mb-6">
              <span className="text-sm text-foreground/50">Desde</span>
              <div className="text-4xl font-bold text-foreground">
                USD 4,500
              </div>
            </div>
            <ul className="space-y-3 mb-8 text-foreground/70 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Diagnóstico de exposición competitiva
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Priorización de casos de uso
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                One-pager ejecutivo para board
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                Sesión de Q&A post-workshop
              </li>
            </ul>
            <a
              href="#contacto"
              className="block text-center bg-foreground/5 text-foreground font-semibold py-4 px-8 rounded-full hover:bg-foreground/10 transition"
            >
              Solicitar información
            </a>
          </div>
          <div className="bg-primary rounded-2xl p-10 text-white relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-secondary text-foreground text-xs font-bold px-3 py-1 rounded-full">
              Recomendado
            </div>
            <p className="text-sm font-medium text-white/70 mb-2">
              Máxima profundidad
            </p>
            <h3 className="text-2xl font-bold mb-2">AI Strategy Sprint</h3>
            <p className="text-white/70 mb-6">
              Sprint estratégico de 2 semanas completas
            </p>
            <div className="mb-6">
              <span className="text-sm text-white/50">Desde</span>
              <div className="text-4xl font-bold">USD 18,000</div>
            </div>
            <ul className="space-y-3 mb-8 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-secondary">✓</span>
                Todo lo del Workshop Ejecutivo
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">✓</span>
                Diagnóstico profundo de madurez IA
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">✓</span>
                Roadmap ejecutivo de 90 días
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">✓</span>
                Benchmark sectorial completo
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">✓</span>
                Estimación de inversión y ROI
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">✓</span>
                2 sesiones de seguimiento post-sprint
              </li>
            </ul>
            <a
              href="#contacto"
              className="block text-center bg-white text-primary font-semibold py-4 px-8 rounded-full hover:bg-white/90 transition"
            >
              Solicitar sprint estratégico
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
        "Necesita una visión clara de cómo la IA impacta su negocio y qué decisiones tomar en los próximos 90 días para no perder ventaja competitiva.",
    },
    {
      role: "Chief Strategy Officers",
      message:
        "Requiere un roadmap concreto para integrar la IA en la estrategia corporativa, con métricas de éxito y prioridades claras.",
    },
    {
      role: "Chief Digital Officers",
      message:
        "Busca alinear las iniciativas de transformación digital con casos de uso de IA de alto impacto y ROI demostrable.",
    },
    {
      role: "Líderes de Transformación",
      message:
        "Necesita herramientas y argumentos para impulsar la adopción de IA a nivel ejecutivo, con entregables listos para el board.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Diseñado para{" "}
            <span className="text-primary">líderes que deciden</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Nuestros servicios están pensados para ejecutivos que necesitan tomar
            decisiones estratégicas sobre IA con confianza.
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
      title: "Especialistas en banca y seguros",
      description:
        "No somos una consultora generalista. Entendemos las regulaciones, los modelos de negocio y los desafíos específicos de su industria.",
    },
    {
      title: "Foco en decisiones, no en tecnología",
      description:
        "No le vamos a hablar de algoritmos. Le vamos a ayudar a decidir dónde invertir, qué priorizar y cómo medir el éxito.",
    },
    {
      title: "Entregables listos para el board",
      description:
        "Todo lo que producimos está diseñado para ser presentado directamente al comité ejecutivo o al board. Sin traducciones necesarias.",
    },
    {
      title: "Resultados en 2 semanas",
      description:
        "No hacemos proyectos de 6 meses. En 2 semanas tiene un roadmap accionable con prioridades claras y métricas definidas.",
    },
    {
      title: "Experiencia en New York",
      description:
        "Trabajamos con grandes empresas del sector financiero y de seguros en New York. Conocemos el mercado y sus dinámicas.",
    },
    {
      title: "Sin conflicto de intereses",
      description:
        "No vendemos software ni implementamos tecnología. Nuestra única misión es ayudarle a tomar las mejores decisiones estratégicas.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Por qué <span className="text-primary">AI Boardroom</span>?
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
              Su comité ejecutivo necesita una{" "}
              <span className="text-primary">estrategia de IA clara.</span>
              <br />
              Empecemos.
            </h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Complete el formulario y le contactaremos en menos de 24 horas
              hábiles para coordinar una llamada inicial sin compromiso.
            </p>
            <div className="space-y-4 text-foreground/60 text-sm">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  ✉
                </span>
                info@example.com
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  ☎
                </span>
                +00 000 000 0000
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  ◉
                </span>
                123 Main Street, New York, NY
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
              Servicios
            </a>
            <a href="#proceso" className="hover:text-white transition">
              Proceso
            </a>
            <a href="#pricing" className="hover:text-white transition">
              Pricing
            </a>
            <a
              href="#contacto"
              className="text-secondary hover:text-secondary/80 transition font-medium"
            >
              Solicitar workshop
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span>info@example.com</span>
            <span>+00 000 000 0000</span>
            <span>123 Main Street, New York, NY</span>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 pt-6 text-center text-sm text-white/40">
          © 2026 AI Boardroom. Consultoría estratégica de IA para banca y
          seguros.
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
