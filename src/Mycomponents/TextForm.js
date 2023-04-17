import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
    
    const upperOnClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowerOnClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnchange = (event)=>{
        setText(event.target.value);
    }

    const clearOnClick= ()=>{
        let newText = ''
        setText(newText);
    }

    const [text, setText] = useState()

  return (
    <>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Title</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=''/>
    </div>
    <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Text area</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange = {handleOnchange}/>
    </div>

    <button type="button" class="btn btn-primary mx-1" onClick={upperOnClick}>UpperCase</button>
    <button type="button" class="btn btn-primary mx-1" onClick={lowerOnClick}>LowerCase</button>
    <button type="button" class="btn btn-primary mx-1" onClick={clearOnClick}>Clear</button>




    </>
  )
}
