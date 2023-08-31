import { Routes, Route } from 'react-router-dom'

import { useState } from 'react'

import { ACTIVE_PAGES } from './shared/constants'

import FrontendDevPage from './pages/FrontendDev'
import VideoEditorPage from './pages/VideoEditor'
import NavBar from './components/NavBar'

function App() {
	const [activePage, setActivePage] = useState(ACTIVE_PAGES.HOME)

	return (
		<div className='app bg-main-bg overflow-hidden'>
			<div className='hidden'>
				<div className='text-red-500 text-yellow-400 text-purple-500 text-green-500 text-gray-500 text-blue-400 text-blue-500'></div>
			</div>
			<NavBar activePage={activePage} setActivePage={setActivePage} />
			<Routes>
				<Route
					exact='true'
					path='/portfolio'
					element={<FrontendDevPage setActivePage={setActivePage} />}
				/>
				<Route path='/videoeditor' element={<VideoEditorPage />} />
			</Routes>
		</div>
	)
}

export default App
