import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import MainPage from './pages/MainPage.jsx'
// import Header from './components/Header.jsx'
import CourseInput from './components/CourseInput.jsx'
import CourseInstanceInput from './components/CourseInstanceInput.jsx'

import SemesterInput from './components/SemesterInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <CourseInput />
    <CourseInstanceInput />
    {/* <SemesterInput/> */}
  </StrictMode>,
)
