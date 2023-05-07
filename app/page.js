import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden snap-mandatory snap-y">
    <div className="snap-mandatory snap-y relative">
      <Navbar />
      <Hero />
    </div>
    <div className="snap-mandatory snap-y relative">
      <About />
        <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="snap-mandatory snap-y relative">
      <GetStarted />
        <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>

    <World />

    <div className="snap-mandatory snap-y relative">
      <Insights />
        <div className="gradient-04 z-0" />
      <Feedback />
    </div>

    <Footer />
  </div>

);

export default Page;
