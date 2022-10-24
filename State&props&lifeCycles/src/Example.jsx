import React, {useState} from 'react'

const Example = () => {
    const [form, setForm] = useState({
        name:"",
        suRname: ""
    })
    const handleChange = (e) =>{
        setForm({...form, [e.target.name]:e.target.value})
    }
  
  return (
    <div>
        <input name="name" value={form.name} onChange = {handleChange}/>
        <p>{form.name}</p>
        <input name="suRname" value={form.suRname} onChange = {handleChange}/>
        <p>{form.suRname}</p>
        <p>{form.name} {form.suRname}</p>
    </div>
  )
}

export default Example