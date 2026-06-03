import { useState } from 'react';
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
  FileText,
  BookOpen,
  ShieldCheck,
  Menu,
  X,
  Phone,
  Building2,
  ChevronDown,
} from 'lucide-react';
import { Button } from './components/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/Card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './components/ui/accordion';
import logo from '../assets/logo.png';
import fotoHero from '../assets/foto-hero.png';
import fotoVermelho from '../assets/foto-vermelho.png';
import fotoBranco from '../assets/foto-branco.png';

const WHATSAPP = '5543999136245';
const EMAIL = 'lucianadominguesoliveira@gmail.com';
const INSTAGRAM = 'https://instagram.com/nutrilucianadomingues';
const WHATSAPP_MSG =
  'Olá! Gostaria de solicitar informações sobre consultoria em segurança dos alimentos e treinamentos.';

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Minha História', href: '#historia' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const SERVICOS = [
  {
    icon: GraduationCap,
    title: 'Treinamento de Boas Práticas de Manipulação de Alimentos',
    items: [
      'Capacitação para manipuladores de alimentos',
      'Higiene pessoal',
      'Contaminação cruzada',
      'Controle de temperatura',
      'Higienização de ambientes e equipamentos',
      'Armazenamento correto de alimentos',
      'Certificado de participação',
    ],
  },
  {
    icon: Building2,
    title: 'Palestras para Empresas e Instituições',
    items: [
      'Boas Práticas de Manipulação',
      'Segurança dos Alimentos',
      'Prevenção de Doenças Transmitidas por Alimentos (DTA)',
      'Alimentação Saudável no Ambiente de Trabalho',
      'Qualidade em Serviços de Alimentação',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Elaboração de POPs (Procedimentos Operacionais Padronizados)',
    items: [
      'Higienização de instalações',
      'Controle da potabilidade da água',
      'Higiene e saúde dos manipuladores',
      'Controle integrado de pragas',
      'Manejo de resíduos',
    ],
  },
  {
    icon: BookOpen,
    title: 'Elaboração do Manual de Boas Práticas',
    items: [
      'Descrição do estabelecimento',
      'Fluxograma de produção',
      'Procedimentos operacionais',
      'Controle de qualidade',
      'Registros obrigatórios',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Consultoria em Segurança dos Alimentos',
    items: [
      'Visitas técnicas',
      'Adequação às normas sanitárias',
      'Preparação para fiscalizações',
      'Correção de não conformidades',
    ],
  },
];

const DIFERENCIAIS = [
  'Atendimento personalizado',
  'Material didático incluso',
  'Certificados para participantes',
  'Suporte técnico pós-treinamento',
  'Adequação às legislações vigentes',
];

const DEPOIMENTOS = [
  'Excelente profissional! Muito atenciosa e o plano alimentar é super acessível e personalizado. Recomendo demais!',
  'Ótima profissional, estuda muito cada caso, atenciosa, super recomendo!',
  'Foi uma honra conhecer essa profissional. Seu planejamento e suas dicas são maravilhosas. Está me ajudando muito, já estou vestindo roupas que fazia meses que não me serviam. O carinho e a atenção no dia da consulta e no suporte nos demais dias é 100%.',
  'Ótima nutricionista, muito atenciosa. Segui toda sua orientação e emagreci 15 kg em 4 meses só com adequação alimentar. Melhorou muito minha saúde.',
  'Excelente profissional! Muito prestativa e atenciosa! Super indico!',
  'Ótima profissional! Super paciente!',
];

const ESTABELECIMENTOS = [
  'Restaurantes',
  'Cozinhas industriais',
  'Lanchonetes',
  'Padarias',
  'Escolas',
  'Hospitais',
  'Supermercados',
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function openWhatsApp() {
  window.open(
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MSG)}`,
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

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
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
            <Button size="sm" onClick={openWhatsApp}>
              <MessageCircle className="w-4 h-4" />
              WhatsApp
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
            <Button onClick={openWhatsApp} className="mt-2">
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
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
                <ShieldCheck className="w-4 h-4" />
                Alimentação Coletiva & Segurança dos Alimentos
              </div>

              <div className="space-y-4">
                <p className="font-script text-4xl md:text-5xl text-primary leading-none">
                  Luciana Domingues
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  Garanta a segurança alimentar do seu negócio
                </h1>
                <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                  Consultoria, treinamentos e documentação técnica para estabelecimentos
                  que manipulam alimentos — com foco em legislação sanitária e capacitação
                  contínua das equipes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={openWhatsApp} className="group">
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Solicitar orçamento
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-brand-dark"
                  onClick={() =>
                    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Ver serviços
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-primary">CRN</div>
                  <div className="text-sm text-white/60">17564</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-white/60">Foco em conformidade</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">UAN</div>
                  <div className="text-sm text-white/60">Treinamentos & POPs</div>
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
                  alt="Luciana Domingues de Oliveira — Nutricionista"
                  className="hero-main-image w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-brand-dark-card border border-primary/30 p-5 rounded-2xl shadow-xl max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2.5 rounded-full">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Nutricionista</div>
                    <div className="text-xs text-white/60">CRN 17564</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <a
          href="#historia"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce hidden md:block"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </section>

      {/* Minha História */}
      <section id="historia" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-script text-4xl md:text-5xl text-primary">
                Conheça Minha História
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-border">
                  <img
                    src={fotoVermelho}
                    alt="Luciana Domingues — consultoria em alimentação coletiva"
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
                  Atuo na área de <strong>Alimentação Coletiva</strong>, oferecendo consultoria,
                  treinamentos e documentação técnica para restaurantes, cozinhas industriais,
                  lanchonetes, padarias, escolas, hospitais, supermercados e demais
                  estabelecimentos que manipulam alimentos.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Meu objetivo é garantir a <strong className="text-foreground">segurança alimentar</strong>,
                  o cumprimento da <strong className="text-foreground">legislação sanitária</strong> e a{' '}
                  <strong className="text-foreground">capacitação contínua</strong> das equipes de
                  manipulação de alimentos.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {ESTABELECIMENTOS.map((tipo) => (
                    <span
                      key={tipo}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {tipo}
                    </span>
                  ))}
                  <span className="px-3 py-1.5 text-sm rounded-full bg-primary/15 text-foreground border border-primary/30">
                    e demais estabelecimentos
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 section-dark">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              O que ofereço
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              Serviços Oferecidos
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
              Soluções completas para adequação sanitária, capacitação de equipes e
              documentação exigida pela Vigilância Sanitária
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {SERVICOS.map((servico, index) => (
                <motion.div key={servico.title} {...fadeInUp} transition={{ delay: index * 0.05 }}>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-primary/25 rounded-xl bg-brand-dark-card px-2 overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-5 hover:no-underline hover:text-primary text-white [&[data-state=open]]:text-primary">
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 shrink-0 bg-primary/15 rounded-xl flex items-center justify-center">
                          <servico.icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="font-semibold text-base md:text-lg">
                          {index + 1}. {servico.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-5">
                      <ul className="space-y-2 pl-16">
                        {servico.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-white/75">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          <motion.div {...fadeInUp} className="mt-12 text-center">
            <Button size="lg" onClick={openWhatsApp}>
              <FileText className="w-5 h-5" />
              Solicitar proposta personalizada
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cards resumo serviços - light section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Em resumo
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mt-2 text-foreground">
              Principais áreas de atuação
            </h3>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {SERVICOS.slice(0, 4).map((servico, index) => (
              <motion.div key={servico.title} {...fadeInUp} transition={{ delay: index * 0.08 }}>
                <Card className="h-full border-primary/20 hover:shadow-lg hover:border-primary/40 transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center mb-3">
                      <servico.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg leading-snug">{servico.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {servico.items.slice(0, 2).join(' · ')}.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-8 max-w-4xl mx-auto">
            <Card className="border-primary/20 hover:shadow-lg hover:border-primary/40 transition-all">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-primary/15 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg leading-snug">
                    {SERVICOS[4].title}
                  </CardTitle>
                  <CardDescription className="text-base mt-2 leading-relaxed">
                    {SERVICOS[4].items.join(' · ')}.
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Por que me escolher
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Diferenciais
            </h2>
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

      {/* Depoimentos */}
      <section id="depoimentos" className="py-24 section-dark">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Avaliações
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              O que dizem sobre o atendimento
            </h2>
            <p className="text-white/60 mt-4 max-w-xl mx-auto">
              Depoimentos reais de clientes — nomes preservados em sigilo profissional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {DEPOIMENTOS.map((texto, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.06 }}
              >
                <div className="testimonial-card rounded-2xl p-6 h-full flex flex-col gap-4">
                  <Stars />
                  <p className="text-white/90 leading-relaxed flex-1 italic">
                    &ldquo;{texto}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-primary/20">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-primary text-sm">Cliente verificado</div>
                      <div className="text-xs text-white/50">Avaliação 5 estrelas</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contato */}
      <section
        id="contato"
        className="py-24 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-dark rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-brand-dark">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Entre em contato
                </h2>
                <p className="text-lg text-brand-dark/80 leading-relaxed">
                  Tire suas dúvidas, solicite orçamento para treinamentos, palestras,
                  elaboração de POPs, Manual de Boas Práticas ou consultoria técnica.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-dark/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-dark/70">WhatsApp / Telefone</div>
                      <a
                        href={`https://wa.me/${WHATSAPP}`}
                        className="font-semibold text-brand-dark hover:underline"
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
                      <a
                        href={`mailto:${EMAIL}`}
                        className="font-semibold text-brand-dark hover:underline break-all"
                      >
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
                        className="font-semibold text-brand-dark hover:underline"
                      >
                        @nutrilucianadomingues
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-dark rounded-2xl p-8 shadow-2xl space-y-6">
                <div className="text-center space-y-2">
                  <img src={logo} alt="Logo" className="h-24 mx-auto" />
                  <h3 className="text-xl font-semibold text-white">
                    Luciana Domingues de Oliveira
                  </h3>
                  <p className="text-primary font-medium">Nutricionista · CRN 17564</p>
                </div>
                <Button
                  size="lg"
                  onClick={openWhatsApp}
                  className="w-full bg-primary text-primary-foreground hover:opacity-90"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chamar no WhatsApp
                </Button>
                <p className="text-center text-white/50 text-sm">
                  Resposta rápida em horário comercial
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-3">
              <img src={logo} alt="Luciana Domingues" className="h-14" />
              <p className="text-white/60 text-sm leading-relaxed">
                Consultoria, treinamentos e documentação técnica em Alimentação Coletiva
                e Segurança dos Alimentos.
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
              &copy; {new Date().getFullYear()} Luciana Domingues de Oliveira. Todos os
              direitos reservados. CRN 17564
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <button
        type="button"
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
