import React, { useState } from 'react'
import "./address.css"

import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Sheat from './Sheat/Sheat'
import Sheat1 from './Sheat1/Sheat1';
import {Box,Button } from "@mui/material"
import SSide from '../../SSide/SSide';



function Address() {
  const [leftClick,rightClick]=useState('blue')
  const HandleClick = ()=>{
    rightClick('yello')
  }
  return (
    <div className="flex-containe">
     <section class="men">
    <SSide/>
</section>
<div className="address">
  <div className="ttp">
<Sheat1/>
  </div>
  <div className='lowe'>
  <div class="wrapper">
    <input type="radio" name="select" id="one" checked/>
    <input type="radio" name="select" id="two"/>
    <label for="one" class="option option-1">
      <span>Create</span>
    </label>
    <label for="two" class="option option-2">
      <span>Owned</span>
    </label>
  </div>
        </div>
  <div className='botm'>
    <Sheat/>
    <Sheat/>
    <Sheat/>
    <Sheat/>
    
  </div>
</div>
</div>
  )
}

export default Address