/* eslint-disable react/jsx-no-target-blank */
import { motion } from 'framer-motion'

import { BsFillSuitHeartFill } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function Footer() {
	return (
		<div className='bg-main-bg text-center md:text-left px-10 md:px-36 py-4 '>
			<div className='flex flex-col py-10 md:py-0 md:flex-row md:justify-between'>
				<motion.div
					initial='hidden'
					whileInView='visible'
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<h3 className='font-robot font-bold text-3xl mb-4'>
						Lê Mai Khánh
					</h3>
					<ul>
						<li className='py-2'>
							<span>Email: </span>
							<a
								className='font-mono transition-opacity hover:opacity-80'
								href='mailto:khanhleee.itvn@gmail.com'
							>
								khanhleee.itvn@gmail.com
							</a>
						</li>
					</ul>
				</motion.div>
				<motion.div
					className='flex justify-center mt-8 md:mt-0'
					initial='hidden'
					whileInView='visible'
					variants={{
						hidden: { opacity: 0, x: 50 },
						visible: { opacity: 1, x: 0 },
					}}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<a
						className='p-2 hover:opacity-80 transition-opacity'
						target='_blank'
						href='https://www.facebook.com/khanhlee.kas/'
					>
						<FaFacebookSquare size={32} />
					</a>
					<a
						className='p-2 hover:opacity-80 transition-opacity'
						target='_blank'
						href='https://www.instagram.com/__kaslee__/'
					>
						<AiFillInstagram size={34} />
					</a>
					<a
						className='p-2 hover:opacity-80 transition-opacity'
						target='_blank'
						href='https://github.com/khanhleeee'
					>
						<AiFillGithub size={34} />
					</a>
					<a
						className='p-2 hover:opacity-80 transition-opacity'
						target='_blank'
						href='https://www.linkedin.com/in/khanh-leee/'
					>
						<AiFillLinkedin size={32} />
					</a>
				</motion.div>
			</div>

			<motion.span
				className='flex justify-center pt-16 pb-32 md:pt-28 md:pb-40'
				initial='hidden'
				whileInView='visible'
				variants={{
					hidden: { opacity: 0, y: 20 },
					visible: { opacity: 1, y: 0 },
				}}
				transition={{ duration: 0.3, delay: 0.2 }}
				viewport={{ once: true }}
			>
				Make with
				<BsFillSuitHeartFill className='mx-2 text-red-600' size={18} />
				Powered by Kas
			</motion.span>
		</div>
	)
}

export default Footer
