import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Tech from './components/Tech';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {
   return (
      <div>
         <NavBar />
         <SocialLinks />
         <Home />
         <About />
         <Product />
         <Tech />
         <Footer />
      </div>
   );
}

export default App;
