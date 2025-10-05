import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Store from './pages/Store'
import Register from './pages/Register'
import Apply from './pages/Apply'
import Contact from './pages/Contact'


export default function App(){
return (
<div className="d-flex flex-column min-vh-100">
<Navbar />
<main className="flex-grow-1 bg-light">
<Routes>
<Route path="/" element={<Home />} />
<Route path="/store" element={<Store />} />
<Route path="/register" element={<Register />} />
<Route path="/apply" element={<Apply />} />
<Route path="/contact" element={<Contact />} />
<Route path="*" element={<Navigate to="/" />} />
</Routes>
</main>
<Footer />
</div>
)
}