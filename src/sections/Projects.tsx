import { ExternalLink, Github, Code } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, cart, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/project1.jpg',
    github: '#',
    demo: '#', 
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    tags: ['React', 'Firebase', 'Material-UI', 'Redux'],
    image: '/project2.jpg',
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js and Tailwind CSS.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    image: '/project3.jpg',
    github: '#',
    demo: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Recipe Finder',
    description: 'Find recipes based on ingredients you have at home.',
    tags: ['React', 'Spoonacular API', 'Tailwind CSS'],
    image: '/project4.jpg',
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with 5-day forecast.',
    tags: ['JavaScript', 'OpenWeather API', 'CSS3'],
    image: '/project5.jpg',
    github: '#',
    demo: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Track your workouts and fitness goals with detailed analytics.',
    tags: ['React Native', 'Firebase', 'Redux'],
    image: '/project6.jpg',
    github: '#',
    demo: '#',
    featured: false
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
        <Code className="w-16 h-16 text-primary/30" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-text">{project.title}</h3>
          <div className="flex space-x-2">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text/50 hover:text-primary transition-colors duration-200"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text/50 hover:text-primary transition-colors duration-200"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-text/70 mb-4 text-sm">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2.5 py-1 text-xs font-medium bg-background rounded-full text-text/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <a 
          href={project.demo || '#'} 
          className="inline-flex items-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
        >
          View Project
          <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-text/70 max-w-3xl mx-auto">
              Here are some of my recent projects. Each project was built to solve a specific problem
              and improve my skills as a developer.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-text">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-text">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
