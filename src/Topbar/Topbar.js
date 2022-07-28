import React from 'react'
import "./topbar.css"
import Img from "../Images/iyxlogo.png"
import Img1 from "../Images/147144.png"
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
   <img src={Img1} alt=''width='30px' height='30px'/>
 </Box>
 

 </header>
    </div>
  )
}

export default Topbar