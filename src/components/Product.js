import { forwardRef } from 'react'
import { motion } from 'framer-motion'

import ProductCard from './elements/ProductCard'
import jsFormValid from '../assets/products/form-validation.png'
import jsMusicPlayer from '../assets/products/music-player.png'
import reactOnMovie from '../assets/products/onmovie.png'
import nodeEcommerce from '../assets/products/ecommerce.png'
import androidOnMovrom from '../assets/products/onMovieApp.png'
import nodeHotel from '../assets/products/hotel.png'
import reactPortfolio from '../assets/products/portfolio.png'
import tsFitnessApp from '../assets/products/tsFitnessApp.png'
import reactTrelloWeb from '../assets/products/reactTrelloWeb.png'
import journelJotter from '../assets/products/journel_jotter.png'

import SmileFace from '../assets/designs/smileface.png'

function Product(props, ref) {
	const products = [
		{
			img: journelJotter,
			title: 'Journel Jotter',
			technologies:
				'ReactJS, Material Tailwind, ExpressJS, PostgreSQL, graphQL,..',
			duration: 'Nov 2023 - Coming soon',
			desc: 'Travel planning & journaling',
			code: 'https://github.com/Capstone-Travel-Planning-Journaling/travel-planning_FE',
			// demo: 'https://khanhleeee.github.io/portfolio/',
			lastUpdated: '2023-11-17',
		},
		{
			img: reactPortfolio,
			title: 'Kas Portfolio',
			technologies: 'ReactJS, TailwindCSS',
			duration: 'May - June 2023',
			desc: 'A personal portfolio',
			code: 'https://github.com/khanhleeee/portfolio',
			demo: 'https://khanhleeee.github.io/portfolio/',
			lastUpdated: '2023-08-31',
		},
		{
			img: tsFitnessApp,
			title: 'Fitness Application',
			technologies: 'ReactJS, Typescript, TailwindCSS',
			duration: 'Aug 2023',
			desc: 'A small pratice typescript from online course by EdRoh',
			code: 'https://github.com/khanhleeee/ts-fitness',
			demo: 'https://ts-fitness-1kv.pages.dev',
		},
		{
			img: reactTrelloWeb,
			title: 'Trello Web',
			technologies: 'Vite, ReactJS, NodeJS, MUI',
			duration: 'Coming soon',
			desc: 'A clone trello from online course by TrungQuanDev',
			code: 'https://github.com/khanhleeee/trello-web',
			lastUpdated: '2023-08-29',
		},
		{
			img: androidOnMovrom,
			title: 'OnMovie Application',
			technologies: 'Java, FireBase Database',
			duration: 'Sep - Dec 2022',
			desc: 'A streaming movies application',
			code: 'https://github.com/khanhleeee/android-java-onmovie',
		},
		{
			img: reactOnMovie,
			title: 'OnMovie Website',
			technologies: 'HTML, SASS, ReactJS, NodeJS, MSSQL',
			duration: 'Sep - Dec 2022',
			desc: 'A streaming movies website with 2 side (client- admin)',
			code: 'https://github.com/khanhleeee/react-onmovie',
		},
		{
			img: nodeEcommerce,
			title: 'Glamorous Ecommerce',
			technologies: 'HTML, Bootstrap 4, NodeJS, MongoDB',
			duration: 'March - May 2022',
			desc: 'A jelwery ecommerce website with 2 side (client - admin)',
			code: 'https://github.com/khanhleeee/nodejs_ecommerce_website',
		},
		{
			img: nodeHotel,
			title: 'Parallel Shine Hotel',
			technologies: 'HTML, CSS, NodeJS, MongoDB',
			duration: 'March - May 2022',
			desc: 'A hotel website with 2 side (client - admin)',
			code: 'https://github.com/khanhleeee/nodejs_hotel_website',
		},
		{
			img: jsFormValid,
			title: 'Form validation',
			technologies: 'HTML, CSS, Javascript',
			roles: 'Front-end developer',
			duration: 'Jul 2022',
			desc: 'A small pratice about sign-up form validation',
			code: 'https://github.com/khanhleeee/js-form-validation',
			demo: 'https://khanhleeee.github.io/js-form-validation/',
		},
		{
			img: jsMusicPlayer,
			title: 'Music player',
			technologies: 'HTML, CSS, Javascript',
			duration: 'Jun 2022',
			desc: 'A small pratice about music player',
			code: 'https://github.com/khanhleeee/js_music_player',
			demo: 'https://khanhleeee.github.io/js_music_player/',
		},
	]

	const container = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			tranlateY: 0,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	}

	return (
		<div
			ref={ref}
			id='projects'
			className='container mx-auto flex flex-col justify-center items-center px-14 pt-40'
		>
			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={container}
				viewport={{ once: true }}
			>
				<div className='relative flex flex-col justify-center items-center'>
					<div className='relative flex items-center justify-center'>
						<h3 className='font-secondFont font-semibold text-4xl tracking-wide py-2 xl:text-5xl lg:mb-10'>
							PROJECTS
						</h3>
						<img
							className='absolute w-28 mt-2 -top-[74px] -right-10 rotate-[26deg] sm:w-32 sm:-top-20 sm:-right-20 xl:-top-8 xl:-right-28'
							src={SmileFace}
							alt=''
						/>
					</div>
				</div>
				<div className='grid grid-cols-1 gap-14 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6'>
					{products.map((product, i) => {
						return <ProductCard key={i} product={product} />
					})}
				</div>
			</motion.div>
		</div>
	)
}

export default forwardRef(Product)
