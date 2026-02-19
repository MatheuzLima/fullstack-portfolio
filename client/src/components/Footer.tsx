import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-display mb-2">
              <span className="text-primary">&lt;</span>
              Matheus
              <span className="text-primary">Dev /&gt;</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              {/* {portfolioData.personal.tagline} */}
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href={portfolioData.personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={portfolioData.personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={portfolioData.personal.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
            >
              <Twitter size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="p-2 rounded-full bg-secondary hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>© {currentYear} {portfolioData.personal.name}. Todos Direitos Reservados.</p>
        </div>
      </div>
    </footer>
  );
}
