import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import MainPage from './pages/MainPage.jsx'
// import Header from './components/Header.jsx'
import CourseInput from './components/CourseInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   <CourseInput/>
  </StrictMode>,
)
