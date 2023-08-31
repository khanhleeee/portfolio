import { motion } from 'framer-motion'

import HuflitNameTag from '../assets/designs/nametags2.png'
import Heart from '../assets/designs/heart.png'
import { forwardRef } from 'react'

function About(props, ref) {
	const educations = [
		{
			title: 'GPA',
			amount: '8.65',
			subDesc: '2019-2023',
		},
		{
			title: 'TOIEC (L&R)',
			amount: '800',
			subDesc: '2023',
		},
	]

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.4,
			},
		},
	}

	return (
		<div ref={ref} id='eduction' className='flex flex-col items-center pt-48'>
			<div>
				<div className='flex flex-col items-center'>
					<motion.div
						className='relative'
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h3 className='relative font-secondFont font-semibold text-4xl mb-14 z-20 tracking-wide xl:text-5xl'>
							EDUCATION
						</h3>
						<img
							className='absolute w-36 -top-7 -left-8'
							src={HuflitNameTag}
							alt=''
						/>
						<img
							className='absolute w-24 bottom-2 -right-14'
							src={Heart}
							alt=''
						/>
					</motion.div>
				</div>
				<motion.div
					className='flex flex-col justify-between items-center px-8 md:flex-row'
					initial='hidden'
					whileInView='visible'
					variants={container}
					viewport={{ once: true }}
				>
					{educations.map((item, i) => (
						<EducCard key={i} item={item} />
					))}
				</motion.div>
			</div>
		</div>
	)
}

const EducCard = ({ item }) => {
	const { title, amount, subDesc } = item
	const childVariants = {
		hidden: { x: 50, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
		},
	}

	return (
		<motion.div
			className='bg-main-white text-main-bg h-[300px] w-[210px] text-center mx-24 mb-6 p-4 rounded-md xl:h-[320px] xl:w-[230px] xl:mx-32'
			variants={childVariants}
		>
			<div className='bg-main-orange w-full px-10 pt-3 pb-10 mt-2 mb-6 rounded-md shadow-md'>
				<h3 className='flex justify-center text-center font-secondFont pt-2'>
					{title}
				</h3>
				<span className='flex justify-center items-center font-robot py-8 font-bold text-4xl'>
					{amount}
				</span>
			</div>
			<div className='font-bold text-center mt-10'>{subDesc}</div>
		</motion.div>
	)
}

export default forwardRef(About)
