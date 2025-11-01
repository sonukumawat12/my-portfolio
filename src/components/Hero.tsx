import { Github, Linkedin, Mail, ArrowDown, Code, Cpu, Zap } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  const techStack = [
    { name: 'React', icon: <Code className="w-5 h-5" /> },
    { name: 'Node.js', icon: <Cpu className="w-5 h-5" /> },
    { name: 'TypeScript', icon: <Code className="w-5 h-5" /> },
    { name: 'Next.js', icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-6">
              👋 Welcome to my portfolio
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-primary">John Doe</span>
              <br />
              <span className="text-text">I build digital experiences</span>
            </h1>
            
            <p className="text-lg text-text-secondary mb-8 max-w-2xl">
              I'm a Full Stack Developer passionate about creating beautiful, functional, and user-centric web applications. 
              I transform ideas into reality through clean code and thoughtful design.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-background font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-primary/20 text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
              >
                View My Work
              </a>
            </div>

            <div className="mb-12">
              <p className="text-sm text-text-secondary mb-4">TECH STACK</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-text hover:text-primary transition-colors"
                  >
                    {tech.icon}
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 bg-background border border-border rounded-lg">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-background to-background/80 backdrop-blur-sm">
                <div className="p-1">
                  <div className="h-3 w-3 rounded-full bg-red-500 inline-block mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500 inline-block mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500 inline-block"></div>
                </div>
                <div className="p-6">
                  <div className="h-4 w-3/4 bg-border/30 rounded mb-4"></div>
                  <div className="h-4 w-1/2 bg-border/20 rounded mb-8"></div>
                  <div className="grid gap-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-3 w-full bg-border/10 rounded"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a 
          href="#about" 
          className="inline-flex flex-col items-center text-text-secondary hover:text-primary transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-6 h-6 animate-bounce group-hover:animate-none" />
        </a>
      </div>
    </section>
  );
}
