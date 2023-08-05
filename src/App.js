import React from 'react';
import './App.css';
import Sidebar from './component/sidebar/Sidebar';
import Home from './component/home/Home';
import About from './component/about/About';
import Services from './component/services/Services';
import Resume from './component/resume/Resume';
import Portfolio from './component/portfolio/Portfolio';
import Pricing from './component/pricing/Pricing';
import Testimonials from './component/testimonials/Testimonials';
import Blog from './component/blog/Blog';
import Contact from './component/contact/Contact';

const App = () => {
  return (
<>
<Sidebar />
<main className='main'>
  <Home />
  <About />
  <Services />
  <Resume />
  <Portfolio />
  <Pricing />
  <Testimonials />
  <Blog />
  <Contact />
</main>
</>  
)
}

export default App;