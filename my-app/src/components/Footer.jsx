import React from 'react'
export default function Footer(){
return (
<footer className="footer mt-auto py-4">
<div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
<div className="small">© <span id="y">{new Date().getFullYear()}</span> PremiumShop</div>
<div className="small">
<a href="#">Privacy</a> · <a href="#">Terms</a>
</div>
</div>
</footer>
)
}