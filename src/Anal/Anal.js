import React from 'react'
import { Box } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'; 
import StopIcon from '@mui/icons-material/Stop';
import Band from "../Band/Band"
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
            <Link to="/"  style={{textDecoration:'none'}}><Box className='acon'><StopIcon/><p>ForReview</p></Box></Link>
            <Link to="/verified"  style={{textDecoration:'none'}}><Box className='acon'><StopIcon/><p>Verified</p></Box></Link>
            <Link to="/rejected"  style={{textDecoration:'none'}}><Box className='acon'><StopIcon/><p>Rejected</p></Box></Link>
            <Link to="/analytic"  style={{textDecoration:'none'}}><Box className='acon'><StopIcon/><p>Ananlytic</p></Box></Link>
            </Box>
    </section>
    <section>
        <h1>Ananlaytic</h1>
    </section>
 
    </div>
  )
}

export default Anal