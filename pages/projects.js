import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const projects = [
  {
    title: 'Project 1 - Weather App',
    description: 'A sleek React weather app using Redux and external APIs.',
    image: '/images/weather.jpg',
  },
  {
    title: 'Project 2 - Movie App',
    description: 'A Spotify-like movie browsing app with hooks and props.',
    image: '/images/movie.jpg',
  },
  {
    title: 'Project 3 - Portfolio Website',
    description: 'A clean and responsive Next.js portfolio with server-side rendering.',
    image: '/images/pic3.jpg',
  },
];

const Projects = () => {
  return (
    <div>
      <Header />
      <main className="container py-5">
        <h1 className="display-4 text-center mb-5">My Projects</h1>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
