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
            <Box className='lo'>
             
               <p><ArticleIcon/></p> 
          
              <p>Creater's Application</p>
            </Box>
            <Box className='route'>
       
        <Box className='icon' onClick={() => setPage(pagesMapping.sidebar)} style={{cursor:'pointer'}}><StopIcon/><p>Rejected</p></Box>
      
      
        <Box ><a href='/analytic' style={{textDecoration:'none',color:'black'}} className='icon'><StopIcon/><p>Ananlaytic</p></a></Box> 
            </Box>
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