
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building, Palette, Lightbulb, Sofa, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Complete home transformations from concept to completion, creating personalized living spaces.',
      features: ['Full home design', 'Room makeovers', 'Kitchen & bath remodels', 'Custom furniture'],
      image: 'Beautiful residential living room with custom furniture and elegant design elements'
    },
    {
      icon: Building,
      title: 'Commercial Spaces',
      description: 'Professional environments that enhance productivity and reflect your brand identity.',
      features: ['Office design', 'Retail spaces', 'Restaurants & hotels', 'Healthcare facilities'],
      image: 'Modern commercial office space with professional design and branding elements'
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Expert color schemes that create the perfect mood and atmosphere for your space.',
      features: ['Color psychology', 'Paint selection', 'Accent coordination', 'Lighting integration'],
      image: 'Color palette consultation with paint samples and design materials'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Innovative lighting solutions that enhance ambiance and functionality.',
      features: ['Ambient lighting', 'Task lighting', 'Accent features', 'Smart home integration'],
      image: 'Sophisticated lighting design with ambient and accent lighting features'
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Curated furniture pieces that perfectly complement your design aesthetic.',
      features: ['Custom pieces', 'Vintage finds', 'Modern classics', 'Space planning'],
      image: 'Curated furniture selection with modern and classic pieces in showroom'
    },
    {
      icon: TreePine,
      title: 'Outdoor Living',
      description: 'Extend your living space outdoors with beautiful and functional design solutions.',
      features: ['Patio design', 'Garden planning', 'Outdoor kitchens', 'Landscape integration'],
      image: 'Beautiful outdoor living space with patio design and landscape integration'
    }
  ];

  const handleLearnMore = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="services" className="py-20 bg-white">
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
            Our Design
            <span className="gradient-text"> Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive design services tailored to your unique vision and lifestyle needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-lift"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img  
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-amber-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={handleLearnMore}
                  variant="outline"
                  className="w-full border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-8 md:p-12">
            <h3 className="font-display text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a design plan that brings your dream space to life.
            </p>
            <Button
              onClick={handleLearnMore}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
