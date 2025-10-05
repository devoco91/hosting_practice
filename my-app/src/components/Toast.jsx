import React from 'react'


export default function Toast({ show, variant='success', title='Success', message='', onClose }){
if(!show) return null
return (
<div className="position-fixed bottom-0 end-0 p-3" style={{zIndex:1080}}>
<div className={`toast align-items-center text-bg-${variant} show`} role="alert">
<div className="d-flex">
<div className="toast-body">
<strong className="me-2">{title}</strong>{message}
</div>
<button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={onClose}></button>
</div>
</div>
</div>
)
}