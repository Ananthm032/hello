import React from 'react'
import "./Sheat.css"
import { Box } from '@mui/material'
import Img7 from "../../../Images/Screen.png"
import CheckCircle from '@mui/icons-material/CheckCircle'
function Sheat() {
  return (
    <Box className="sheat">
       <Box className="tpsheat">
          <img src="https://wallpapercave.com/wp/WgGibpD.jpg" alt='sht' width="200" height="200" style={{borderRadius:4}} />
       </Box>
       <Box className='btsheat'>
          <Box className='bat'>
         <Box  className='bit'> Cros Club </Box>
         <Box><CheckCircle   sx={{color:'#F5C15F',fontSize:18}}/></Box>
          </Box>
          <Box  className='coin'>Croc#1304</Box>
       </Box>
    </Box>
  )
}

export default Sheat