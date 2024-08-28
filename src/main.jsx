import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Header from './components/Header.jsx'
import CourseInstanceTable from './components/CourseTable.jsx'
import Topbar from './components/Topbar.jsx'
import InstanceTable from './components/InstanceTable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <Topbar />
    <Header />
    <CourseInstanceTable />
    <InstanceTable />
  </StrictMode>,
)
