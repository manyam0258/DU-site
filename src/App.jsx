import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header.jsx';
import Hero from '@/components/Hero.jsx';
import About from '@/components/About.jsx';
import Services from '@/components/Services.jsx';
import Portfolio from '@/components/Portfolio.jsx';
import Testimonials from '@/components/Testimonials.jsx';
import Contact from '@/components/Contact.jsx';
import Footer from '@/components/Footer.jsx';

function App() {
  return (
    <>
      <Helmet>
        <title>Design Universe - Premium Interior Design & Architecture</title>
        <meta name="description" content="Transform your space with Design Universe. Award-winning interior design and architecture firm specializing in luxury residential and commercial projects." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;