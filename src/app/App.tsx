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
  Sparkles,
  Heart,
  Activity,
  Calendar,
  User,
  Clock,
  MapPin,
  Dumbbell,
  HeartPulse,
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
import { logo } from '../lib/images';

const PROFISSIONAL = 'Sofia Beauty IA';
const CARGO = 'Consultora Virtual de Estética e Beleza';
const REGISTRO = 'Estética Avançada';
const WHATSAPP = '[Telefone]';
const EMAIL = '[email]';
const INSTAGRAM = 'https://instagram.com/sofiabeautyia';
const INSTAGRAM_HANDLE = '@sofiabeautyia';
const ENDERECO = '[endereço]';
const HORARIO = 'Segunda a Sexta, das 08h às 18h';

const WHATSAPP_MSG =
  'Olá! Sou a Sofia Beauty IA, sua assistente virtual de estética. Posso ajudar você com tratamentos e agendamentos?';

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

const SERVICOS = [
  {
    icon: Activity,
    title: 'Limpeza de pele',
    description: 'Higienização profunda para remover impurezas e equilibrar a pele.',
    beneficio: 'Benefício: pele limpa, luminosa e renovada.',
  },
  {
    icon: Heart,
    title: 'Skin care',
    description: 'Rotinas e protocolos personalizados para cuidado diário da pele.',
    beneficio: 'Benefício: melhora da textura, hidratação e viço.',
  },
  {
    icon: BookOpen,
    title: 'Peeling',
    description: 'Renovação cutânea com foco em uniformização e revitalização.',
    beneficio: 'Benefício: suaviza manchas e linhas finas.',
  },
  {
    icon: ClipboardList,
    title: 'Microagulhamento',
    description: 'Estimulação de colágeno para tratamento de marcas e poros.',
    beneficio: 'Benefício: mais firmeza e textura uniforme.',
  },
  {
    icon: Sparkles,
    title: 'Harmonização facial',
    description: 'Proporção e equilíbrio dos traços com resultado natural.',
    beneficio: 'Benefício: valorização da beleza individual.',
  },
  {
    icon: HeartPulse,
    title: 'Drenagem linfática',
    description: 'Técnica manual para reduzir retenção de líquidos e desconfortos.',
    beneficio: 'Benefício: sensação de leveza e melhora do contorno corporal.',
  },
  {
    icon: Dumbbell,
    title: 'Massagem modeladora',
    description: 'Manobras intensas para auxiliar definição corporal.',
    beneficio: 'Benefício: melhora da silhueta e ativação da circulação.',
  },
  {
    icon: Sparkles,
    title: 'Depilação a laser',
    description: 'Tecnologia para redução progressiva dos pelos com segurança.',
    beneficio: 'Benefício: praticidade e conforto no dia a dia.',
  },
  {
    icon: ShieldCheck,
    title: 'Tratamentos para acne',
    description: 'Protocolos específicos para controle da acne e da oleosidade.',
    beneficio: 'Benefício: pele mais equilibrada e saudável.',
  },
  {
    icon: Clock,
    title: 'Rejuvenescimento facial',
    description: 'Combinação de técnicas para prevenir e tratar sinais da idade.',
    beneficio: 'Benefício: aparência rejuvenescida e natural.',
  },
];

const SOBRE_DIFERENCIAIS = [
  'Personalidade simpática, elegante, profissional e acolhedora',
  'Tom de voz educado, feminino, confiante e fácil de entender',
  'Especialista em cuidados para pele, corpo e bem-estar',
  'Explicação clara de cuidados pré e pós-tratamento',
  'Suporte completo para dúvidas e agendamentos',
];

const DIFERENCIAIS = [
  'Atendimento personalizado',
  'Avaliação individual',
  'Procedimentos seguros',
  'Equipamentos modernos',
  'Ambiente confortável',
  'Acompanhamento profissional',
];

const COMO_FUNCIONA = [
  'Agende sua avaliação',
  'Receba atendimento personalizado',
  'Defina o tratamento ideal',
  'Realize seu procedimento',
  'Acompanhe seus resultados',
];

const RESULTADOS = [
  {
    titulo: 'Antes e Depois',
    descricao: 'Evoluções visíveis com protocolos personalizados e acompanhamento profissional.',
    imagem: `${import.meta.env.BASE_URL}images/sofia-galeria-1.png`,
  },
  {
    titulo: 'Resultados Reais',
    descricao: 'Mudanças naturais e progressivas respeitando o perfil de cada paciente.',
    imagem: `${import.meta.env.BASE_URL}images/sofia-galeria-2.png`,
  },
  {
    titulo: 'Ambiente da Clínica',
    descricao: 'Espaço moderno, confortável e planejado para seu bem-estar.',
    imagem: `${import.meta.env.BASE_URL}images/sofia-principal.png`,
  },
];

const DEPOIMENTOS = [
  {
    nome: 'Camila Fernandes',
    texto:
      'Atendimento impecável, muito acolhedor e profissional. Resultado natural e exatamente como eu queria.',
  },
  {
    nome: 'Patrícia Almeida',
    texto:
      'A avaliação foi super detalhada. Me senti segura em todas as etapas e adorei o resultado final.',
  },
  {
    nome: 'Renata Souza',
    texto:
      'Ambiente lindo, atendimento humanizado e resultado excelente. Recomendo para quem busca qualidade.',
  },
];

const FAQS = [
  {
    pergunta: 'Os procedimentos são seguros?',
    resposta:
      'Sim. Todos os procedimentos são realizados com avaliação prévia, técnicas atualizadas e protocolos de segurança.',
  },
  {
    pergunta: 'Quanto tempo dura cada sessão?',
    resposta:
      'A duração varia conforme o procedimento, geralmente entre 40 minutos e 1h30, incluindo orientação pós-atendimento.',
  },
  {
    pergunta: 'Quando aparecem os resultados?',
    resposta:
      'Alguns resultados são imediatos, enquanto outros evoluem progressivamente conforme a resposta do organismo.',
  },
  {
    pergunta: 'Como funciona a avaliação?',
    resposta:
      'Na avaliação inicial, analisamos seu perfil, objetivos e indicamos o plano de tratamento mais adequado.',
  },
  {
    pergunta: 'Quais formas de pagamento são aceitas?',
    resposta:
      'As formas de pagamento são apresentadas na avaliação, com opções para facilitar seu planejamento.',
  },
];

const SERVICOS_COMPLEMENTARES = [
  {
    icon: GraduationCap,
    title: 'Palestras e treinamentos',
    items: [
      'Capacitação de equipes de atendimento e bem-estar',
      'Conteúdo técnico com aplicação prática',
      'Apoio na padronização de protocolos internos',
    ],
  },
  {
    icon: Building2,
    title: 'Consultoria para clínicas e empresas',
    items: [
      'Estruturação de jornadas de atendimento',
      'Aprimoramento da experiência do cliente',
      'Suporte estratégico para posicionamento premium',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Elaboração de materiais técnicos',
    items: [
      'Materiais educativos para pacientes',
      'Protocolos operacionais e de orientação',
      'Documentação de apoio para acompanhamento',
    ],
  },
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

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ nome: '', telefone: '', mensagem: '' });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const texto = [
      'Olá! Gostaria de agendar uma avaliação estética.',
      form.nome && `Nome: ${form.nome}`,
      form.telefone && `Telefone: ${form.telefone}`,
      form.mensagem && `Mensagem: ${form.mensagem}`,
    ]
      .filter(Boolean)
      .join('\n');
    openWhatsApp(texto);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <img src={logo} alt="Logo da clínica" className="h-10 w-auto" />
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
              Agendar Avaliação
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
              Agendar Avaliação
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
                <Sparkles className="w-4 h-4" />
                Atendimento estético premium
              </div>

              <div className="space-y-4">
                <p className="text-primary font-semibold tracking-wide text-sm uppercase">
                  {PROFISSIONAL} · {CARGO}
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight text-white break-words">
                  Sua consultora virtual de estética e beleza
                </h1>
                <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                  Simpática, elegante e acolhedora para ajudar você a escolher os melhores
                  tratamentos para pele, corpo e bem-estar.
                </p>
              </div>

              <ul className="space-y-2 text-white/80">
                {[CARGO, 'Atendimento humanizado', 'Apoio em agendamentos'].map(
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
                  Agendar Avaliação
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="border-primary/50 text-primary hover:bg-primary hover:text-brand-dark"
                  onClick={() =>
                    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Falar no WhatsApp
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 pt-4 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-primary">Registro</div>
                  <div className="text-sm text-white/60">{REGISTRO}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Premium</div>
                  <div className="text-sm text-white/60">Padrão de excelência</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">Foco</div>
                  <div className="text-sm text-white/60">Resultados naturais</div>
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
                  src={`${import.meta.env.BASE_URL}images/sofia-principal.png`}
                  alt="Profissional da clínica de estética"
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
                    <div className="font-semibold text-white text-sm">Sofia Beauty IA</div>
                    <div className="text-xs text-white/60">Consultora Virtual de Estética</div>
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

      {/* Serviços — logo após o hero */}
      <section id="servicos" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Procedimentos estéticos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">
              Serviços em destaque
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              Protocolos faciais e corporais com tecnologia, segurança e foco na sua melhor
              versão.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {SERVICOS.map((servico, index) => (
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
                    <p className="text-sm font-medium text-primary mt-3">{servico.beneficio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-12 text-center">
            <Button size="lg" onClick={() => openWhatsApp()}>
              <Calendar className="w-5 h-5" />
              Agendar Avaliação
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
                    src={`${import.meta.env.BASE_URL}images/sofia-principal.png`}
                    alt="Profissional da clínica de estética"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-28 h-28 rounded-2xl overflow-hidden shadow-lg ring-2 ring-primary hidden md:block">
                  <img
                    src={`${import.meta.env.BASE_URL}images/logo-estetica.svg`}
                    alt="Retrato profissional"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  &ldquo;Olá! Sou a <strong>{PROFISSIONAL}</strong>, sua assistente virtual de
                  estética. Estou aqui para ajudar você a encontrar os melhores tratamentos para
                  sua pele, corpo e bem-estar. Posso esclarecer dúvidas, apresentar procedimentos,
                  explicar cuidados pré e pós-tratamento e auxiliar no agendamento.&rdquo;
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                    Formação, experiência e diferenciais
                  </p>
                </div>

                <div className="grid gap-3">
                  {SOBRE_DIFERENCIAIS.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 p-3 rounded-lg bg-card border border-border"
                    >
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm font-medium text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Como funciona</h2>
          </motion.div>
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMO_FUNCIONA.map((item, index) => (
              <motion.div
                key={item}
                {...fadeInUp}
                transition={{ delay: index * 0.07 }}
                className="bg-secondary border border-border rounded-xl p-4 text-center"
              >
                <div className="text-sm font-bold text-primary mb-2">PASSO {index + 1}</div>
                <p className="text-sm text-foreground font-medium">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-14">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Diferenciais</span>
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

      {/* Resultados */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Resultados</h2>
            <p className="text-muted-foreground mt-3">
              Antes e depois, resultados reais e experiência da clínica.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {RESULTADOS.map((item, index) => (
              <motion.div key={item.titulo} {...fadeInUp} transition={{ delay: index * 0.08 }}>
                <Card className="overflow-hidden h-full">
                  <img src={item.imagem} alt={item.titulo} className="w-full h-72 object-cover" />
                  <CardHeader>
                    <CardTitle>{item.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.descricao}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviço complementar */}
      <section id="empresas" className="py-20 section-dark border-t border-primary/10">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-10 max-w-3xl mx-auto">
            <span className="text-primary/80 font-semibold text-sm uppercase tracking-wider">
              Serviço complementar
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 text-white">
              Consultoria para empresas
            </h2>
            <p className="text-white/55 mt-4 text-base leading-relaxed">
              Palestras, treinamentos e materiais técnicos para equipes e negócios do segmento de
              bem-estar e estética.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto opacity-95">
            <Accordion type="single" collapsible className="space-y-2">
              {SERVICOS_COMPLEMENTARES.map((servico, index) => (
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
                  'Olá! Gostaria de informações sobre palestras e treinamentos para empresas.'
                )
              }
            >
              <Building2 className="w-4 h-4" />
              Consultar serviço complementar
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
              Avaliações reais de clientes da clínica
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {DEPOIMENTOS.map((depoimento, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.06 }}
              >
                <div className="rounded-2xl p-6 h-full flex flex-col gap-4 bg-brand-dark border border-primary/20">
                  <Stars />
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-semibold">
                      {getInitials(depoimento.nome)}
                    </div>
                    <div className="font-medium text-primary text-sm">{depoimento.nome}</div>
                  </div>
                  <p className="text-white/90 leading-relaxed flex-1 italic">
                    &ldquo;{depoimento.texto}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-primary/20">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-primary text-sm">Cliente verificada</div>
                      <div className="text-xs text-white/50">Avaliação 5 estrelas</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">FAQ</h2>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((faq, index) => (
                <AccordionItem
                  key={faq.pergunta}
                  value={`faq-${index}`}
                  className="rounded-xl border border-border bg-secondary px-4"
                >
                  <AccordionTrigger className="text-base font-semibold hover:no-underline">
                    {faq.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contato + formulário */}
      <section
        id="contato"
        className="pt-24 pb-32 md:pb-24 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-dark rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto">
            <div className="text-center mb-12 text-brand-dark">
              <h2 className="text-3xl md:text-4xl font-bold">Agende sua avaliação</h2>
              <p className="text-lg text-brand-dark/80 mt-3 max-w-2xl mx-auto">
                Preencha o formulário ou fale direto pelo WhatsApp. Resposta rápida em horário
                comercial.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <form
                onSubmit={handleFormSubmit}
                className="min-w-0 bg-brand-dark rounded-2xl p-6 md:p-8 shadow-2xl space-y-5"
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
                  className="w-full bg-primary text-primary-foreground whitespace-normal h-auto py-4 text-base leading-snug"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar e agendar pelo WhatsApp
                </Button>
              </form>

              <div className="min-w-0 space-y-6 text-brand-dark">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-dark/10 rounded-lg flex items-center justify-center">
                      <User className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-dark/70">Profissional</div>
                      <div className="font-semibold break-words">
                        {PROFISSIONAL} · {CARGO}
                      </div>
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
                        {WHATSAPP}
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
                      <MapPin className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-dark/70">Endereço</div>
                      <div className="font-semibold break-words">{ENDERECO}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-dark/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-brand-dark" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-brand-dark/70">Horário</div>
                      <div className="font-semibold break-words">{HORARIO}</div>
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
                        {INSTAGRAM_HANDLE}
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
                  Falar no WhatsApp
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
              <p className="text-white/60 text-sm leading-relaxed">
                Clínica de estética premium com atendimento personalizado, procedimentos seguros e
                foco em resultados naturais.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Contato</h4>
              <div className="space-y-2 text-white/70 text-sm">
                <p>{PROFISSIONAL}</p>
                <p>{REGISTRO}</p>
                <a href={`https://wa.me/${WHATSAPP}`} className="flex items-center gap-2 hover:text-primary">
                  <MessageCircle className="w-4 h-4" />
                  {WHATSAPP}
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
              &copy; {new Date().getFullYear()} {PROFISSIONAL}. Todos os direitos reservados.{' '}
              {REGISTRO}
            </p>
          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={() => openWhatsApp()}
        className="fixed bottom-20 md:bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Agendar avaliação no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
