import { useContext } from 'react'

import { RoutingContext, pagesMapping } from '../Context/Routing'
import "./largeside.css"
import { Box } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'; 
import Content from "../Content/Content"

import StopIcon from '@mui/icons-material/Stop';
import { Link } from 'react-router-dom';
function Largeside() {
   const { setPage } = useContext(RoutingContext)
  return (
    <div className="flex-containe">
         <section class="men">
         <div class="dropdown">
  <button class="dropbtn"><ArticleIcon />Creater's Application</button>
  <div class="dropdown-content">
  <a href="/"><StopIcon/>Home</a>
  <a href="/analytic"><StopIcon/>Analytic</a>
 
  </div>
</div>
    </section>
 
   
    <section class="conten">
     
     
    <Box className='min'>
    <Box  className='min1'style={{width:'100%',textDecoration:'none',cursor:'pointer'}}  onClick={() => setPage(pagesMapping.sidebar)}>
        <p>ForReview</p>
     </Box>
    <Box  className='min2'  style={{width:'100%',textDecoration:'none',cursor:'pointer'}} >
     <p>Verified</p>
     </Box>
   <Box  className='min3'  style={{width:'100%',textDecoration:'none',cursor:'pointer'}}  onClick={() => setPage(pagesMapping.mini)}>
     <p>Rejected</p>
     </Box>
     </Box>
     <Box>
    <Content/>
     </Box>
     </section>
     
    
     </div>
  )
}

export default Largeside