import React from 'react'
import "./profile.css"
import Header from '../../SSide'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Sheat from '../UserAddress/Sheat/Sheat'
import Sheat1 from '../UserAddress/Sheat1/Sheat1';
import {Box,Button } from "@mui/material"
function Profile() {
  return (
    <div className="flex-containe">
     <section class="men">
     <Header/>
</section>
<div className="address1">
  <div className="ttp1">
<Sheat1/>
  </div>
  <div className='lowe1'>
          <Box className='boton1'>
            <Button sx={{width:90,height:40,borderRadius:'transparent',background:'#313131' }}>
         <p className="pa1">Created</p>
            </Button>
            <Button sx={{width:90,height:40,borderRadius:'transparent',background:'#717171'}} >
                <p  className="pa1">Owned</p>
                </Button>
          </Box>
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