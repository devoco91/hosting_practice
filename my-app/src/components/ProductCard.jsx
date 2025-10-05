import React from 'react'


export default function ProductCard({ product }){
return (
<div className="col-sm-6 col-lg-4 col-xxl-3">
<div className="card h-100 card-hover">
{product.image && (
<img src={product.image} className="card-img-top" alt={product.name} style={{objectFit:'cover', height:200}}/>
)}
<div className="card-body d-flex flex-column">
<span className="badge rounded-pill badge-soft mb-2">₦{Number(product.price).toLocaleString()}</span>
<h5 className="card-title">{product.name}</h5>
<p className="card-text text-muted small flex-grow-1">{product.description}</p>
<button className="btn btn-outline-primary w-100 mt-2"><i className="fa-solid fa-cart-plus me-2"></i>Add to cart</button>
</div>
</div>
</div>
)
}