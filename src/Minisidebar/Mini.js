import React from 'react'
import "./mini.css"
import { Box } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'; 
import Details from "../Details/Details"
import {Link} from "react-router-dom"
function Minisidebar() {
  return (
    <div className="flex-contain">
         <section class="me">
            <Box className='lo'>
             
               <p><ArticleIcon/></p> 
          
              <p>Creater's Application</p>
            </Box>
    </section>
 
   
    <section class="conte">
     
    <Box className='mi'>
     <Link to="/"  style={{width:'100%',textDecoration:'none'}}><Box   className='mi1'>
        <p>ForReview</p>
     </Box></Link>
     <Link  to="/verified"  style={{width:'100%',textDecoration:'none'}}><Box className='mi2'>
     <p>Verified</p>
     </Box></Link>
     <Link  to="/rejected"  style={{width:'100%',textDecoration:'none'}}> <Box className='mi3'>
     <p>Rejected</p>
     </Box></Link>
     </Box>
     <Box>
       <Details/>
     </Box>
     </section>
     
    
     </div>
  )
}

export default Minisidebar