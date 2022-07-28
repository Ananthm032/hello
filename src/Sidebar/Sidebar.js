import React from 'react'
import "./sidebar.css"
import { Box } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'; 
import StopIcon from '@mui/icons-material/Stop';
import Band from "../Band/Band"
import {Link} from "react-router-dom"

function Sidebar() {
  return (
    <div className="flex-container">
         <section class="menu">
            <Box className='logo'>
             
               <p><ArticleIcon/></p> 
          
              <p>Creater's Application</p>
             
            </Box>
            <Box className='router'>
            <Link to="/"  style={{textDecoration:'none'}}><Box className='icon'><StopIcon/><p>ForReview</p></Box></Link>
            <Link to="/verified"  style={{textDecoration:'none'}}><Box className='icon'><StopIcon/><p>Verified</p></Box></Link>
            <Link to="/rejected"  style={{textDecoration:'none'}}><Box className='icon'><StopIcon/><p>Rejected</p></Box></Link>
            <Link to="/analytic"  style={{textDecoration:'none'}}><Box className='icon'><StopIcon/><p>Ananlytic</p></Box></Link>
            </Box>
    </section>
    
 
   
    <section class="content">
     
        <Box className='mini'>
     <Link to="/" style={{width:'100%',textDecoration:'none'}} ><Box   className='mini1'>
        <p>ForReview</p>
     </Box></Link>
     <Link  to="/verified" style={{width:'100%',textDecoration:'none'}}><Box className='mini2'>
     <p>Verified</p>
     </Box></Link>
     <Link  to="/rejected"  style={{width:'100%',textDecoration:'none'}}> <Box className='mini3'>
     <p>Rejected</p>
     </Box></Link>
     </Box>
     <Box>
       <Band/>
     </Box>
     </section>
     
    
     </div>
  )
}

export default Sidebar