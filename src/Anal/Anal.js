

import { Box } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'; 
import StopIcon from '@mui/icons-material/Stop';

import {Link} from "react-router-dom"
import "./anal.css"
function Anal() {
 
  return (
    <div className='contain'>
        <section class="anal">
            <Box className='ango'>
             
               <p><ArticleIcon/></p> 
          
              <p>Creater's Application</p>
             
            </Box>
            <Box className='arout'>
            <Box ><a href='/' style={{textDecoration:'none',cursor:'pointer',color:'black'}} className='icon'><StopIcon/><p>ForReview</p></a></Box> 
           <Box className='acon'  style={{cursor:'pointer'}}><StopIcon/><p>Ananlytic</p></Box>
            </Box>
    </section>
    <section>

        <h1>Ananlaytic</h1>
    </section>
 
    </div>
  )
}

export default Anal