import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function About() {
   const educations = [
      {
         title: 'GPA out of 4',
         amount: '3.75',
         subDesc: '2019-2022',
      },
      // {
      //    title: 'Complete online courses (F8 Official)',
      //    amount: '3',
      //    subDesc: 'HTML-CSS, Javascript, ReactJS',
      // },
   ];

   return (
      <div
         name='eduction'
         className='bg-[#0e0822] flex flex-col items-center pb-10 pt-24'
      >
         <Zoom>
            <div className='flex flex-col items-center'>
               <h3 className='relative font-robot inline-block text-2xl font-bold mb-8 before:content-[""] before:absolute before:-bottom-2 before:right-1/2 before:translate-x-1/2 before:w-4/5 before:h-1 before:bg-gradient-to-r before:from-main-blue before:to-main-pink before:rounded-3xl'>
                  EDUCATION
               </h3>
               <h4 className='mb-12'>
                  Some of my achievements
               </h4>
            </div>
         </Zoom>
         <Fade left delay={1000}>
            <div className='flex flex-col md:flex-row justify-center items-center px-8'>
               {educations.map((item, i) => (
                  <EducCard key={i} item={item} />
               ))}
            </div>
         </Fade>
      </div>
   );
}

const EducCard = ({ item }) => {
   const { title, amount, subDesc } = item;
   return (
      <div className='w-60 h-72 mx-8 my-4 md:my-0 select-none flex flex-col justify-between bg-gray-700/30 px-6 py-6 rounded-lg shadow-md shadow-white hover:shadow-lg hover:shadow-white transition-shadow border'>
         <h3 className='flex justify-center font-md font-mono text-center'>
            {title}
         </h3>
         <span className='flex justify-center items-center font-robot py-8 font-bold text-6xl'>
            {amount}
         </span>
         <span className='font-mono font-thin text-center'>
            {subDesc}
         </span>
      </div>
   );
};

export default About;
