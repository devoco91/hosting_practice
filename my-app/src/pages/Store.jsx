import React, { useEffect, useState } from 'react'
import api from '../services/api'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'


export default function Store(){
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)


useEffect(()=>{
let mounted = true
api.get('/products/')
.then(res => { if(mounted){ setProducts(res.data) }})
.catch(console.error)
.finally(()=> mounted && setLoading(false))
return ()=>{ mounted=false }
},[])


if(loading) return <Loader />


return (
<div className="container py-5">
<h2 className="mb-4">Store</h2>
<div className="row g-4">
{products.map(p => <ProductCard key={p.id} product={p} />)}
</div>
</div>
)
}