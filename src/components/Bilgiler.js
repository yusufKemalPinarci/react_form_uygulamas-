import React from 'react'

function Bilgiler({form}) {
  return (
    
<div className='bilgiler'>
    
    <h1>kullanıcı email:{form.email}</h1>
    <h2>kullanıcı sifre:{form.sifre}</h2>
        </div>
    
  )
}

export default Bilgiler