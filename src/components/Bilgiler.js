import React from 'react'
import {Link} from 'react-router-dom'
function Bilgiler({form}) {
  return (
    
<div className='bilgiler'>
    
    <h1>kullanıcı email:{form.email}</h1>
    <h2>kullanıcı sifre:{form.sifre}</h2>
    
        <Link to="/"><button>geri dön</button></Link></div>
    
  )
}

export default Bilgiler