
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <main className="container mt-5">
        <h1 className="display-4">About Me</h1>
        <p>I am Ann Kwamboka, a Software developer student and passionate developer.</p>
        <p>I am currently learning React and Next.js.</p>
        <p>My goal is to make meaningful contributions through technology.</p>
        <p>In my free time, I enjoy reading books and exploring new technologies.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
