import './App.css';
import Form from './components/form.jsx'
import {BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import {useState} from 'react'
import Bilgiler from './components/Bilgiler'
function App() {
  const [form,setForm]=useState({email:"",sifre:""})
  const handleChange=(event)=>{
      setForm({...form,[event.target.name]:event.target.value})
  }




  
  return (
    <div className="App">
      <Router>
      <Routes>
           <Route path="/" element={<Form  handleChange={handleChange} form={form}     />}></Route>
           <Route path="/bilgiler" element={<Bilgiler form={form}/>}  />
        
      </Routes>

      </Router>
    </div>
  );
}

export default App;
