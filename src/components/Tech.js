/* eslint-disable jsx-a11y/alt-text */
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

import { AiFillHtml5 } from 'react-icons/ai'
import {
	DiCss3,
	DiReact,
	DiJava,
	DiMongodb,
	DiMsqlServer,
	DiJavascript1,
} from 'react-icons/di'
import { FaBootstrap } from 'react-icons/fa'
import { SiTailwindcss, SiFirebase, SiTypescript } from 'react-icons/si'

import Card from './elements/Card'
import Flower from '../assets/designs/flower.png'
import { MUIIcon } from '../icons'
import FigmaIcon from '../assets/tools/figma_icon.svg'

function Tech(props, ref) {
	const technologies = [
		{
			Icon: AiFillHtml5,
			title: 'HTML',
			color: 'red-500',
		},
		{
			Icon: DiCss3,
			title: 'CSS',
			color: 'blue-400',
		},
		{
			Icon: DiJavascript1,
			title: 'Javascript',
			color: 'yellow-400',
		},
		{
			Icon: SiTypescript,
			title: 'Typescript',
			color: 'blue-500',
		},
		{
			Icon: DiReact,
			title: 'ReactJS',
			color: 'blue-500',
		},
		{
			Icon: FaBootstrap,
			title: 'Bootstrap',
			color: 'purple-500',
		},
		{
			Icon: SiTailwindcss,
			title: 'Tailwind',
			color: 'blue-400',
		},
		{
			Icon: MUIIcon,
			title: 'Material UI',
		},
		{
			Icon: DiJava,
			title: 'Java',
		},
		{
			Icon: DiMsqlServer,
			title: 'MSSQL',
		},
		{
			Icon: DiMongodb,
			title: 'MongoDB',
			color: 'green-500',
		},
		{
			Icon: SiFirebase,
			title: 'FireBase',
			color: 'yellow-400',
		},
		{
			imgSrc: FigmaIcon,
			title: 'Figma',
			color: 'yellow-400',
		},
	]

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.2,
			},
		},
	}

	return (
		<div
			ref={ref}
			id='capabilities'
			className='container mx-auto max-h-fit flex flex-col justify-center items-center pt-52 pb-48'
		>
			<div>
				<motion.div
					className='flex flex-col justify-center items-center mb-10'
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<div className='relative'>
						<h3 className='relative z-10 font-secondFont font-semibold text-4xl tracking-wide py-2 uppercase mb-4 lg:text-5xl'>
							capabilities
						</h3>
						<img
							className='absolute -top-6 -right-6 w-14 lg:w-20 lg:-right-12 lg:-top-10'
							src={Flower}
							alt=''
						/>
					</div>
					<span className='text-sm text-center mb-4'>
						There are technologies & tools I've worked with
					</span>
				</motion.div>
				<motion.div
					className='grid place-content-center grid-cols-2 gap-x-8 gap-y-10 md:px-4 md:grid-cols-4 md:gap-x-4 xl:grid-cols-5 max-w-[400px]:grid-cols-1'
					initial='hidden'
					whileInView='visible'
					variants={container}
					viewport={{ once: true }}
				>
					{technologies.map(({ Icon, imgSrc, title, color }) => (
						<Card key={title} title={title} color={color}>
							<div className={`text-${color}`}>
								{Icon && <Icon className='w-10 h-10 text-inherit' />}
								{imgSrc && <img className='w-8' src={imgSrc} />}
							</div>
						</Card>
					))}
				</motion.div>
			</div>
		</div>
	)
}

export default forwardRef(Tech)
