import { Code, Database, Layout, Server, Smartphone, Zap } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Layout size={40} />,
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
    },
    {
      icon: <Server size={40} />,
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'REST APIs'],
    },
    {
      icon: <Database size={40} />,
      title: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase'],
    },
    {
      icon: <Code size={40} />,
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Go'],
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'PWA'],
    },
    {
      icon: <Zap size={40} />,
      title: 'Tools',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'CI/CD'],
    },
  ];

  return (
    <section id="skills" className="py-20 grid-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glassmorphism p-8 rounded-2xl hover:scale-105 transform transition-all duration-300 hover:glow-effect"
            >
              <div className="text-purple-400 mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glassmorphism p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Frontend Development', level: 95 },
              { name: 'Backend Development', level: 88 },
              { name: 'UI/UX Design', level: 85 },
              { name: 'DevOps & Deployment', level: 80 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{item.name}</span>
                  <span className="text-purple-400 font-semibold">{item.level}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-green-500 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
