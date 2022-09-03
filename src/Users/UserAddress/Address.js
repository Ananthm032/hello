import React from 'react'
import "./address.css"
import Header from '../../SSide'
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import Sheat from './Sheat/Sheat'
import Sheat1 from './Sheat1/Sheat1';
import {Box,Button } from "@mui/material"
function Address() {
  return (
    <div className="flex-containe">
     <section class="men">
    <Header/>
</section>
<div className="address">
  <div className="ttp">
<Sheat1/>
  </div>
  <div className='lowe'>
          <Box className='boton'>
            <Button sx={{width:90,height:40,borderRadius:'transparent',background:'#313131' }}>
         <p className="pa">Created</p>
            </Button>
            <Button sx={{width:90,height:40,borderRadius:'transparent',background:'#717171'}}
            
            >
                <p  className="pa">Owned</p>
                </Button>
          </Box>
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