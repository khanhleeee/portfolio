/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from 'react'

import Home from '../components/Home'
import SocialLinks from '../components/SocialLinks'
import Education from '../components/Education'
import Tech from '../components/Tech'
import Product from '../components/Product'
import Footer from '../components/Footer'
import Experience from '../components/Experience'

import { ACTIVE_PAGES } from '../shared/constants'

const homeLimitedHeight = 640
const educationimitedHeight = 1300
const experienceLimitedHeight = 1843
const projectLimitedHeight = 3039

const FrontendDev = ({ setActivePage }) => {
	const homeRef = useRef(null)
	const educRef = useRef(null)
	const experienceRef = useRef(null)
	const productRef = useRef(null)
	const techRef = useRef(null)

	useEffect(() => {
		const handleScrollEnterView = () => {
			let windowScrollY = window.scrollY

			if (windowScrollY === 0 && windowScrollY < homeLimitedHeight) {
				setActivePage(ACTIVE_PAGES.HOME)
			} else if (
				windowScrollY >= homeLimitedHeight &&
				windowScrollY < educationimitedHeight
			) {
				setActivePage(ACTIVE_PAGES.EDUCATION)
			} else if (
				windowScrollY > educationimitedHeight &&
				windowScrollY < experienceLimitedHeight
			) {
				setActivePage(ACTIVE_PAGES.EXPERIENCE)
			} else if (
				windowScrollY >= experienceLimitedHeight &&
				windowScrollY < projectLimitedHeight
			) {
				setActivePage(ACTIVE_PAGES.PROJECT)
			} else if (windowScrollY >= projectLimitedHeight) {
				setActivePage(ACTIVE_PAGES.CAPABILITIES)
			}
		}

		window.addEventListener('scroll', handleScrollEnterView)

		return () => {
			window.removeEventListener('scroll', handleScrollEnterView)
		}
	}, [])

	return (
		<div>
			<SocialLinks />
			<Home ref={homeRef} />
			<Education ref={educRef} />
			<Experience ref={experienceRef} />
			<Product ref={productRef} />
			<Tech ref={techRef} />
			<Footer />
		</div>
	)
}

export default FrontendDev
