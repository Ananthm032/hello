import { useContext,useState } from 'react'
import UserAddress from "./Users/UserAddress/UserAddress"

import Rejected from './Rejected/Rejected';
import Verified from "./Verified/Verified"
import { pagesMapping, RoutingContext } from './Context/Routing'
import Forreview from './Forreview/Forreview';
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom';
import UserProfile from './Users/UserProfile/UserProfile';
import Ananlytic from './Ananlaytic/Ananlytic';
import User from './Users/User';


function Ape() {
  const { page } = useContext(RoutingContext)
 
  return (
   
    <>
      {(pagesMapping.sidebar === page) && <Forreview />}
      {(pagesMapping.largeside === page) && <Verified />}
      {(pagesMapping.mini=== page) && <Rejected />}




       
       
<Routes>
  
      <Route path='/analytic' element={ <Ananlytic/>}> </Route>
      <Route path='/users' element={ <User/>}> </Route>
      <Route path='/users/profile' element={ <UserProfile/>}> </Route>
      <Route path='/users/address' element={ <UserAddress/>}> </Route>

     
      </Routes>
     

    </>

  );
}

export default Ape;