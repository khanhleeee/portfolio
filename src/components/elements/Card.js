import { motion } from 'framer-motion'

function Card({ title, color = 'white', children }) {
	const childVariants = {
		hidden: { scale: 0, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
		},
	}

	return (
		<motion.div
			className={`flex justify-center items-center text-${color} border rounded-lg hover:shadow-md hover:shadow-white/50 hover:-translate-y-2 transition-all duration-300`}
			variants={childVariants}
		>
			<div
				className={`w-44 h-36 flex flex-col items-center justify-center rounded-sm md:shadow transition-shadow`}
			>
				{children}
				<h3 className='text-sm cursor-default text-white mt-4'>{title}</h3>
			</div>
		</motion.div>
	)
}

export default Card
