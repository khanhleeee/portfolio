/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function ProductCard({ product }) {
	const { img, title, duration, technologies, demo, code, desc, lastUpdated } =
		product

	const [updatedDate, setUpdatedDate] = useState(null)

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	}

	const handleFormatDate = (date) => {
		let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
		let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date)

		return `${month} ${year}`
	}

	useEffect(() => {
		if (lastUpdated) {
			const date = new Date(lastUpdated)

			const diff_in_time = new Date().getTime() - date.getTime()
			const diff_in_days = Math.floor(diff_in_time / (1000 * 3600 * 24))

			if (diff_in_days === 0) {
				setUpdatedDate('now')
			} else if (diff_in_days <= 7) {
				setUpdatedDate(`${diff_in_days} days`)
			} else {
				setUpdatedDate(handleFormatDate(date))
			}
		}
	}, [])

	return (
		<motion.div className=' p-4 rounded-md' variants={item}>
			<div
				style={{ backgroundImage: `url(${img})` }}
				className='w-full h-[150px] bg-cover rounded border border-main-white'
			/>
			<div className='relative mt-2 py-2 w-full flex flex-col justify-between'>
				<div className='border-b-main-white h-[120px] border-b-2 p-2 pb-4 flex flex-col justify-start lg:h-[200px]'>
					<div className='mb-1 flex-1'>
						<h4 className='text-lg font-semibold'>{title}</h4>
						<span className='text-sm py-1 hidden lg:block opacity-80 mb-4'>
							{technologies}
						</span>
						<span>{desc}</span>
					</div>
					<div className='flex flex-col'>
						<span className='text-right text-sm font-semibold'>
							{duration}
						</span>
						{updatedDate && (
							<span className='text-right text-sm text-white/60 mt-2'>
								Last updated: {updatedDate}
							</span>
						)}
					</div>
				</div>

				<div className='flex mt-4 font-semibold'>
					<a
						className='bg-main-orange px-4 rounded-r-lg rounded-b-lg hover:scale-105 origin-top-left transition-transform'
						href={code}
						target='_blank'
					>
						Code
					</a>
					{demo && (
						<a
							className='bg-main-white text-main-bg px-4 ml-4 rounded-r-lg rounded-b-lg hover:scale-105 origin-top-left transition-transform'
							href={demo}
							target='_blank'
						>
							Demo
						</a>
					)}
				</div>
			</div>
		</motion.div>
	)
}

export default ProductCard
