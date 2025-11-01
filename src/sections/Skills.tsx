import { Code, Palette, Cpu, Database, Smartphone, Server } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Code,
    items: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    category: 'UI/UX Design',
    icon: Palette,
    items: [
      { name: 'Figma', level: 90 },
      { name: 'Adobe XD', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Material-UI', level: 80 },
      { name: 'Responsive Design', level: 95 },
      { name: 'User Research', level: 75 },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'Python', level: 70 },
      { name: 'Django', level: 65 },
      { name: 'RESTful APIs', level: 80 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    items: [
      { name: 'React Native', level: 75 },
      { name: 'Flutter', level: 65 },
      { name: 'iOS Development', level: 60 },
      { name: 'Android Development', level: 65 },
      { name: 'PWA', level: 80 },
      { name: 'Responsive Design', level: 90 },
    ],
  },
  {
    category: 'Database',
    icon: Database,
    items: [
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MySQL', level: 70 },
      { name: 'Firebase', level: 75 },
      { name: 'Redis', level: 65 },
      { name: 'ORM/ODM', level: 80 },
    ],
  },
  {
    category: 'Other',
    icon: Cpu,
    items: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 75 },
      { name: 'Testing', level: 80 },
      { name: 'Agile/Scrum', level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-text/70 max-w-3xl mx-auto">
              I've worked with a variety of technologies in the web development world.
              Here are the technologies I'm most proficient in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-text/80">{skill.name}</span>
                        <span className="text-xs text-text/60">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Interested in working together?</h3>
            <p className="text-text/70 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing product design work or partnership opportunities.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-button-hover transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
