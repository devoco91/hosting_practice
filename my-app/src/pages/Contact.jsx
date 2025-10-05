
import React, { useEffect, useState } from 'react'
import Toast from '../components/Toast'
import api from '../services/api'
export default function Contact(){
useEffect(()=>{ window.scrollTo(0,0) }, [])


const [contact, setContact] = useState({ name:'', email:'', subject:'', phone:'', message:'' })
const [loading, setLoading] = useState(false)
const [toast, setToast] = useState({ show:false, variant:'success', title:'', message:'' })


const onChange = e => setContact(prev=>({ ...prev, [e.target.name]: e.target.value }))
const submitForm = async (e)=>{
e.preventDefault()
try{
setLoading(true)
await api.post('/contact/', contact)
setContact({ name:'', email:'', subject:'', phone:'', message:'' })
setToast({ show:true, variant:'success', title:'Sent', message:'Message sent successfully' })
}catch(err){
setToast({ show:true, variant:'danger', title:'Error', message: err.response?.data?.detail || 'Could not send message' })
}finally{ setLoading(false) }
}

return (
<div className="container py-5">
<div className="row g-5">
<div className="col-lg-6">
<h3>Drop Us A Line</h3>
<form onSubmit={submitForm} className="mt-4">
<div className="row g-3">
<div className="col-md-6">
<input name="name" value={contact.name} onChange={onChange} className="form-control" placeholder="Your Name" required />
</div>
<div className="col-md-6">
<input type="email" name="email" value={contact.email} onChange={onChange} className="form-control" placeholder="Your Email" required />
</div>
<div className="col-md-6">
<input name="subject" value={contact.subject} onChange={onChange} className="form-control" placeholder="Subject" />
</div>
<div className="col-md-6">
<input name="phone" value={contact.phone} onChange={onChange} className="form-control" placeholder="Phone" />
</div>
<div className="col-12">
<textarea name="message" value={contact.message} onChange={onChange} className="form-control" rows="6" placeholder="Your message" required></textarea>
</div>
</div>
<div className="d-grid mt-4">
<button className="btn btn-outline-primary" disabled={loading}>{loading ? 'Sending…' : 'Send Message'}</button>
</div>
</form>
</div>
<div className="col-lg-6">
<div className="card p-4 h-100">
<h4>Get In Touch With Us</h4>
<p className='mb-1'><i className="fa-solid fa-location-dot me-2"></i>3, Bar. C.O.N Akabogu street, University View Estate, Ajah</p>
<p className='mb-1'><i className="fa-solid fa-location-dot me-2"></i>27, Thomas Salako street, Ogba</p>
<p className='mb-3'><i className="fa-solid fa-location-dot me-2"></i>86 Old Olowora road, by Solomon avenue, Olowora, Berger</p>
<a href="tel:+2347025713326" className='d-block mb-1'><i className='fas fa-phone me-2'></i>+234 702 571 3326</a>
<a href="tel:+2348074024260" className='d-block mb-3'><i className='fas fa-phone me-2'></i>+234 807 402 4260</a>
<a href="mailto:info@lasop.net" className='d-block mb-4'><i className='fas fa-envelope me-2'></i>info@lasop.net</a>
<p className='mb-0'>Need Help? <span className='text-muted'>|</span> <a href="#">Go to FAQ</a></p>
</div>
</div>
</div>
<Toast {...toast} onClose={()=>setToast({...toast, show:false})} />
</div>
)
}