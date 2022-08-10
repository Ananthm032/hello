import React from 'react'
import "./topbar.css"
import Img from "../Images/iyxlogo.png"

import {Box} from "@mui/material"
function Topbar() {
  return (
    <div className='flex'>
  <header className='header'>
 
 <Box className='box'>
 <Box><img src={Img} alt='' width='150px' height='48px' /></Box>
<Box ><p>Admin</p>
</Box> 
 </Box>
 <Box >
   <img src="https://thumbs.dreamstime.com/b/preference-icon-website-design-desktop-envelopment-apps-development-premium-pack-preference-vector-glyph-flat-icon-163390853.jpg" width='40px' height='40px'/>
 </Box>
 

 </header>
    </div>
  )
}

export default Topbar