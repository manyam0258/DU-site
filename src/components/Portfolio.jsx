
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'hospitality', label: 'Hospitality' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Penthouse',
      category: 'residential',
      location: 'Manhattan, NY',
      description: 'Luxury penthouse with panoramic city views and contemporary design.',
      image: 'Stunning modern penthouse with floor-to-ceiling windows and contemporary furniture',
      tags: ['Luxury', 'Modern', 'City Views']
    },
    {
      id: 2,
      title: 'Boutique Hotel Lobby',
      category: 'hospitality',
      location: 'Miami, FL',
      description: 'Elegant hotel lobby design with tropical modern aesthetic.',
      image: 'Elegant boutique hotel lobby with tropical modern design and luxurious seating',
      tags: ['Hospitality', 'Tropical', 'Luxury']
    },
    {
      id: 3,
      title: 'Tech Startup Office',
      category: 'commercial',
      location: 'San Francisco, CA',
      description: 'Creative workspace designed to inspire innovation and collaboration.',
      image: 'Modern tech startup office with creative workspace and collaborative areas',
      tags: ['Tech', 'Creative', 'Collaborative']
    },
    {
      id: 4,
      title: 'Coastal Villa',
      category: 'residential',
      location: 'Malibu, CA',
      description: 'Beachfront villa with organic materials and ocean-inspired design.',
      image: 'Beautiful coastal villa with ocean views and natural materials',
      tags: ['Coastal', 'Natural', 'Luxury']
    },
    {
      id: 5,
      title: 'Fine Dining Restaurant',
      category: 'hospitality',
      location: 'Chicago, IL',
      description: 'Sophisticated restaurant interior with warm, intimate atmosphere.',
      image: 'Sophisticated fine dining restaurant with warm lighting and elegant decor',
      tags: ['Restaurant', 'Intimate', 'Sophisticated']
    },
    {
      id: 6,
      title: 'Urban Loft',
      category: 'residential',
      location: 'Brooklyn, NY',
      description: 'Industrial loft conversion with modern amenities and artistic flair.',
      image: 'Industrial urban loft with exposed brick, modern amenities, and artistic elements',
      tags: ['Industrial', 'Urban', 'Artistic']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleViewProject = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleLike = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
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
            Our Latest
            <span className="gradient-text"> Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of stunning interior design projects that showcase our commitment to excellence and innovation.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover-lift"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img  
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <Button
                      onClick={handleViewProject}
                      size="sm"
                      className="bg-white/90 text-gray-900 hover:bg-white"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View
                    </Button>
                    <Button
                      onClick={handleLike}
                      size="sm"
                      variant="outline"
                      className="border-white/90 text-white hover:bg-white/90 hover:text-gray-900"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-amber-600 mb-3 font-medium">
                  {project.location}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            onClick={handleViewProject}
            size="lg"
            variant="outline"
            className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
