

import { Box } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article'; 
import StopIcon from '@mui/icons-material/Stop';

import {Link} from "react-router-dom"
import "./anal.css"
function Anal() {
 
  return (
    <div className='contain'>
        <section class="anal">
        <div class="dropdown">
  <button class="dropbtn"><ArticleIcon />Creater's Application</button>
  <div class="dropdown-content">
  <a href="/"><StopIcon/>Home</a>
  <a href="/analytic"><StopIcon/>Analytic</a>
 
  </div>
</div>
    </section>
    <section>

        <h1>Ananlaytic</h1>
    </section>
 
    </div>
  )
}

export default Anal