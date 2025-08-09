import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 2000);
  };
  
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos conversar sobre seu projeto?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para ouvir suas ideias e transformá-las em soluções reais. 
            Entre em contato conosco hoje mesmo.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Como nos encontrar</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contato@empresa.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-muted-foreground">
                      São Paulo, SP<br />
                      Brasil
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gradient-hero rounded-xl border">
              <h4 className="text-lg font-semibold mb-2">Horário de atendimento</h4>
              <p className="text-muted-foreground">
                Segunda a Sexta: 9h às 18h<br />
                Sábado: 9h às 12h
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Envie sua mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Como você gostaria de ser chamado?" 
                    className="h-12"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail Profissional *</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="seu.email@empresa.com" 
                    className="h-12"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input 
                    id="company" 
                    name="company"
                    placeholder="Nome da sua empresa" 
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Como podemos ajudar? *</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Conte-nos sobre seu projeto, necessidades específicas ou dúvidas..." 
                    rows={4}
                    className="resize-none"
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 bg-gradient-umbler hover:shadow-glow transition-smooth"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Quero uma Proposta Personalizada"}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  Responderemos em até 2 horas durante o horário comercial
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};