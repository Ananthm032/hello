import { useContext } from 'react'

import { RoutingContext, pagesMapping } from '../Context/Routing'
import "./mini.css"
import { Box } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'; 
import Details from "../Details/Details"
import StopIcon from '@mui/icons-material/Stop';
import {Link} from "react-router-dom"
function Minisidebar() {
  const { setPage } = useContext(RoutingContext)
  return (
    <div className="flex-contain">
         <section class="me">
                     
<div class="dropdown">
  <button class="dropbtn"><ArticleIcon />Creater's Application</button>
  <div class="dropdown-content">
  <a href="/"><StopIcon/>Home</a>
  <a href="/analytic"><StopIcon/>Analytic</a>
 
  </div>
</div>
 </section>
   
    <section class="conte">
     
    <Box className='mi'>
   <Box className='mi1'  style={{width:'100%',textDecoration:'none',cursor:'pointer'}} onClick={() => setPage(pagesMapping.sidebar)} >
        <p>ForReview</p>
     </Box>
   <Box className='mi2' style={{width:'100%',textDecoration:'none',cursor:'pointer'}} onClick={() => setPage(pagesMapping.largeside)}>
     <p>Verified</p>
     </Box>
   <Box className='mi3' style={{width:'100%',textDecoration:'none',cursor:'pointer'}}>
     <p>Rejected</p>
     </Box>
     </Box>
     <Box>
       <Details/>
     </Box>
     </section>
     
    
     </div>
  )
}

export default Minisidebar