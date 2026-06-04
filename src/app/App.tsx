import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  MessageCircle,
  Instagram,
  Mail,
  Check,
  Star,
  Award,
  ClipboardList,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Menu,
  X,
  Phone,
  Building2,
  ChevronDown,
  Stethoscope,
  TrendingDown,
  Dumbbell,
  Activity,
  Heart,
  HeartPulse,
  Calendar,
  User,
} from 'lucide-react';
import { Button } from './components/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/Card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { logo, fotoHero, fotoVermelho, fotoBranco } from '../lib/images';

const WHATSAPP = '5543999136245';
const EMAIL = 'lucianadominguesoliveira@gmail.com';
const INSTAGRAM = 'https://instagram.com/nutrilucianadomingues';
const WHATSAPP_MSG =
  'Olá! Gostaria de agendar uma consulta nutricional com a nutricionista Luciana Domingues.';

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Atendimento', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const SERVICOS_CLINICOS = [
  {
    icon: TrendingDown,
    title: 'Emagrecimento',
    description:
      'Estratégias nutricionais para perda de peso saudável, sustentável e alinhada à sua rotina.',
  },
  {
    icon: Activity,
    title: 'Obesidade',
    description:
      'Acompanhamento especializado com foco em mudança de hábitos, saúde metabólica e qualidade de vida.',
  },
  {
    icon: Dumbbell,
    title: 'Nutrição esportiva',
    description:
      'Plano alimentar para performance, ganho de massa, definição e recuperação nos treinos.',
  },
  {
    icon: HeartPulse,
    title: 'Diabetes',
    description:
      'Orientação para controle glicêmico, escolhas alimentares seguras e prevenção de complicações.',
  },
  {
    icon: Heart,
    title: 'Doenças crônicas',
    description:
      'Suporte nutricional em hipertensão, dislipidemias e outras condições que exigem cuidado contínuo.',
  },
];

const AREAS_SOBRE = [
  'Atendimento clínico em consultório',
  'Emagrecimento saudável',
  'Obesidade',
  'Nutrição esportiva',
  'Diabetes',
  'Doenças crônicas',
];

const SERVICOS_EMPRESAS = [
  {
    icon: GraduationCap,
    title: 'Treinamento de Boas Práticas de Manipulação de Alimentos',
    items: [
      'Capacitação para manipuladores de alimentos',
      'Higiene pessoal e contaminação cruzada',
      'Controle de temperatura e armazenamento',
      'Certificado de participação',
    ],
  },
  {
    icon: Building2,
    title: 'Palestras para Empresas e Instituições',
    items: [
      'Boas Práticas de Manipulação',
      'Segurança dos Alimentos e prevenção de DTA',
      'Alimentação Saudável no Ambiente de Trabalho',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Elaboração de POPs',
    items: [
      'Higienização de instalações',
      'Controle da potabilidade da água',
      'Controle integrado de pragas e manejo de resíduos',
    ],
  },
  {
    icon: BookOpen,
    title: 'Manual de Boas Práticas',
    items: [
      'Fluxograma de produção',
      'Procedimentos operacionais',
      'Registros exigidos pela Vigilância Sanitária',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Consultoria em Segurança dos Alimentos',
    items: [
      'Visitas técnicas e adequação sanitária',
      'Preparação para fiscalizações',
      'Correção de não conformidades',
    ],
  },
];

const DIFERENCIAIS = [
  'Atendimento personalizado e humanizado',
  'Plano alimentar 100% individualizado',
  'Acompanhamento contínuo entre consultas',
  'Consultas presenciais e online',
  'Abordagem baseada em evidências científicas',
];

const DEPOIMENTOS = [
  'Excelente profissional! Muito atenciosa e o plano alimentar é super acessível e personalizado. Recomendo demais!',
  'Ótima profissional, estuda muito cada caso, atenciosa, super recomendo!',
  'Foi uma honra conhecer essa profissional. Seu planejamento e suas dicas são maravilhosas. Está me ajudando muito, já estou vestindo roupas que fazia meses que não me serviam. O carinho e a atenção no dia da consulta e no suporte nos demais dias é 100%.',
  'Ótima nutricionista, muito atenciosa. Segui toda sua orientação e emagreci 15 kg em 4 meses só com adequação alimentar. Melhorou muito minha saúde.',
  'Excelente profissional! Muito prestativa e atenciosa! Super indico!',
  'Ótima profissional! Super paciente!',
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function openWhatsApp(message = WHATSAPP_MSG) {
  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
    '_blank'
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ nome: '', telefone: '', mensagem: '' });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const texto = [
      'Olá! Gostaria de agendar uma consulta nutricional.',
      form.nome && `Nome: ${form.nome}`,
      form.telefone && `Telefone: ${form.telefone}`,
      form.mensagem && `Mensagem: ${form.mensagem}`,
    ]
      .filter(Boolean)
      .join('\n');
    openWhatsApp(texto);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={logo} alt="Luciana Domingues" className="h-10 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" onClick={() => openWhatsApp()}>
              <Calendar className="w-4 h-4" />
              Agendar consulta
            </Button>
          </nav>

          <button
            type="button"
            className="lg:hidden text-primary p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="lg:hidden bg-brand-dark border-t border-primary/20 px-4 py-4 flex flex-col gap-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/90 py-2 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button onClick={() => openWhatsApp()} className="mt-2">
              <Calendar className="w-4 h-4" />
              Agendar consulta
            </Button>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="section-dark relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8 order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm">
                <Stethoscope className="w-4 h-4" />
                Consultas nutricionais em consultório
              </div>

              <div className="space-y-4">
                <p className="text-primary font-semibold tracking-wide text-sm uppercase">
                  Nutricionista · CRN 17564
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-white">
                  Luciana Domingues de Oliveira
                </h1>
                <p className="text-xl md:text-2xl text-primary/90 font-medium leading-snug">
                  Especialista em obesidade, emagrecimento e nutrição esportiva
                </p>
                <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                  Atendimento clínico personalizado para transformar sua saúde com
                  estratégias nutricionais seguras, práticas e focadas nos seus objetivos.
                </p>
              </div>

              <ul className="space-y-2 text-white/80">
                {['Atendimento personalizado', 'Consultório presencial', 'Acompanhamento contínuo'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => openWhatsApp()} className="group shadow-lg">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Agendar consulta no WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-brand-dark"
                  onClick={() =>
                    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Ver áreas de atendimento
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-primary">CRN</div>
                  <div className="text-sm text-white/60">17564</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-white/60">Personalizado</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Clínico</div>
                  <div className="text-sm text-white/60">Consultório</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-2 ring-primary/30">
                <img
                  src={fotoHero}
                  alt="Luciana Domingues de Oliveira — Nutricionista clínica"
                  className="hero-main-image w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-brand-dark-card border border-primary/30 p-5 rounded-2xl shadow-xl max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2.5 rounded-full">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Atendimento clínico</div>
                    <div className="text-xs text-white/60">CRN 17564</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <a
          href="#servicos"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce hidden md:block"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </section>

      {/* Serviços clínicos — logo após o hero */}
      <section id="servicos" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Atendimento clínico
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Áreas de atuação em consultório
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Consultas nutricionais com plano individualizado para cada objetivo e fase da sua
              jornada de saúde.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SERVICOS_CLINICOS.map((servico, index) => (
              <motion.div
                key={servico.title}
                {...fadeInUp}
                transition={{ delay: index * 0.06 }}
              >
                <Card className="h-full border-primary/20 hover:shadow-lg hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-3">
                      <servico.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{servico.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {servico.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-12 text-center">
            <Button size="lg" onClick={() => openWhatsApp()}>
              <Calendar className="w-5 h-5" />
              Agendar minha consulta
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-script text-4xl md:text-5xl text-primary">Conheça Minha História</h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-border">
                  <img
                    src={fotoVermelho}
                    alt="Luciana Domingues — nutricionista clínica"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-28 h-28 rounded-2xl overflow-hidden shadow-lg ring-2 ring-primary hidden md:block">
                  <img
                    src={fotoBranco}
                    alt="Luciana Domingues"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Sou <strong>Luciana Domingues de Oliveira</strong>, nutricionista registrada no{' '}
                  <strong>CRN 17564</strong>, com atuação principal em{' '}
                  <strong>consultório e atendimento clínico</strong>. Trabalho com pacientes que
                  buscam emagrecimento saudável, tratamento da obesidade, performance esportiva e
                  cuidado nutricional em diabetes e outras doenças crônicas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Minha abordagem combina avaliação detalhada, plano alimentar personalizado e
                  acompanhamento próximo para que você alcance resultados com segurança e
                  autonomia no dia a dia.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {AREAS_SOBRE.map((area) => (
                    <div
                      key={area}
                      className="flex items-start gap-2 p-3 rounded-lg bg-card border border-border"
                    >
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Por que agendar
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Diferenciais</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {DIFERENCIAIS.map((item, index) => (
              <motion.div
                key={item}
                {...fadeInUp}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border shadow-sm hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 shrink-0 bg-primary rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UAN — serviço complementar */}
      <section id="empresas" className="py-20 section-dark border-t border-primary/10">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-primary/80 font-semibold text-sm uppercase tracking-wider">
              Serviço complementar
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 text-white">
              Alimentação Coletiva (UAN) e consultoria para empresas
            </h2>
            <p className="text-white/55 mt-4 text-base leading-relaxed">
              Também atendo estabelecimentos que necessitam de treinamentos, documentação técnica e
              adequação sanitária. Esta modalidade é independente das consultas clínicas em
              consultório.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto opacity-95">
            <Accordion type="single" collapsible className="space-y-2">
              {SERVICOS_EMPRESAS.map((servico, index) => (
                <AccordionItem
                  key={servico.title}
                  value={`uan-${index}`}
                  className="border border-white/10 rounded-xl bg-brand-dark-card px-2 overflow-hidden"
                >
                  <AccordionTrigger className="px-4 py-4 hover:no-underline hover:text-primary text-white/90 text-sm md:text-base">
                    <div className="flex items-center gap-3 text-left">
                      <servico.icon className="w-5 h-5 text-primary shrink-0" />
                      <span>{servico.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <ul className="space-y-1.5 pl-8 text-white/60 text-sm">
                      {servico.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <motion.div {...fadeInUp} className="mt-8 text-center">
            <Button
              variant="secondary"
              className="border-primary/40 text-primary hover:bg-primary hover:text-brand-dark"
              onClick={() =>
                openWhatsApp(
                  'Olá! Gostaria de informações sobre serviços de UAN e consultoria para empresas.'
                )
              }
            >
              <Building2 className="w-4 h-4" />
              Consultar serviços para empresas
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Avaliações
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
              O que dizem os pacientes
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Depoimentos reais — nomes preservados em sigilo profissional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {DEPOIMENTOS.map((texto, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.06 }}
              >
                <div className="rounded-2xl p-6 h-full flex flex-col gap-4 bg-brand-dark border border-primary/20">
                  <Stars />
                  <p className="text-white/90 leading-relaxed flex-1 italic">
                    &ldquo;{texto}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-primary/20">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-primary text-sm">Paciente</div>
                      <div className="text-xs text-white/50">Avaliação 5 estrelas</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato + formulário */}
      <section
        id="contato"
        className="py-24 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-dark rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
            <div className="text-center mb-12 text-brand-dark">
              <h2 className="text-3xl md:text-4xl font-bold">Agende sua consulta</h2>
              <p className="text-lg text-brand-dark/80 mt-3 max-w-2xl mx-auto">
                Preencha o formulário ou fale direto pelo WhatsApp. Resposta rápida em horário
                comercial.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <form
                onSubmit={handleFormSubmit}
                className="bg-brand-dark rounded-2xl p-6 md:p-8 shadow-2xl space-y-5"
              >
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-white">
                    Nome completo
                  </Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="bg-brand-dark-card border-white/20 text-white placeholder:text-white/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone" className="text-white">
                    WhatsApp / Telefone
                  </Label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(43) 99999-9999"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="bg-brand-dark-card border-white/20 text-white placeholder:text-white/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mensagem" className="text-white">
                    Como posso ajudar?
                  </Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Ex.: quero agendar consulta para emagrecimento..."
                    rows={4}
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    className="bg-brand-dark-card border-white/20 text-white placeholder:text-white/40"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar e agendar pelo WhatsApp
                </Button>
              </form>

              <div className="space-y-6 text-brand-dark">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-dark/10 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-dark/70">Profissional</div>
                      <div className="font-semibold">Luciana Domingues de Oliveira · CRN 17564</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-dark/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-dark/70">WhatsApp</div>
                      <a
                        href={`https://wa.me/${WHATSAPP}`}
                        className="font-semibold hover:underline"
                      >
                        +55 (43) 9913-6245
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-dark/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-dark/70">E-mail</div>
                      <a href={`mailto:${EMAIL}`} className="font-semibold hover:underline break-all">
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-dark/10 rounded-lg flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-dark/70">Instagram</div>
                      <a
                        href={INSTAGRAM}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold hover:underline"
                      >
                        @nutrilucianadomingues
                      </a>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={() => openWhatsApp()}
                  className="w-full bg-brand-dark text-white hover:bg-brand-dark/90"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar agora no WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-brand-dark border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-3">
              <img src={logo} alt="Luciana Domingues" className="h-14" />
              <p className="text-white/60 text-sm leading-relaxed">
                Consultas nutricionais em consultório — emagrecimento, obesidade, nutrição
                esportiva, diabetes e doenças crônicas. CRN 17564.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Contato</h4>
              <div className="space-y-2 text-white/70 text-sm">
                <p>Luciana Domingues de Oliveira</p>
                <p>CRN 17564</p>
                <a href={`https://wa.me/${WHATSAPP}`} className="flex items-center gap-2 hover:text-primary">
                  <MessageCircle className="w-4 h-4" />
                  +55 (43) 9913-6245
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-primary break-all">
                  <Mail className="w-4 h-4 shrink-0" />
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Redes</h4>
              <div className="flex gap-3">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-brand-dark transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-brand-dark transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="w-10 h-10 bg-primary/15 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-brand-dark transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Luciana Domingues de Oliveira. Todos os direitos
              reservados. CRN 17564
            </p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => openWhatsApp()}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Agendar consulta no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
