import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 -left-20 w-96 h-96 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
              Welcome to my portfolio
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-text/80 font-medium mb-6">
              Frontend Developer & UI/UX Designer
            </h2>
            
            <p className="text-lg text-text/70 mb-8 max-w-lg mx-auto lg:mx-0">
              I create beautiful, responsive websites and applications with a focus on user experience and clean code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-button-hover transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors duration-300"
              >
                View My Work
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text/60 hover:text-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary/30">
                      JD
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-sm text-text/60 mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-text/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-text/60 rounded-full animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
