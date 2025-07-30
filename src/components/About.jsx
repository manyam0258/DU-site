
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Design',
      description: 'Recognized excellence in interior design with multiple industry awards and accolades.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Talented designers, architects, and project managers dedicated to your vision.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Creative approaches that blend functionality with stunning aesthetic appeal.'
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      description: 'Every project is tailored to reflect your unique style and lifestyle needs.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Creating Spaces That
              <span className="gradient-text block">Inspire & Delight</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For over 15 years, Luxe Interiors has been transforming ordinary spaces into extraordinary experiences. Our passion for design excellence and commitment to client satisfaction has made us the premier choice for discerning homeowners and businesses.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that great design is more than just aesthetics—it's about creating environments that enhance your daily life, reflect your personality, and bring joy to every moment spent in your space.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img  
                  alt="Modern kitchen with marble countertops and gold accents"
                  className="w-full h-64 object-cover rounded-lg hover-lift"
                 src="https://images.unsplash.com/photo-1582913130063-8318329a94a3" />
                <img  
                  alt="Luxurious bedroom with plush bedding and ambient lighting"
                  className="w-full h-48 object-cover rounded-lg hover-lift"
                 src="https://images.unsplash.com/photo-1616594092403-fb65629b0a46" />
              </div>
              <div className="space-y-4 pt-8">
                <img  
                  alt="Stylish bathroom with modern fixtures and natural stone"
                  className="w-full h-48 object-cover rounded-lg hover-lift"
                 src="https://images.unsplash.com/photo-1650894622580-04d8c978f8c8" />
                <img  
                  alt="Cozy reading nook with comfortable seating and warm lighting"
                  className="w-full h-64 object-cover rounded-lg hover-lift"
                 src="https://images.unsplash.com/photo-1625482631914-75c43d421c65" />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-600/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
