import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Counter from './pages/Counter'
import Users from './pages/Users'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}