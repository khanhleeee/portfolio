import { BlurryCircle } from './Elements';

function MainBackground({ children }) {
   return (
      <div className='relative min-h-screen'>
         {children}
      </div>
   );
}

export default MainBackground;
