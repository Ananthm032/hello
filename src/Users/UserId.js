import Select1 from "../Users/Select/Select1"
import "./UserId.css"
import Header from "../SSide";
import Select2 from "../Users/Select/Select2"

import Card from "./Card/Card";

function UserId() {
 
  return (
    <div className="flex-containe">
         <section class="men">
         <Header/>

    </section>
 
  
    <section class="tac">
    <div className="cat">
      <div className="yat">
 <div class="items">
<h1>Inocys Members(200)</h1>
 </div>
 <div className="Id">
 <div className="Id-1">
  <Select1/>
 </div>
 <div className="Id-2"><Select2/></div>
 </div>
 </div>
   </div>
   <div className="yan">
  <Card/>
  <Card/>
  <Card/>
 </div>
 </section>
    </div>
  )
}

export default UserId