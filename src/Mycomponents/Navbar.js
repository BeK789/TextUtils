import React from 'react'
import { useState } from 'react'

export default function Navbar() {

  const [mode, setMode] = useState({
    color: 'white',
    backgroundColor: 'black'
  });
  

  const [btnText, setbtnText] = useState('enable lm')

  let modeChange = ()=>{
    if(mode.color === 'white'){
      setMode({
        color : 'black',
        backgroundColor : 'white'
      })
      setbtnText('enable dm')
    }
    else{
      setMode({
        color: 'white',
        backgroundColor: 'black'
      })
      setbtnText('enable lm')
    }
  } 


    return (
        <>
    <nav class='navbar navbar-expand-lg' style={mode}>
      <div class="container-fluid" >
      <a class="navbar-brand" href="/" style={mode}>TextUtils</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/" style={mode}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/" style={mode}>Link</a>
            </li>
          </ul>
          <div class="form-check form-switch" onClick={modeChange}>
            <input class="form-check-input" type="checkbox" role="switch"  id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault">{btnText}</label>
          </div>
        </div>
      </div>
    </nav>
        </>
    )
}


