const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with cart, checkout, and payment integration.',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
    },
    {
      title: 'Finance Dashboard',
      description: 'Real-time financial data visualization with interactive charts and analytics.',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      title: 'Travel App',
      description: 'Mobile-first travel planning application with booking and itinerary features.',
      category: 'Mobile Design',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop'
    },
    {
      title: 'Restaurant Website',
      description: 'Modern restaurant website with online reservations and menu showcase.',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop'
    },
    {
      title: 'Brand Identity Pack',
      description: 'Complete brand identity including logo, business cards, and guidelines.',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&h=400&fit=crop'
    },
    {
      title: 'SaaS Landing Page',
      description: 'High-converting landing page for a B2B SaaS product with animations.',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    }
  ];

  return (
    <section
      id="projects"
      className="section flex items-center bg-zinc-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work across different domains
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="p-5">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
