import { Footer, Navbar } from '../components';
import People from '../sections/people';

const Team = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <People />
    <Footer />
  </div>
);

export default Team;
