import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      
      <main style={{ padding: '40px 20px' }}>
        <div className="container">
          <h1 className="text-center mb-4">Contact Us</h1>
          <p className="text-center mb-5">If you have any questions, please reach out to us using the form below.</p>

          <form className="mx-auto" style={{ maxWidth: '600px' }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" id="name" name="name" className="form-control" placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea id="message" name="message" className="form-control" rows="4" placeholder="Type your message here..." required />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-4">Send Message</button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
