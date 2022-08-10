import { useContext } from 'react'

import { RoutingContext, pagesMapping } from '../Context/Routing'
import "./mini.css"
import { Box } from '@mui/material'

import Details from "../Details/Details"

import Header from '../SSide'
function Minisidebar() {
  const { setPage } = useContext(RoutingContext)
  return (
    <div className="flex-contain">
         <section class="me">
 <Header/>
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