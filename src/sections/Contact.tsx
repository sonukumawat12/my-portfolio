import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      // Replace with your form submission logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      
      // Reset error message after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: 'Email Me',
      value: 'john.doe@example.com',
      link: 'mailto:john.doe@example.com'
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: 'https://maps.google.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: 'Call Me',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-text/70 max-w-3xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <p className="text-text/80 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-text">{item.title}</h4>
                    <p className="text-text/60 group-hover:text-primary transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-lg mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', url: 'https://github.com' },
                  { name: 'LinkedIn', url: 'https://linkedin.com' },
                  { name: 'Twitter', url: 'https://twitter.com' },
                  { name: 'Dribbble', url: 'https://dribbble.com' },
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text/60 hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {social.name === 'GitHub' && (
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482C21.14 20.201 24 16.425 24 12.017 24 6.484 19.522 2 12 2z" clipRule="evenodd" />
                      )}
                      {social.name === 'LinkedIn' && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      )}
                      {social.name === 'Twitter' && (
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      )}
                      {social.name === 'Dribbble' && (
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10 5.52 0 10-4.48 10-10 0-5.52-4.48-10-10-10zm0 2c4.41 0 8 3.59 8 8 0 4.41-3.59 8-8 8s-8-3.59-8-8 3.59-8 8-8zm-2 3.5c-.28 0-.5.22-.5.5v.5c0 .28.22.5.5.5s.5-.22.5-.5V8c0-.28-.22-.5-.5-.5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            {formStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                Oops! Something went wrong. Please try again later.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text/80 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text/80 mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text/80 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text/80 mb-2">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-200 resize-none"
                  placeholder="Hi John, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-button-hover transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
