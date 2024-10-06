import { Footer, Navbar } from '../components';
import { About, GetStarted, WhatsNew } from '../sections';

const Challenge = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <Footer />
  </div>
);

export default Challenge;
