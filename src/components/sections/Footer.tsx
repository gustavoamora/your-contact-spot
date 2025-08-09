import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Sua Empresa
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformando ideias em soluções inovadoras. Oferecemos serviços de 
              alta qualidade para impulsionar o crescimento do seu negócio.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm">contato@empresa.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Consultoria
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Desenvolvimento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Suporte
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-border" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 Sua Empresa. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-smooth">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};