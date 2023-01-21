import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import {
   DiCss3,
   DiReact,
   DiJava,
   DiMongodb,
   DiMsqlServer,
} from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import {
   SiJavascript,
   SiTailwindcss,
   SiFirebase,
   SiOracle,
} from 'react-icons/si';
import { Fade } from 'react-reveal';

import Zoom from 'react-reveal/Zoom';

import Card from './elements/Card';

function Tech() {
   const technologies = [
      {
         Icon: AiFillHtml5,
         title: 'HTML',
         color: 'html-red',
      },
      {
         Icon: DiCss3,
         title: 'CSS',
         color: 'react-blue',
      },
      {
         Icon: SiJavascript,
         title: 'Javascript',
         color: 'js-yellow',
      },
      {
         Icon: FaBootstrap,
         title: 'Bootstrap',
         color: 'bs-purple',
      },
      {
         Icon: SiTailwindcss,
         title: 'Tailwind',
         color: 'react-blue',
      },
      {
         Icon: DiReact,
         title: 'ReactJS',
         color: 'react-blue',
      },
      {
         Icon: DiJava,
         title: 'Java',
      },
      {
         Icon: AiFillGithub,
         title: 'GitHub',
      },
      {
         Icon: DiMongodb,
         title: 'MongoDB',
         color: 'mg-green',
      },
      {
         Icon: SiFirebase,
         title: 'FireBase',
         color: 'js-yellow',
      },
      {
         Icon: SiOracle,
         title: 'Oracle',
         color: 'or-red',
      },
      {
         Icon: DiMsqlServer,
         title: 'Microsoft SQL Server',
         color: 'gray-500',
      },
   ];

   return (
      <div
         name='capabilities'
         className='min-h-screen px-2 md:px-20 pt-24 bg-gradient-to-b from-main-purple to-main-bg'
      >
         <Zoom>
            <div className='flex flex-col items-center'>
               <h3 className='relative font-robot inline-block text-2xl font-bold mb-8 before:content-[""] before:absolute before:-bottom-2 before:right-1/2 before:translate-x-1/2 before:w-4/5 before:h-1 before:bg-gradient-to-r before:from-main-blue before:to-main-pink before:rounded-3xl uppercase'>
                  capabilities
               </h3>
               <h4 className='mb-12'>
                  There are technologies I've worked with
               </h4>
            </div>
         </Zoom>

         <Fade bottom delay={1000}>
            <div className='grid grid-cols-2 md:gap-4 md:grid-cols-4 lg:grid-cols-7 place-content-center'>
               {technologies.map((item, i) => (
                  <Card
                     key={i}
                     title={item.title}
                     color={item.color}
                     width={item.width}
                     height={item.height}
                  >
                     <div className={`text-${item.color}`}>
                        <item.Icon
                           className={`w-20 h-20 p-2 mb-2 text-current`}
                        />
                     </div>
                  </Card>
               ))}
            </div>
         </Fade>
      </div>
   );
}

export default Tech;
