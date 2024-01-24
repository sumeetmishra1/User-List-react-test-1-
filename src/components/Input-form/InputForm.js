import { useState } from 'react';
import './InputForm.css'
const InputForm=(props)=>{
    const[enteredname,changename]=useState('');
    const [enteredage,changeage]=useState('');
    function ChangeNameHandler(e){
        changename(e.target.value)
    }
    function ChangeAgeHandler(e){
        changeage(e.target.value)
    }
    function formSubmitHandler(e){
        e.preventDefault();
    const obj={
      name:enteredname,
      age:+enteredage,
    }
    props.onSubmitForm(obj);
    changeage('');
    changename('');
}
    return(
        <form className="form-control" onSubmit={formSubmitHandler}>
            <label>UserName:</label>
            <input type="text" value={enteredname} onChange={ChangeNameHandler}/>
            <label>Age:</label>
            <input type="number" value={enteredage} onChange={ChangeAgeHandler}/>
            <button className="button">Add User</button>
        </form>
    )
}
export default InputForm;