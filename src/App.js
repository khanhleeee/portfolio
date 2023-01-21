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
         <div className='hidden'>
            <div className='text-html-red text-js-yellow text-bs-purple text-or-red text-mg-green text-gray-500 text-react-blue'></div>
         </div>
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
