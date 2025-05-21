// src/app/Router.tsx
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
