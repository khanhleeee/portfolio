import { forwardRef } from 'react'
import { motion } from 'framer-motion'

import Rainbow from '../assets/designs/rainbow.png'
import Pin from '../assets/designs/pin.png'

import Unet1 from '../assets/imgs/unet1.jpg'
import Unet2 from '../assets/imgs/unet2.jpg'
import Unet5 from '../assets/imgs/unet5.jpg'

import WC1 from '../assets/imgs/wc1.jpg'
import WC2 from '../assets/imgs/wc2.jpg'
import WC3 from '../assets/imgs/wc3.jpg'

import SC1 from '../assets/imgs/shecode1.jpg'
import SC2 from '../assets/imgs/shecode2.jpg'
import SC3 from '../assets/imgs/shecode3.jpg'
import SC4 from '../assets/imgs/shecode4.jpg'
import SC5 from '../assets/imgs/shecode5.png'

function Experience(props, ref) {
	return (
		<div ref={ref} id='experience' className='container mx-auto pt-44'>
			<div className='flex flex-col justify-center items-center xl:flex-row'>
				<div className='flex flex-col justify-center mb-8 items-center xl:justify-start'>
					<motion.div
						className='relative flex flex-col justify-center'
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h3 className='relative font-secondFont font-semibold text-4xl px-6 mb-6 xl:mr-40 z-20 tracking-wide uppercase xl:text-5xl xl:px-0'>
							Experience
						</h3>
						<p className='text-center xl:text-left'>
							Learn one new thing everyday
						</p>
						<img
							className='w-14 h-14 absolute -top-2 -right-10 xl:top-0 xl:right-24'
							src={Rainbow}
							alt=''
						/>
					</motion.div>
				</div>

				<div className='flex flex-col gap-10'>
					<motion.div
						className='relative bg-main-white flex w-[340px] h-[470px] justify-between items-center text-main-bg rounded-lg p-6 lg:flex lg:w-[820px] lg:h-[400px]'
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						viewport={{ once: true }}
					>
						<img
							className='w-20 h-20 absolute -top-10 -left-8 select-none z-10'
							src={Pin}
							alt=''
						/>
						<div className='w-full h-full flex flex-col items-center lg:flex-row lg:justify-center'>
							<div className='flex flex-col items-center lg:bottom-24 mb-4 z-10 lg:left-[310px] lg:absolute'>
								<span className='text-2xl font-bold text-main-orange'>
									Younet Media
								</span>
								<span className=''>March - May 2023</span>
							</div>
							<img
								className='absolute top-10 left-4 w-52 rounded-lg hidden lg:block'
								src={Unet1}
								alt=''
							/>
							<img
								className='absolute top-10 left-72 w-52 rounded-lg hidden lg:block'
								src={Unet2}
								alt=''
							/>
							<img
								className='w-64 h-fit rounded-lg lg:absolute lg:top-10 lg:right-6 lg:w-56'
								src={Unet5}
								alt=''
							/>
						</div>
					</motion.div>

					<motion.div
						className='relative bg-main-white flex w-[340px] h-[470px] justify-between items-center text-main-bg rounded-lg p-6 lg:flex lg:w-[820px] lg:h-[400px]'
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						viewport={{ once: true }}
					>
						<img
							className='w-20 h-20 absolute -top-10 -left-8 select-none z-10'
							src={Pin}
							alt=''
						/>
						<div className='w-full h-full flex flex-col items-center lg:flex-row lg:justify-center'>
							<div className='flex flex-col items-center lg:bottom-24 mb-4 z-10 lg:left-[270px] lg:absolute'>
								<span className='text-2xl font-bold text-main-orange'>
									Shecodes Hackathon
								</span>
								<span className=''>Oct 2023</span>
							</div>
							<img
								className='absolute top-10 left-4 w-56 rounded-lg hidden lg:block'
								src={SC4}
								alt=''
							/>
							<img
								className='absolute top-10 left-72 w-56 rounded-lg hidden lg:block'
								src={SC5}
								alt=''
							/>
							<div className='flex flex-col gap-2'>
								<img
									className='w-60 h-fit rounded-lg lg:absolute lg:top-10 lg:right-6 lg:w-56'
									src={SC2}
									alt=''
								/>
								<img
									className='w-60 h-fit rounded-lg lg:absolute lg:bottom-10 lg:right-6 lg:w-56'
									src={SC1}
									alt=''
								/>
							</div>
						</div>
					</motion.div>

					<motion.div
						className='relative bg-main-white flex w-[340px] h-[470px] justify-between items-center text-main-bg rounded-lg p-6 lg:flex lg:w-[820px] lg:h-[400px]'
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						viewport={{ once: true }}
					>
						<img
							className='w-20 h-20 absolute -top-10 -left-8 select-none z-10'
							src={Pin}
							alt=''
						/>
						<div className='w-full h-full flex flex-col items-center lg:flex-row lg:justify-center'>
							<div className='flex flex-col items-center lg:bottom-24 mb-4 z-10 lg:left-[300px] lg:absolute'>
								<span className='text-2xl font-bold text-main-orange'>
									Wecamp Batch 3
								</span>
								<span className=''>Sep - Dec 2023</span>
							</div>
							<img
								className='absolute top-10 left-4 w-56 rounded-lg hidden lg:block'
								src={WC1}
								alt=''
							/>
							<img
								className='absolute top-10 left-72 w-56 rounded-lg hidden lg:block'
								src={WC2}
								alt=''
							/>
							<img
								className='w-64 h-fit rounded-lg lg:absolute lg:top-10 lg:right-6 lg:w-56'
								src={WC3}
								alt=''
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default forwardRef(Experience)
