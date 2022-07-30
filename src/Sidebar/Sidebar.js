import { useContext } from 'react'
import { RoutingContext, pagesMapping } from "../Context/Routing"
import "./sidebar.css"
import { Box } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'; 
import StopIcon from '@mui/icons-material/Stop';
import Band from "../Band/Band"


function Sidebar() {
  const{ setPage } = useContext(RoutingContext);
return (
    <div className="flex-container">
      
 <section class="menu">
            
<div class="dropdown">
  <button class="dropbtn"><ArticleIcon />Creater's Application</button>
  <div class="dropdown-content">
  <a href="/"><StopIcon/>Home</a>
  <a href="/analytic"><StopIcon/>Analytic</a>
 
  </div>
</div>
    </section>
    <section class="content">
     
        <Box className='mini'>
   <Box   className='mini1' style={{width:'100%',textDecoration:'none',cursor:'pointer'}} >
        <p>ForReview</p>
     </Box>
    <Box className='mini2' style={{width:'100%',textDecoration:'none',cursor:'pointer'}} onClick={() => setPage(pagesMapping.largeside)} >
     <p>Verified</p>
     </Box>
     <Box className='mini3' style={{width:'100%',textDecoration:'none',cursor:'pointer'}}  onClick={() => setPage(pagesMapping.mini)} >
     <p>Rejected</p>
     </Box>
     </Box>
     <Box>
       <Band/>
     </Box>
     </section>
     
    
     </div>
  )
}

export default Sidebar