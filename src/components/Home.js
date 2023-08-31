import { forwardRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

import Avatar from '../assets/avatar_home.png'

import SmileFace from '../assets/designs/smileface.png'
import Flower from '../assets/designs/flower.png'
import Music from '../assets/designs/music.png'
import NameTag from '../assets/designs/nametags1.png'

function Home(props, ref) {
	return (
		<div id='home' ref={ref} className='container mx-auto pt-32 lg:pt-44'>
			<div>
				<div className='h-full flex flex-col justify-center lg:flex-row'>
					<div className='text-center lg:text-left xl:mr-20 lg:mr-28 lg:mt-14'>
						<h1
							style={{ whiteSpace: 'pre-line' }}
							className='font-secondFont leading-normal text-[42px] mb-4 md:text-[50px] xl:mb-8 xl:text-6xl xl:leading-normal tracking-wide'
						>
							<TypeAnimation
								sequence={['Hi! I am']}
								wrapper='span'
								speed={20}
								deletionSpeed={70}
								cursor={false}
							/>
							<TypeAnimation
								sequence={[800, ' Khánh']}
								wrapper='span'
								className='font-black'
								speed={20}
								deletionSpeed={70}
								cursor={false}
							/>
							<TypeAnimation
								sequence={[1600, '\nA Frontend Developer']}
								wrapper='span'
								speed={20}
								deletionSpeed={70}
								cursor={false}
							/>
						</h1>
						<motion.p
							className='mr-0 mb-8 px-10 text-[12px] leading-loose md:leading-loose md:text-sm lg:max-w-[460px] lg:px-0 md:text-[13px] xl:max-w-[600px] lg:mb-0'
							initial='hidden'
							animate='visible'
							variants={{
								hidden: { opacity: 0, x: -100 },
								visible: { opacity: 1, x: 0 },
							}}
							transition={{ duration: 1, delay: 3 }}
							viewport={{ once: true }}
						>
							I am a fresh graduate of Information Technology from the Ho
							Chi Minh University of Foreign Languages and Information
							Technology. With a passion for web development and design,
							I am seeking an entry-level frontend developer position to
							learn and utilize my skills to make meaningful
							contributions.
						</motion.p>
					</div>
					<motion.div
						className='flex justify-center align-bottom'
						initial='hidden'
						animate='visible'
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<div className='relative w-[300px] md:w-[380px] px-4 xl:w-[440px]'>
							<img src={Avatar} alt='avatar' />
							<img
								className='w-[150px] absolute top-4 -left-16 animate-bounce-slow lg:w-[180px]'
								src={SmileFace}
								alt=''
							/>
							<img
								className='w-[100px] absolute -top-12 left-2/4 animate-bounce-slow lg:w-[110px]'
								src={Flower}
								alt=''
							/>
							<img
								className='w-[100px] absolute top-28 -right-6 animate-bounce-slow lg:w-[110px]'
								src={Music}
								alt=''
							/>
							<img
								className='hidden w-[110px] absolute bottom-4 -left-24 md:block'
								src={NameTag}
								alt=''
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default forwardRef(Home)
