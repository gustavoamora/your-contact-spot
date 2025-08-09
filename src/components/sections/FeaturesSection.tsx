import { Rocket, Shield, HeartHandshake, Zap, Users, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Deploy Rápido",
    description: "Lance seu projeto em minutos, não em horas. Nossa infraestrutura foi otimizada para velocidade máxima.",
    highlight: "Em segundos"
  },
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Proteção completa com SSL gratuito, firewall inteligente e backups automáticos diários.",
    highlight: "SSL Grátis"
  },
  {
    icon: HeartHandshake,
    title: "Suporte Excepcional",
    description: "Equipe especializada disponível 24/7 para resolver qualquer questão em tempo real.",
    highlight: "24/7"
  },
  {
    icon: Zap,
    title: "Performance Superior",
    description: "CDN global, cache inteligente e otimizações automáticas para máxima velocidade.",
    highlight: "99.9% Uptime"
  },
  {
    icon: Users,
    title: "Escalabilidade Automática",
    description: "Recursos que crescem com seu negócio, sem interrupções ou configurações complexas.",
    highlight: "Auto Scale"
  },
  {
    icon: CheckCircle2,
    title: "Facilidade Garantida",
    description: "Interface intuitiva que permite gerenciar tudo sem conhecimento técnico avançado.",
    highlight: "Sem Complicação"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher nossos serviços?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos experiência, inovação e dedicação para entregar soluções 
            que superam expectativas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-smooth hover:transform hover:scale-[1.02]"
            >
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="p-4 bg-gradient-umbler rounded-xl">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};