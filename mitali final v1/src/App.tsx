import { Routes, Route } from 'react-router'
import { Analytics } from "@vercel/analytics/react"
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
      </Routes>
      <Analytics />
    </>
  )
}
