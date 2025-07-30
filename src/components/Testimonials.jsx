
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'Beverly Hills, CA',
      rating: 5,
      text: 'Luxe Interiors transformed our home beyond our wildest dreams. Their attention to detail and ability to understand our vision was remarkable. Every room feels like a work of art.',
      image: 'Professional headshot of satisfied female client Sarah Johnson'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO, Tech Innovations',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'The team redesigned our entire office space, creating an environment that truly inspires creativity and productivity. Our employees love coming to work now!',
      image: 'Professional headshot of satisfied male client Michael Chen'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Restaurant Owner',
      location: 'Miami, FL',
      rating: 5,
      text: 'From concept to completion, Luxe Interiors delivered exceptional results. Our restaurant has become the talk of the town, and reservations are booked months in advance.',
      image: 'Professional headshot of satisfied female client Emily Rodriguez'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Real Estate Developer',
      location: 'New York, NY',
      rating: 5,
      text: 'Working with Luxe Interiors on multiple projects has been a game-changer. Their designs consistently exceed expectations and add tremendous value to our properties.',
      image: 'Professional headshot of satisfied male client David Thompson'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Boutique Hotel Owner',
      location: 'Charleston, SC',
      rating: 5,
      text: 'The design team created a unique atmosphere that perfectly captures our brand identity. Guest reviews consistently praise the beautiful interiors and ambiance.',
      image: 'Professional headshot of satisfied female client Lisa Park'
    },
    {
      id: 6,
      name: 'Robert Williams',
      role: 'Private Collector',
      location: 'Aspen, CO',
      rating: 5,
      text: 'Their expertise in creating spaces that showcase art collections is unparalleled. Every piece in our home is displayed to perfection while maintaining livability.',
      image: 'Professional headshot of satisfied male client Robert Williams'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="gradient-text"> Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Luxe Interiors.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative hover-lift"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-amber-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img  
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                   src="https://images.unsplash.com/photo-1644424235476-295f24d503d9" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-amber-600">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '15+', label: 'Years Experience' },
              { number: '50+', label: 'Design Awards' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
