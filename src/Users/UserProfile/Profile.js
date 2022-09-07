import React from 'react'
import "./profile.css"

import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Sheat from '../UserAddress/Sheat/Sheat'
import Sheat1 from '../UserAddress/Sheat1/Sheat1';
import {Box,Button } from "@mui/material"
import SSide from '../../SSide/SSide';
function Profile() {
  return (
    <div className="flex-containe">
     <section class="men">
     <SSide/>
</section>
<div className="address1">
  <div className="ttp1">
<Sheat1/>
  </div>
  <div className='lowe1'>
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
  <div className='botm1'>
    <Sheat/>
    <Sheat/>
    <Sheat/>
    <Sheat/>
    
  </div>
</div>
</div>
  )
}

export default Profile