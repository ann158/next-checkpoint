import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/global.css'; // Import global styles
import '../styles/Home.module.css'; // Import home page styles

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; // Renders the page components
}

export default MyApp;
