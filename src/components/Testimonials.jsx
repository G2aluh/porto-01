const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Alex delivered exceptional work on our website redesign. The attention to detail and creative solutions exceeded our expectations. Highly recommended!',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      content: 'Working with Alex was a pleasure. Professional, responsive, and incredibly talented. Our new brand identity has received amazing feedback from customers.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Artisan Shop',
      content: 'The e-commerce platform Alex built for us has transformed our business. Sales are up 150% and customers love the new experience.',
      avatar: 'ER'
    },
    {
      name: 'David Park',
      role: 'Product Manager, InnovateLab',
      content: 'Alex\'s UI/UX skills are top-notch. The dashboard design improved our user engagement significantly. Will definitely work together again.',
      avatar: 'DP'
    }
  ];

  return (
    <section
      id="testimonials"
      className="section flex items-center bg-black relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-zinc-950 border border-white/10 hover:border-white/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <svg
                className="w-10 h-10 text-white/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div className="ml-4">
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
