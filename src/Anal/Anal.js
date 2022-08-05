

import Img3 from "../Images/navbar.png"
import ArticleIcon from '@mui/icons-material/Article'; 
import StopIcon from '@mui/icons-material/Stop';
import "./anal.css"
import LineChart from "../LineChart";
import Pie from "../PieChart";
import Header from "../SSide";
function Anal() {
 
  return (
    <div className="flex-containe">
         <section class="men">
         <Header/>

    </section>
 
   
    <section class="tic">
     <LineChart/>
  <Pie/>
 </section>
    </div>
  )
}

export default Anal