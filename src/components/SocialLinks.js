/* eslint-disable react/jsx-no-target-blank */
import { motion } from 'framer-motion'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { RiNewspaperFill } from 'react-icons/ri'

function SocialLinks() {
	const links = [
		{
			id: 1,
			child: (
				<>
					<span>GitHub</span>
					<AiFillGithub size={26} />
				</>
			),
			href: 'https://github.com/khanhleeee',
			style: 'rounded-tr-lg',
		},
		{
			id: 2,
			child: (
				<>
					<span>LinkedIn</span>
					<AiFillLinkedin size={26} />
				</>
			),
			href: 'https://www.linkedin.com/in/khanh-leee/',
		},
		{
			id: 3,
			child: (
				<>
					<span>Email</span>
					<MdEmail size={23} />
				</>
			),
			href: 'mailto:khanhleee.itvn@gmail.com',
		},
		{
			id: 4,
			child: (
				<>
					<span>Resume</span>
					<RiNewspaperFill size={23} />
				</>
			),
			style: 'rounded-br-lg',
			href: 'Resume_LeMaiKhanh_FrontEndDeveloper.pdf',
			download: true,
		},
	]

	const container = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.5,
			},
		},
	}

	const childVariants = {
		hidden: { x: -50, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
		},
	}

	return (
		<div className='flex-col top-[35%] left-0 fixed z-30'>
			<motion.ul initial='hidden' animate='visible' variants={container}>
				{links.map(({ id, href, child, download, style }) => (
					<li
						key={id}
						className={
							'hidden xl:flex justify-between items-center w-40 h-1/4 px-4 -translate-x-28 hover:translate-x-0 hover:rounded hover:bg-main-blue transition duration-500 bg-main-bg/80 z-20' +
							style
						}
						variants={childVariants}
					>
						<a
							href={href}
							download={download}
							target='_blank'
							className='flex font-robot font-medium py-2 justify-between items-center w-full text-main-white'
						>
							<>{child}</>
						</a>
					</li>
				))}
			</motion.ul>
		</div>
	)
}

export default SocialLinks
