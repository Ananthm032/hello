import React, { useState } from 'react'
import "./address.css"

import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Sheat from './Sheat/Sheat'
import Sheat1 from './Sheat1/Sheat1';
import {Box,Button } from "@mui/material"
import SSide from '../../SSide/SSide';



function Address() {
  
  return (
    <div className="flex-containe">
     <section class="men">
    <SSide/>
</section>
<div className="address">
  <div className="ttp">
<Sheat1/>
  </div>
  
  <div className='botm2'>
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