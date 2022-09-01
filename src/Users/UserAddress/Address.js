import React from 'react'
import "./address.css"
import Header from '../../SSide'
import Img7 from "../../Images/Screen.png"
import Sheat from './Sheat/Sheat'
function Address() {
  return (
    <div className="flex-containe">
     <section class="men">
    <Header/>
</section>
<div>
<div className="address">
        <div className='ttp'>
          <div className='ttp-cont'>
          <div className="background">
          <img src={Img7} alt ='bg' width="982"  height="150" />
         
          </div>
         </div>
        </div>
        <div className="botm">
        <Sheat/>
        <Sheat/>
        <Sheat/>
        </div>
    </div>
</div>
</div>
  )
}

export default Address