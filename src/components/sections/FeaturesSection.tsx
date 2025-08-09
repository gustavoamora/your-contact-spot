import { CheckCircle, Zap, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Soluções Rápidas",
    description: "Entregamos resultados em tempo recorde, sem comprometer a qualidade."
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Todos os nossos projetos seguem os mais altos padrões de segurança."
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais experientes dedicados ao sucesso do seu projeto."
  },
  {
    icon: CheckCircle,
    title: "Qualidade Comprovada",
    description: "Processos testados e aprovados por centenas de clientes satisfeitos."
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-gradient-card rounded-xl border hover:shadow-elegant transition-smooth hover:transform hover:scale-105"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};