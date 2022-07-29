import { useContext } from 'react'
import { RoutingContext, pagesMapping } from "../Context/Routing"
import "./sidebar.css"
import { Box } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'; 
import StopIcon from '@mui/icons-material/Stop';
import Band from "../Band/Band"
import {Link} from "react-router-dom"

function Sidebar() {
  const { setPage } = useContext(RoutingContext)
  return (
    <div className="flex-container">
         <section class="menu">
            <Box className='logo'>
             
               <p><ArticleIcon/></p> 
          
              <p>Creater's Application</p>
             
            </Box>
            <Box className='router'>
           <Box className='icon'  onClick={() => setPage(pagesMapping.largeside)} style={{cursor:'pointer'}}><StopIcon/><p>ForReview</p></Box>
         
          <Box ><a href="/analytic" style={{textDecoration:'none',color:'black'}} className='icon'><StopIcon/><p>Ananlaytic</p></a></Box> 
        
            </Box>
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