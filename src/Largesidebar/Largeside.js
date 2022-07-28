import React from 'react'
import "./largeside.css"
import { Box } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'; 
import Content from "../Content/Content"
import {Link} from "react-router-dom"
function Largeside() {
  return (
    <div className="flex-containe">
         <section class="men">
            <Box className='log'>
             
               <p><ArticleIcon/></p> 
          
              <p>Creater's Application</p>
            </Box>
    </section>
 
   
    <section class="conten">
     
     
    <Box className='min'>
     <Link to="/"   style={{width:'100%',textDecoration:'none'}} ><Box  className='min1'>
        <p>ForReview</p>
     </Box></Link>
     <Link  to="/verified"  style={{width:'100%',textDecoration:'none'}} ><Box  className='min2'>
     <p>Verified</p>
     </Box></Link>
     <Link  to="/rejected"  style={{width:'100%',textDecoration:'none'}} > <Box  className='min3'>
     <p>Rejected</p>
     </Box></Link>
     </Box>
     <Box>
    <Content/>
     </Box>
     </section>
     
    
     </div>
  )
}

export default Largeside