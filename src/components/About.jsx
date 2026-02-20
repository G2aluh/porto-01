const About = () => {
  const techStack = [
    'React.js', 'TypeScript', 'Tailwind CSS', 'Node.js',
    'Figma', 'Adobe XD', 'PostgreSQL', 'Git',
    'Next.js', 'GraphQL', 'Docker', 'AWS'
  ];

  const experiences = [
    {
      role: 'Senior UI/UX Designer',
      company: 'Tech Studio Inc.',
      period: '2022 - Present',
      description: 'Leading design projects for Fortune 500 clients, creating intuitive user experiences.'
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed responsive web applications using React, Node.js, and modern technologies.'
    },
    {
      role: 'Freelance Designer',
      company: 'Self-Employed',
      period: '2018 - 2020',
      description: 'Worked with startups and businesses to create brand identities and web presence.'
    }
  ];

  return (
    <section
      id="about"
      className="section flex items-center bg-zinc-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Bio */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-white mb-8"></div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate freelancer with over 6 years of experience in creating 
              digital solutions that make a difference. I specialize in combining 
              beautiful design with clean, efficient code.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              My approach focuses on understanding client needs and delivering 
              solutions that exceed expectations. I believe in clear communication, 
              timely delivery, and building long-term relationships.
            </p>

            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-4xl font-bold text-white">50+</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider mt-1">Projects Done</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">40+</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white">6+</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider mt-1">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Column - Tech Stack & Experience */}
          <div>
            {/* Tech Stack */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 text-sm rounded hover:bg-white/10 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-white/20 pl-4">
                    <p className="text-white font-semibold">{exp.role}</p>
                    <p className="text-gray-400 text-sm">{exp.company} | {exp.period}</p>
                    <p className="text-gray-500 text-sm mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
