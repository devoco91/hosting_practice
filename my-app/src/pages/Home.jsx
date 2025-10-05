import React, { useEffect, useState } from 'react'
import api from '../services/api'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'


export default function Home(){
const [items, setItems] = useState([])
const [loading, setLoading] = useState(true)


useEffect(()=>{
let mounted = true
api.get('/products/')
.then(res => { if(mounted){ setItems(res.data); } })
.catch(console.error)
.finally(()=> mounted && setLoading(false))
return ()=>{ mounted=false }
},[])


return (
<>
<section className="hero py-5">
<div className="container py-4">
<div className="row align-items-center">
<div className="col-lg-7">
<span className="badge text-bg-primary mb-3">New arrivals</span>
<h1 className="display-5 fw-bold">Premium items, delivered with style.</h1>
<p className="lead text-muted">Beautiful Bootstrap UI, blazing fast React, and a clean DRF backend.</p>
<a href="/store" className="btn btn-gradient btn-lg me-2">Shop now</a>
<a href="/apply" className="btn btn-outline-secondary btn-lg">Apply</a>
</div>
<div className="col-lg-5 text-center">
<i className="fa-solid fa-bag-shopping fa-8x text-primary opacity-50"></i>
</div>
</div>
</div>
</section>


<section className="py-5">
<div className="container">
<div className="d-flex align-items-center justify-content-between mb-3">
<h3 className="mb-0">Featured Products</h3>
<a href="/store" className="btn btn-sm btn-outline-primary">View all</a>
</div>


{loading ? <Loader /> : (
<div className="row g-4">
{items.slice(0,8).map(p => <ProductCard key={p.id} product={p} />)}
{items.length===0 && (
<div className="text-center text-muted">No products yet.</div>
)}
</div>
)}
</div>
</section>
</>
)
}