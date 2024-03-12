// import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Project from '../components/Project';
import Profil from '../components/Profil';
import Providers from './Providers';

export default function Home() {
  return (
    <>
      <Providers>
        <div className="slider-thumb"></div>
        <Navbar />
        <section>
          <Project />
          {/* <Profil /> */}
        </section>
        {/* <Footer /> */}
      </Providers>
    </>
  );
}
