import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Product Manager at HealthTech',
    content: 'Working with John was an absolute pleasure. His attention to detail and problem-solving skills helped us deliver our healthcare application ahead of schedule. The code quality was exceptional and well-documented.',
    avatar: '/avatar1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO at MedInnovate',
    content: 'John\'s ability to understand complex healthcare requirements and translate them into clean, efficient code is impressive. He was instrumental in developing our patient portal, which has received excellent feedback from our users.',
    avatar: '/avatar2.jpg'
  },
  {
    id: 3,
    name: 'Dr. Emily Parker',
    role: 'Lead Physician at CarePlus',
    content: 'The medical dashboard John created has significantly improved our workflow. His understanding of both technical and healthcare aspects made him the perfect developer for this project. Highly recommended!',
    avatar: '/avatar3.jpg'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'CEO at HealthData Solutions',
    content: 'John built our data visualization platform that helps healthcare providers track patient outcomes. His work has been praised by both our technical team and medical professionals for its usability and reliability.',
    avatar: '/avatar4.jpg'
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="mb-4">
        <Quote className="w-8 h-8 text-primary/30" />
      </div>
      <p className="text-text/80 mb-6 flex-grow">"{testimonial.content}"</p>
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mr-4">
          <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-text">{testimonial.name}</h4>
          <p className="text-sm text-text/60">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-text/70 max-w-3xl mx-auto">
            Here's what people I've worked with have to say about my work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-text/70 mb-6">
            Interested in working together? I'd love to hear about your project.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-button-hover transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Get In Touch
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
