import Navbar from '@/components/Navbar';
import Hero from '../components/hero/hero';
import AboutMe from '@/components/about me/AboutMe';
import Service from '@/components/services/service';

export default function Home() {
  return (
    <div className=" mt-5">
      <Navbar pageName="home" />
      <Hero />
      <AboutMe />
      <Service />
    </div>
  );
}
