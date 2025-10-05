import React from 'react'
export default function Loader(){
return (
<div className="d-flex justify-content-center py-5">
<div className="spinner-border" role="status" aria-hidden="true"></div>
<span className="ms-2">Loading…</span>
</div>
)
}