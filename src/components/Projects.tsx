import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with drag-and-drop interface, real-time updates, and team collaboration features.',
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Firebase', 'Tailwind', 'TypeScript'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling, and engagement tracking.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'PostgreSQL', 'Chart.js', 'APIs'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses, message threading, and file sharing capabilities.',
      image: 'https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'WebSocket', 'OpenAI', 'Redis'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Fitness Tracking Platform',
      description: 'Mobile-first fitness app with workout tracking, nutrition planning, and progress visualization.',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Supabase', 'Charts', 'Mobile'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Builder',
      description: 'Drag-and-drop portfolio builder with customizable templates, hosting, and analytics for creatives.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Django', 'AWS', 'Editor.js'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glassmorphism rounded-2xl overflow-hidden hover:scale-105 transform transition-all duration-300 hover:glow-effect group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.github}
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
