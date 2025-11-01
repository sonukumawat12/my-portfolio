import { User, Code, Briefcase, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '3+', label: 'Years Experience', icon: Briefcase },
    { value: '50+', label: 'Projects Completed', icon: Code },
    { value: '30+', label: 'Happy Clients', icon: User },
    { value: '5+', label: 'Awards Won', icon: Award },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-text/70 max-w-3xl mx-auto">
              I'm a passionate frontend developer with a keen eye for design and a love for creating 
              beautiful, functional, and user-centered digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="relative">
              <div className="relative z-10 w-4/5 mx-auto lg:mx-0 lg:w-full">
                <div className="aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <User className="w-32 h-32 text-primary/30" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
              <p className="text-text/70 mb-6">
                I'm a passionate frontend developer with over 3 years of experience in creating 
                responsive and user-friendly web applications. My journey in web development 
                started with a simple curiosity about how websites work, which turned into a 
                full-fledged career.
              </p>
              <p className="text-text/70 mb-8">
                I specialize in React, TypeScript, and modern CSS frameworks. I love turning 
                complex problems into simple, beautiful, and intuitive designs. When I'm not 
                coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge with the community.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-background p-4 rounded-xl text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h4 className="text-2xl font-bold text-text mb-1">{stat.value}</h4>
                      <p className="text-sm text-text/60">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-button-hover transition-colors duration-300"
                >
                  Download CV
                </a>
                <a 
                  href="#skills" 
                  className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors duration-300"
                >
                  My Skills
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
