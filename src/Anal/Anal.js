

import Img3 from "../Images/navbar.png"
import ArticleIcon from '@mui/icons-material/Article'; 
import StopIcon from '@mui/icons-material/Stop';
import "./anal.css"
function Anal() {
 
  return (
    <div className='contain'>
        <section class="anal">
        <div class="drop">
          <img  className='name'src={Img3} alt=''/>
  <button><ArticleIcon />Creater's Application</button>
  <div class="drop-content">
  <p><ArticleIcon />Creater's Application</p>
  <a href="/"><StopIcon/>Home</a>
  <a href="/analytic"><StopIcon/>Analytic</a>
 
  </div>
</div>
    </section>
    <section className="tic">

        <h1>Ananlaytic</h1>
    </section>
 
    </div>
  )
}

export default Anal