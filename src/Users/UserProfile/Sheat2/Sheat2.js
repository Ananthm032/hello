import React from 'react'
import "./Sheat2.css"
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { Button ,Box} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FacebookIcon from '@mui/icons-material/Facebook';
import Img8 from "../../../Images/147144.png"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Sheat1() {
  return (
   <Box className="total">
    <Box className="backi">
     <Box className="tpp" >
      <Box className="password">
     <a href="/users/address"> <KeyboardBackspaceIcon sx={{color:'whitesmoke'}}/></a>
      </Box>
    
    </Box>
    <Box className="btt">
       <Box className="boat">
          <Box className="bv">
           <img src="https://pre00.deviantart.net/27d4/th/pre/i/2013/202/1/7/aqua___realm_of_darkness_by_arxami-d6egi5y.jpg" alt='nam' width="100" height="100" />
         </Box>
         <Box className="bv1">
          <Box className='bv11'>
          <Box className="bv111">
         <Box sx={{fontSize:46,color:'#795548',fontWeight:700}}>Jevanantham</Box>
        <Box sx={{background:'yellow'}}>Heloo</Box>
         </Box>
         <Box sx={{fontSize:18,color:'#795548'}}>@jeva132</Box>
         </Box>
         <Box className='bv12'>

        <Box className="bv121">
         <Box>4.8</Box>
         
         <Box>
          
         <StarIcon sx={{color:'#ffa726',fontSize:16}}/>
         <StarIcon sx={{color:'#ffa726',fontSize:16}}/>
         <StarIcon sx={{color:'#ffa726',fontSize:16}}/>
         <StarIcon sx={{color:'#ffa726',fontSize:16}}/>
         <StarHalfIcon sx={{color:'#ffa726',fontSize:16}}/>
          
          </Box>
         </Box>
          <Box sx={{fontSize:16,fontWeight:400}}>
         After Writing the basic strlso, after that  a bro After Writing the basic strlso, after that  a browser and see the output.
          </Box>
          </Box>
         </Box>
       </Box>
       <Box className="boat1">
        <Box className='social'><FacebookIcon /></Box>
        <Box className='social'><InstagramIcon/></Box>
        <Box className='social'><TwitterIcon/></Box>
        <Box className='social'><LinkedInIcon/></Box>
        </Box>
          </Box>
            </Box>
              </Box>
  )
}

export default Sheat1