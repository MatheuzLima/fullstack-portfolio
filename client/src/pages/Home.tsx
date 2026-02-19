import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { ArrowRight, Download, Send, Terminal, Database, Code, Layout, Calendar } from "lucide-react";
import { z } from "zod";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { portfolioData } from "@/data/portfolio";
import { useContactForm } from "@/hooks/use-contact";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});
type ContactFormValues = z.infer<typeof contactSchema>;

export default function Home() {
  const { submit: submitContact, isLoading } = useContactForm();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await submitContact(data);
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const getSkillIcon = (category: string) => {
    switch (category) {
      case "Frontend": return <Layout className="w-6 h-6 text-primary" />;
      case "Backend": return <Database className="w-6 h-6 text-primary" />;
      case "DevOps": return <Terminal className="w-6 h-6 text-primary" />;
      default: return <Code className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <NavBar />

      <main className="relative z-10">
        {/* HERO SECTION */}
        {/* TRECHO ORIGINAL */}
        {/* <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-6 flex justify-center"> grid md:grid-cols-1 gap-12 items-center */}
        {/* <div className="order-2 md:order-1"> */}
        {/* <motion.div
              initial={{ opacity: 0, y: 20, x: -80 }}
              animate={{ opacity: 1, y: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            > */}
        {/* <div className="inline-block px-3 py-1 rounded-full bg-secondary border border-white/10 text-primary text-sm font-medium mb-6">
                  Disponível para novos projetos
                </div> */}
        {/* <p className="text-3xl md:text-3xl text-gradient-primary mb-2 text-bold">
                Olá! Eu sou —
              </p>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-none">
                {portfolioData.personal.name.split(' ')[0]} <br />
                <span className="text-gradient-primary">{portfolioData.personal.role}</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                {portfolioData.personal.summary} */}
        {/* </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects">
                  <Button size="lg" className="rounded-full text-base font-semibold px-8">
                    Ver Projetos <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <Button variant="outline" size="lg" className="rounded-full text-base px-8 border-white/10 hover:bg-white/5">
                  Download CV <Download className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div> */}
        {/* </div> */}

        {/* Segunda parte do hero section desativada "Emoji ou foto na segunda coluna grid" md:grid-cols-2*/}
        {/* <div className="order-1 md:order-2 flex justify-center"> */}
        {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative w-72 h-72 md:w-96 md:h-96"
              > */}
        {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse" /> */}
        {/* Hero illustration placeholder */}
        {/* <div className="relative z-10 w-full h-full rounded-full border-2 border-white/10 bg-secondary/30 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                  <span className="text-8xl">👋</span>
                </div> */}
        {/* </motion.div> */}
        {/* </div> */}
        {/* </div>
        </section> */}
        {/* FIM TRECHO ORIGINAL */}

        <section id="hero" className="min-h-screen flex items-center pt-24">
          <div className="container mx-auto px-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl md:ml-24"
            >

              {/* Intro */}
              <p className="text-gradient-primary mb-3 text-base md:text-lg font-semibold">
                Olá! Eu sou —
              </p>

              {/* Nome */}
              <h1 className="text-5xl sm:text-5xl md:text-9xl font-bold leading-none mb-4">
                {portfolioData.personal.name}.
              </h1>

              {/* Cargo 
              <h2 className="text-xl md:text-2xl font-semibold text-gradient-primary mb-4">
                {portfolioData.personal.role}
              </h2>*/}

              {/* Resumo
              <p className="text-muted-foreground mb-6 max-w-xl leading-relaxed">
                {portfolioData.personal.summary}
              </p> */}

              <div className="flex flex-wrap items-baseline gap-2">

                {/* Cargo */}
                <span className="text-xl md:text-2xl font-semibold text-gradient-primary">
                  {portfolioData.personal.role}
                </span>

                {/* Summary */}
                <span className="text-xl md:text-2xl font-semibold text-muted-foreground">
                  {portfolioData.personal.summary}
                </span>

              </div>



              {/* Ações */}
              <div className="flex flex-wrap gap-4 mt-8">

                <a href="#projects">
                  <Button size="lg" className="rounded-full text-base font-semibold px-8">
                    Ver Projetos <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full text-base px-8 border-white/10 hover:bg-white/5"
                >
                  Download CV <Download className="ml-2 w-4 h-4" />
                </Button>

              </div>

            </motion.div>

          </div>
        </section>



        {/* ABOUT SECTION */}
        {/* TRECHO ORIGINAL */}
        {/* <section id="about" className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading
              title="Sobre"
            // subtitle="Get to know me better"
            />
            <h3 className="text-2xl font-bold mb-4 text-center">
              Desenvolvedor Full Stack focado em aplicações web modernas e<br></br> infraestrutura escalável
            </h3>

            <div className="grid px-32 gap-12 items-center">
              {/* <motion.div
                // initial={{ opacity: 0, x: -30 }}
                // whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                // transition={{ duration: 0.5 }}
                // className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              > */}
        {/* Stock photo for coding/workspace */}
        {/* Unsplash: Developer coding on laptop in dark room */}
        {/* <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                  alt="Workspace"
                  className="rounded-2xl shadow-2xl border border-white/5"
                />
                <div className="absolute -bottom-6 -right-6 p-6 bg-secondary border border-white/5 rounded-xl shadow-xl hidden md:block">
                  <div className="text-4xl font-bold text-primary mb-1">3</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div> */}

        {/* </motion.div> */}

        {/* <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }} 
              >
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Iniciei minha jornada em tecnologia explorando computadores, sistemas e redes — desmontando máquinas, configurando ambientes e entendendo como tudo funciona por trás das aplicações. Essa curiosidade naturalmente evoluiu para o desenvolvimento de software.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Hoje atuo como Desenvolvedor Full Stack, criando aplicações web completas — da interface à infraestrutura. Desenvolvo Frontend, APIs no Backend, modelo bancos de dados e também cuido do deploy e dos ambientes em nuvem.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Sou analítico, naturalmente curioso e estou em constante evolução, aprimorando minhas habilidades através de projetos reais e ambientes que simulam produção.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-white mb-2">Frontend</h4>
                    <p className="text-sm text-muted-foreground">Criação de interfaces responsivas, modernas e focadas no usuário</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Backend</h4>
                    <p className="text-sm text-muted-foreground">Desenvolvimento de APIs, regras de negócio e integrações com banco de dados</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Infraestrutura</h4>
                    <p className="text-sm text-muted-foreground">Provisionamento de ambientes em nuvem, containers, redes, servidores, segurança básica e gerenciamento de recursos
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">DevOps</h4>
                    <p className="text-sm text-muted-foreground">Automação de pipelines CI/CD, Infraestrutura como Código, observabilidade, monitoramento, troubleshooting e melhoria contínua da confiabilidade das aplicações
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed mt-6">
                  Gosto de resolver problemas complexos, automatizar processos repetitivos e aumentar a confiabilidade das aplicações. Busco atuar em produtos onde posso contribuir de ponta a ponta do código à produção entregando sistemas escaláveis, seguros e performáticos.
                </p>
              </motion.div>
            </div>
          </div>
        </section> */}
        {/* FIM TRECHO ORIGINAL */}

        <section id="about" className="py-24">
          <div className="container mx-auto px-6">

            <SectionHeading title="Sobre mim" />

            <div className="flex justify-center">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl text-center text-xl"
              >

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Iniciei minha jornada em tecnologia explorando computadores, sistemas e redes desmontando máquinas, configurando ambientes e entendendo como tudo funciona por trás das aplicações. Essa curiosidade naturalmente evoluiu para o desenvolvimento de software.
                </p>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Hoje atuo como Desenvolvedor Full Stack, criando aplicações web completas da interface à infraestrutura. Desenvolvo Frontend, APIs no Backend, modelo bancos de dados e também cuido do deploy e dos ambientes em nuvem.
                </p>

                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Sou analítico, naturalmente curioso e estou em constante evolução, aprimorando minhas habilidades através de projetos reais e ambientes que simulam produção.
                </p>

                {/* Áreas

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-left">

                  <div>
                    <h4 className="font-bold text-white mb-2">Frontend</h4>
                    <p className="text-sm text-muted-foreground">
                      Criação de interfaces responsivas, modernas e focadas no usuário
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">Backend</h4>
                    <p className="text-sm text-muted-foreground">
                      Desenvolvimento de APIs, regras de negócio e integrações com banco de dados
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">Infraestrutura</h4>
                    <p className="text-sm text-muted-foreground">
                      Provisionamento de ambientes em nuvem, containers, redes, servidores, segurança básica e gerenciamento de recursos
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">DevOps</h4>
                    <p className="text-sm text-muted-foreground">
                      Automação de pipelines CI/CD, Infraestrutura como Código, observabilidade, monitoramento, troubleshooting e melhoria contínua da confiabilidade das aplicações
                    </p>
                  </div> */}
                {/* 
                </div> */}
                <p className="text-muted-foreground leading-relaxed">
                  Gosto de resolver problemas complexos, automatizar processos repetitivos e aumentar a confiabilidade das aplicações. Busco atuar em produtos onde posso contribuir de ponta a ponta do código à produção entregando sistemas escaláveis, seguros e performáticos.
                </p>

              </motion.div>

            </div>

          </div>
        </section>


        {/* SKILLS SECTION */}
        <section id="skills" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <SectionHeading
              title="Habilidades técnicas"
              subtitle="Tecnologias que uso no dia-a-dia"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      {getSkillIcon(group.category)}
                    </div>
                    <h3 className="text-lg font-bold">{group.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-sm bg-background/50 rounded-md text-muted-foreground border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading
              title="Projetos"
            // subtitle="Projetos que desenvolvi"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline" className="rounded-full px-8 border-white/10 hover:bg-white/5">
                  Ver mais no GitHub
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6">
            <SectionHeading
              title="Experiência profissional"
              subtitle="Trajetória profissional até o momento."
            />

            <div className="max-w-3xl mx-auto space-y-8 relative">
              {/* Vertical line */}
              <div className="absolute left-[28px] top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />

              {portfolioData.experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[20px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <div className="glass-card p-8 rounded-2xl relative">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.role}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                        <Calendar size={14} className="mr-2" />
                        {job.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading
              title="Entre em contato"
              subtitle="Tem um projeto em mente? Vamos trabalhar juntos."
            />

            <div className="max-w-2xl mx-auto glass-card p-8 md:p-12 rounded-3xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Seu nome e sobrenome" className="bg-background/50 border-white/10 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="seuemail@exemplo.com" className="bg-background/50 border-white/10 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Me fale um pouco sobre o seu projeto..."
                            className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/25"
                  >
                    {isLoading ? "Sending..." : (
                      <>
                        Enviar<Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
