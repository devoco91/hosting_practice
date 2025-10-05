// src/pages/Apply.jsx
import React, { useEffect, useState } from 'react'
import api from '../services/api'
import Toast from '../components/Toast'

export default function Apply(){
  useEffect(()=>{ window.scrollTo(0,0) }, [])

  const [focus, setFocus] = useState(false)
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ show:false, variant:'success', title:'', message:'' })
  const [studentsData, setStudentsData] = useState({
    firstname:'', lastname:'', email:'', address:'', phone:'', center:'', course:'', mode:''
  })

  const onChange = e => setStudentsData(prev=>({ ...prev, [e.target.name]: e.target.value }))

  const submitForm = async (e)=>{
    e.preventDefault()
    try{
      setLoading(true)
      await api.post('/applicants/', studentsData)
      setStudentsData({ firstname:'', lastname:'', email:'', address:'', phone:'', center:'', course:'', mode:'' })
      setToast({ show:true, variant:'success', title:'Submitted', message:'Application submitted successfully' })
    }catch(err){
      setToast({ show:true, variant:'danger', title:'Error', message: err.response?.data?.detail || 'Could not submit application' })
    }finally{ setLoading(false) }
  }

  return (
    <div className="container py-5" style={{maxWidth: "820px"}}>
      <h2 className="mb-4">Application Form</h2>
      <form onSubmit={submitForm} className="card p-4 shadow-sm application-form">
        <div className="row g-3">
          <div className="col-md-6">
            <input name="firstname" value={studentsData.firstname} onChange={onChange} placeholder="First name" className="form-control" required onBlur={()=>setFocus(true)} aria-label="First name" />
            {focus && !studentsData.firstname && <small className="text-danger">Input a valid firstname</small>}
          </div>
          <div className="col-md-6">
            <input name="lastname" value={studentsData.lastname} onChange={onChange} placeholder="Last name" className="form-control" required onBlur={()=>setFocus(true)} aria-label="Last name" />
            {focus && !studentsData.lastname && <small className="text-danger">Input a valid lastname</small>}
          </div>
          <div className="col-md-6">
            <input type="email" name="email" value={studentsData.email} onChange={onChange} placeholder="Email" className="form-control" required />
          </div>
          <div className="col-md-6">
            <input name="phone" value={studentsData.phone} onChange={onChange} placeholder="Phone number" className="form-control" required />
          </div>
          <div className="col-12">
            <input name="address" value={studentsData.address} onChange={onChange} placeholder="Address" className="form-control" />
          </div>
          <div className="col-md-4">
            <label className="form-label">Center</label>
            <select name="center" value={studentsData.center} onChange={onChange} className="form-select" required>
              <option value="">Select center</option>
              <option value="Ogba">Ogba</option>
              <option value="Ajah">Ajah</option>
              <option value="Ojodu-Berger">Ojodu-Berger</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Course</label>
            <select name="course" value={studentsData.course} onChange={onChange} className="form-select" required>
              <option value="">Select course</option>
              <option value="Frontend Development">Frontend Development</option>
              <option value="Backend Development">Backend Development</option>
              <option value="Fullstack Development">Fullstack Development</option>
              <option value="UI/UX">UI/UX</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Mode</label>
            <select name="mode" value={studentsData.mode} onChange={onChange} className="form-select" required>
              <option value="">Select mode</option>
              <option value="Weekday">Weekday</option>
              <option value="Weekend">Weekend</option>
              <option value="Online">Online</option>
            </select>
          </div>
        </div>
        <div className="d-grid mt-4">
          <button className="btn btn-gradient" disabled={loading}>{loading ? 'Submitting…' : 'Submit'}</button>
        </div>
      </form>
      <Toast {...toast} onClose={()=>setToast({...toast, show:false})} />
    </div>
  )
}
