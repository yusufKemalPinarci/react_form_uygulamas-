import React from 'react'

import {Link} from 'react-router-dom'
function Form({handleChange,form}) {
  return (
    
    <div>

        <div className="container" >
           
        <form className='form'>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name='email' value={form.email}  onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" value={form.sifre} name="sifre" onChange={handleChange} id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <Link to="/bilgiler"><button type="submit" class="btn btn-primary">Submit</button></Link>
</form>
               
            
        </div>
        

    </div>
 
  )
}

export default Form