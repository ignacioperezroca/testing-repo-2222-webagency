import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MessageCircle,
  MoveRight,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/5491158077847";
const EMAIL = "ignacio.perezroca@gmail.com";

const navItems = [
  { label: "Servicios", href: "#services" },
  { label: "Casos", href: "#cases" },
  { label: "Proceso", href: "#process" },
  { label: "Precios", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const trustLogos = [
  "Coca-Cola Argentina",
  "Pringles",
  "La Serenisima",
  "Mercado Libre",
  "Uala",
  "Mostaza",
];

const differentiators = [
  {
    icon: Clock3,
    title: "Entrega veloz, sin drama",
    description:
      "Lanzamos sitios en 3 a 7 dias con un proceso claro, foco comercial y decisiones rapidas.",
  },
  {
    icon: TrendingUp,
    title: "Pensado para convertir",
    description:
      "Cada bloque existe para mover a la accion: captar leads, abrir conversaciones y cerrar oportunidades.",
  },
  {
    icon: Sparkles,
    title: "Criterio de producto",
    description:
      "No hacemos solo una pagina linda. Diseñamos experiencias claras, estrategicas y listas para crecer.",
  },
  {
    icon: ShieldCheck,
    title: "Implementacion completa",
    description:
      "Nos ocupamos de estructura, contenido, deploy, ajustes finales y contacto directo con tu equipo.",
  },
];

const services = [
  {
    title: "Landing pages de conversion",
    description:
      "Para campañas, lanzamientos y negocios que necesitan una pagina clara, rapida y orientada a resultados.",
    points: ["Hero de alto impacto", "Secciones de confianza", "WhatsApp y formularios", "SEO tecnico basico"],
  },
  {
    title: "Sitios corporativos livianos",
    description:
      "Webs institucionales con estructura ordenada, lenguaje comercial y una experiencia premium en mobile y desktop.",
    points: ["Hasta 5 paginas", "Arquitectura y copy", "Diseño responsive", "Deploy listo para operar"],
  },
  {
    title: "Micrositios y experiencias de campaña",
    description:
      "Experiencias mas expresivas para marcas que necesitan contar mejor una propuesta o activar una audiencia.",
    points: ["Narrativa visual", "Animacion premium", "Integraciones", "Optimizacion para captacion"],
  },
];

const pricing = [
  {
    name: "Starter",
    price: "USD 100",
    delivery: "3 dias",
    featured: false,
    cta: "Quiero Starter",
    points: ["1 landing page", "Diseño responsive", "Diseño base", "Integracion WhatsApp"],
  },
  {
    name: "Growth",
    price: "USD 300",
    delivery: "5 dias",
    featured: true,
    cta: "Quiero Growth",
    points: [
      "Hasta 3 paginas",
      "Diseño personalizado",
      "Copywriting incluido",
      "Formularios de captacion",
      "SEO basico",
    ],
  },
  {
    name: "Pro",
    price: "USD 500",
    delivery: "3 a 5 dias",
    featured: false,
    cta: "Quiero Pro",
    points: [
      "Hasta 5 paginas",
      "Diseño premium",
      "Animaciones avanzadas",
      "Optimizacion de conversion",
      "Integracion de analytics",
      "Entrega prioritaria",
    ],
  },
];

const cases = [
  {
    sector: "Bebidas",
    brand: "Coca-Cola Argentina",
    result: "+42% conversion en campaña digital",
    description:
      "Landing para campaña estacional con integracion social y una captacion de leads mas clara.",
    href: "https://www.coca-cola.com.ar",
  },
  {
    sector: "Snacks",
    brand: "Pringles",
    result: "+28% engagement en sitio",
    description:
      "Micrositio para lanzamiento con dinamica interactiva y registro listo para performance marketing.",
    href: "https://www.pringles.com",
  },
  {
    sector: "Lacteos",
    brand: "La Serenisima",
    result: "+35% trafico organico",
    description:
      "Rediseño mobile-first con mejor estructura de contenidos y una base SEO mucho mas solida.",
    href: "https://www.laserenisima.com.ar",
  },
  {
    sector: "Retail",
    brand: "Mercado Libre",
    result: "+50% leads desde landing",
    description:
      "Pagina de captacion para sellers con CTA directos y un funnel integrado a WhatsApp.",
    href: "https://www.mercadolibre.com.ar",
  },
  {
    sector: "Fintech",
    brand: "Uala",
    result: "+60% registros en campaña",
    description:
      "Experiencia de referidos optimizada para conversion con seguimiento y mejora continua.",
    href: "https://www.uala.com.ar",
  },
  {
    sector: "Gastronomia",
    brand: "Mostaza",
    result: "+30% pedidos online",
    description:
      "Sitio promocional con foco comercial, integracion operativa y CTA orientados a pedido inmediato.",
    href: "https://www.mostaza.com.ar",
  },
];

const steps = [
  {
    step: "01",
    title: "Brief rapido",
    description:
      "Nos compartis negocio, objetivo, referencias y oferta. En minutos entendemos que hay que construir.",
  },
  {
    step: "02",
    title: "Direccion y estructura",
    description:
      "Bajamos la narrativa, ordenamos la pagina y definimos el sistema visual antes de producir.",
  },
  {
    step: "03",
    title: "Diseño, build e iteracion",
    description:
      "Diseñamos y desarrollamos con feedback corto, prioridades claras y avances visibles desde el primer dia.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Publicamos, conectamos los puntos finales y dejamos el sitio listo para vender desde el primer trafico.",
  },
];

const faqs = [
  {
    question: "¿Cuanto tarda un proyecto?",
    answer:
      "La mayoria de los proyectos entra en una ventana de 3 a 7 dias, segun alcance, cantidad de paginas y velocidad de aprobacion.",
  },
  {
    question: "¿Ustedes escriben el contenido?",
    answer:
      "Si. Podemos tomar tu material actual y reescribirlo con una estructura mucho mas clara, mas comercial y mas facil de escanear.",
  },
  {
    question: "¿Se encargan del deploy?",
    answer:
      "Si. Dejamos el sitio publicado y funcionando, con los ajustes finales necesarios para salir a produccion.",
  },
  {
    question: "¿Trabajan solo landing pages?",
    answer:
      "No. Hacemos landing pages, sitios corporativos cortos, micrositios de campaña y experiencias enfocadas en conversion.",
  },
  {
    question: "¿Puedo empezar por WhatsApp?",
    answer:
      "Si. De hecho es la forma mas rapida. Nos escribis, entendemos el alcance y te recomendamos el mejor camino.",
  },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function createWhatsAppLink(message) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

function SectionReveal({ children, className, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Stagger({ children, className, stagger = 0.08 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24, scale: 0.985, filter: "blur(10px)" },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function FloatingOrb({ className, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className} />;
  }

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -18, 0],
        x: [0, 10, 0],
        scale: [1, 1.04, 1],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

function FaqItem({ item, open, onToggle }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      whileTap={reduceMotion ? undefined : { scale: 0.995 }}
      className="group w-full rounded-[28px] border border-white/60 bg-white/80 p-6 text-left shadow-[0_20px_80px_rgba(15,23,42,0.06)] backdrop-blur-md transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_28px_110px_rgba(15,23,42,0.09)] md:p-7"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="max-w-3xl">
          <h3 className="text-base font-semibold text-slate-950 md:text-lg">{item.question}</h3>
          <motion.div
            initial={false}
            animate={
              open
                ? { height: "auto", opacity: 1, marginTop: 12 }
                : { height: 0, opacity: 0, marginTop: 0 }
            }
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pr-2 text-sm leading-7 text-slate-600 md:text-[15px]">{item.answer}</p>
          </motion.div>
        </div>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50 text-slate-500 transition-colors group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-700"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </div>
    </motion.button>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const reduceMotion = useReducedMotion();
  const marquee = useMemo(() => [...trustLogos, ...trustLogos], []);

  return (
    <div className="min-h-screen bg-[#f5f7f3] text-slate-950 antialiased selection:bg-emerald-200 selection:text-slate-950">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(125,211,252,0.1),transparent_24%),linear-gradient(180deg,#f8faf7_0%,#f4f7f1_48%,#f8faf7_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <FloatingOrb className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-emerald-300/14 blur-3xl" />
        <FloatingOrb className="absolute right-[7%] top-[18%] h-80 w-80 rounded-full bg-cyan-300/12 blur-3xl" delay={1.2} />
        <FloatingOrb className="absolute bottom-[12%] left-[18%] h-64 w-64 rounded-full bg-amber-200/16 blur-3xl" delay={2.2} />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/55">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="inline-flex items-center text-[15px] font-semibold tracking-[-0.03em] text-slate-950">
            bold<span className="text-emerald-600">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-950"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-slate-950 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <motion.a
            whileHover={reduceMotion ? undefined : { y: -1 }}
            whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            href={createWhatsAppLink("Hola! Me interesa saber mas sobre sus servicios")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500 bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(16,185,129,0.22)] transition duration-300 hover:border-emerald-400 hover:bg-emerald-400"
          >
            Contactanos
            <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </motion.a>
        </div>
      </header>

      <main>
        <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="relative">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-md"
              >
                Agencia Digital & Consultora de Producto
              </motion.div>

              <motion.h1
                initial={reduceMotion ? false : { opacity: 0, y: 26, filter: "blur(8px)" }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.95, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 max-w-4xl text-balance text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-7xl"
              >
                Sitios web que hacen ver mejor tu marca y convierten visitantes en clientes.
              </motion.h1>

              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(8px)" }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.85, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-600 sm:text-xl"
              >
                Diseñamos y lanzamos landings, sitios corporativos y experiencias de campaña con una
                mezcla rara de velocidad, criterio visual y foco comercial.
              </motion.p>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
              >
                <motion.a
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                  href="#pricing"
                  className="group inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] transition duration-300 hover:bg-slate-900"
                >
                  Ver planes
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                  href={createWhatsAppLink("Hola! Me interesa saber mas sobre sus servicios")}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-md transition duration-300 hover:border-emerald-200 hover:bg-white"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-600 transition-transform duration-300 group-hover:scale-110" />
                  Escribinos por WhatsApp
                </motion.a>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  13+ años resolviendo problemas reales con tecnologia
                </span>
                <span className="inline-flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-slate-400" />
                  De brief a launch en dias
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(135deg,rgba(16,185,129,0.24),rgba(255,255,255,0.12),rgba(2,132,199,0.16))] blur-2xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0.8))] p-4 shadow-[0_35px_120px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-5">
                <div className="rounded-[26px] border border-slate-200/80 bg-slate-950 p-5 text-white sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.18em] text-white/50">Conversion Snapshot</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/70">
                      Bold Makers
                    </span>
                  </div>

                  <div className="mt-7 grid gap-4">
                    <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-sm text-white/55">Entrega tipica</p>
                          <p className="mt-2 text-3xl font-semibold tracking-[-0.04em]">3 a 7 dias</p>
                        </div>
                        <div className="rounded-2xl bg-emerald-400/10 px-3 py-2 text-right">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300/80">Focus</p>
                          <p className="mt-1 text-sm font-medium text-emerald-200">Rapidez + criterio</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                        <p className="text-sm text-white/55">Objetivo</p>
                        <p className="mt-2 text-lg font-medium leading-7 text-white/90">
                          Mas conversaciones, mas leads y una presencia que transmite nivel.
                        </p>
                      </div>
                      <div className="rounded-[22px] border border-white/10 bg-white/[0.03] p-5">
                        <p className="text-sm text-white/55">Canales</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {["WhatsApp", "Formularios", "Analytics", "SEO"].map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/80"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(135deg,rgba(16,185,129,0.22),rgba(255,255,255,0.03))] p-5">
                      <p className="text-sm text-white/60">Nuestra forma de trabajar</p>
                      <p className="mt-2 max-w-md text-base leading-7 text-white/90">
                        Estrategia clara, narrativa precisa, diseño premium y una implementacion rapida que no pierde el foco comercial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto mt-14 max-w-7xl overflow-hidden rounded-full border border-white/70 bg-white/70 px-4 py-3 shadow-[0_12px_60px_rgba(15,23,42,0.04)] backdrop-blur-xl">
            <motion.div
              animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
              transition={reduceMotion ? undefined : { duration: 24, ease: "linear", repeat: Infinity }}
              className="flex min-w-max items-center gap-10 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
            >
              {marquee.map((item, index) => (
                <span key={`${item}-${index}`} className="inline-flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Por que elegirnos
            </span>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              La mezcla justa entre precision visual, velocidad de entrega y foco en negocio.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              No vendemos complejidad. Vendemos claridad, buena ejecucion y un sitio que haga mas facil convertir interes en oportunidad.
            </p>
          </SectionReveal>

          <Stagger className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
            {differentiators.map((item) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={reduceMotion ? undefined : { y: -4 }}
                    className="group h-full rounded-[30px] border border-white/70 bg-white/80 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.05)] backdrop-blur-md transition duration-500 hover:border-emerald-200/80 hover:shadow-[0_30px_110px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(255,255,255,0.8))] text-emerald-700 shadow-inner">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </section>

        <section id="services" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionReveal className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                Servicios
              </span>
              <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                Diseñamos el tipo de sitio que tu negocio necesita hoy.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Desde una landing directa hasta una experiencia mas editorial, el objetivo no cambia:
                que la pagina se vea mejor, se entienda rapido y convierta con mas naturalidad.
              </p>
            </SectionReveal>

            <Stagger className="grid gap-5">
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <motion.div
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    className="group rounded-[30px] border border-white/70 bg-white/80 p-7 shadow-[0_18px_80px_rgba(15,23,42,0.05)] backdrop-blur-md transition duration-500 hover:border-slate-200 hover:shadow-[0_30px_110px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="max-w-2xl">
                        <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-700">{service.title}</p>
                        <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                          {service.description}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-500">
                        <Sparkles className="h-4 w-4 text-emerald-600" />
                        Premium execution
                      </div>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm font-medium text-slate-700"
                        >
                          <Check className="h-4 w-4 text-emerald-600" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section id="cases" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Casos de exito
            </span>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Marcas grandes, briefs distintos, un mismo principio: claridad que convierte.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Estos ejemplos muestran el tipo de impacto que buscamos cuando trabajamos con campañas, lanzamientos y captacion.
            </p>
          </SectionReveal>

          <Stagger className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cases.map((item) => (
              <StaggerItem key={item.brand}>
                <motion.a
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-[30px] border border-white/70 bg-white/80 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.05)] backdrop-blur-md transition duration-500 hover:border-emerald-200 hover:shadow-[0_30px_110px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.sector} · {item.brand}
                    </p>
                    <MoveRight className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-emerald-600" />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {item.result}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </motion.a>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section id="process" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionReveal className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                Proceso
              </span>
              <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
                De una idea dispersa a una presencia online mucho mas filosa.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Trabajamos con un ritmo corto, iteraciones inteligentes y una narrativa que se ordena desde el primer intercambio.
              </p>
            </SectionReveal>

            <Stagger className="grid gap-5">
              {steps.map((item, index) => (
                <StaggerItem key={item.step}>
                  <motion.div
                    whileHover={reduceMotion ? undefined : { y: -3 }}
                    className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white/80 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.05)] backdrop-blur-md transition duration-500 hover:border-emerald-200 hover:shadow-[0_30px_110px_rgba(15,23,42,0.08)] md:p-7"
                  >
                    <div className="absolute right-6 top-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
                      {item.step}
                    </div>
                    <div className="flex gap-5">
                      <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(255,255,255,0.85))] text-sm font-semibold text-emerald-700 shadow-inner">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <section id="pricing" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Precios
            </span>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Tres formas simples de empezar, sin vueltas ni costos escondidos.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Elegis el alcance, ajustamos detalles y salimos a producir. Pagas una vez y el sitio es tuyo.
            </p>
          </SectionReveal>

          <Stagger className="mx-auto mt-14 grid max-w-7xl gap-5 lg:grid-cols-3">
            {pricing.map((plan) => (
              <StaggerItem key={plan.name}>
                <motion.div
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  className={cn(
                    "relative flex h-full flex-col rounded-[32px] border p-7 shadow-[0_18px_80px_rgba(15,23,42,0.05)] backdrop-blur-md transition duration-500 md:p-8",
                    plan.featured
                      ? "border-emerald-300 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(236,253,245,0.92))] shadow-[0_30px_110px_rgba(16,185,129,0.15)]"
                      : "border-white/70 bg-white/80 hover:border-emerald-200 hover:shadow-[0_30px_110px_rgba(15,23,42,0.08)]"
                  )}
                >
                  {plan.featured ? (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(16,185,129,0.28)]">
                      Mas popular
                    </div>
                  ) : null}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{plan.name}</p>
                      <div className="mt-4 flex items-end gap-2">
                        <span className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">{plan.price}</span>
                      </div>
                      <p className="mt-2 text-sm text-slate-500">Entrega: {plan.delivery}</p>
                    </div>
                    <div className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-medium text-slate-500">
                      Unico pago
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {plan.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a
                    whileHover={reduceMotion ? undefined : { y: -1 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                    href={createWhatsAppLink(`Hola! Me interesa el plan ${plan.name}`)}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition duration-300",
                      plan.featured
                        ? "bg-slate-950 text-white shadow-[0_20px_50px_rgba(15,23,42,0.16)] hover:bg-slate-900"
                        : "border border-slate-200 bg-white text-slate-950 hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.a>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section id="faq" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionReveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              FAQ
            </span>
            <h2 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-5xl">
              Preguntas frecuentes antes de empezar.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Respuestas cortas para que entiendas alcance, tiempos y forma de trabajo sin perder tiempo.
            </p>
          </SectionReveal>

          <div className="mx-auto mt-14 grid max-w-4xl gap-4">
            {faqs.map((item, index) => (
              <SectionReveal key={item.question} delay={index * 0.03}>
                <FaqItem item={item} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)} />
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28">
          <SectionReveal className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[36px] border border-slate-900/10 bg-slate-950 px-6 py-10 text-white shadow-[0_35px_120px_rgba(15,23,42,0.2)] sm:px-8 lg:px-12 lg:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.24),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.18),transparent_22%)]" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Contacto</p>
                  <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                    Tu proxima web puede verse mucho mejor y empezar a trabajar a favor del negocio.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                    Si hoy tu sitio no transmite valor, no ordena la propuesta o no genera conversaciones, probablemente ya te este costando oportunidades.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <motion.a
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                    href={createWhatsAppLink("Hola! Quiero arrancar con mi sitio web")}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_50px_rgba(16,185,129,0.24)] transition duration-300 hover:bg-emerald-400"
                  >
                    <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    Escribinos por WhatsApp
                  </motion.a>

                  <motion.a
                    whileHover={reduceMotion ? undefined : { y: -2 }}
                    whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent("Consulta por sitio web Bold")}`}
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
                  >
                    <Mail className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    {EMAIL}
                  </motion.a>
                </div>
              </div>
            </div>
          </SectionReveal>
        </section>
      </main>

      <footer className="border-t border-white/40 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 bold. Todos los derechos reservados.</p>
          <a href={`mailto:${EMAIL}`} className="transition hover:text-slate-950">
            {EMAIL}
          </a>
        </div>
      </footer>
    </div>
  );
}
