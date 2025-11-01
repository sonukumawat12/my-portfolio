import { Code2, Palette, Rocket } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Creative Design',
      description: 'Combining aesthetics with functionality to create stunning interfaces.',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Fast Performance',
      description: 'Optimizing every aspect for lightning-fast user experiences.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate developer dedicated to creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              With over 5 years of experience in web development, I've worked on diverse projects
              ranging from startups to enterprise applications. My expertise lies in creating
              responsive, accessible, and performant web applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies.
              When I'm not coding, you'll find me contributing to open-source projects or
              exploring new design trends.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transform transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-gray-400">Projects</div>
            </div>
            <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transform transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">5+</div>
              <div className="text-gray-400">Years</div>
            </div>
            <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transform transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">30+</div>
              <div className="text-gray-400">Clients</div>
            </div>
            <div className="glassmorphism p-6 rounded-xl text-center hover:scale-105 transform transition-all duration-300">
              <div className="text-4xl font-bold gradient-text mb-2">100%</div>
              <div className="text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glassmorphism p-8 rounded-2xl hover:scale-105 transform transition-all duration-300 hover:glow-effect"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
