import { useContext } from 'react'
import Rejected from './Rejected/Rejected';
import Verified from "./Verified/Verified"
import { pagesMapping, RoutingContext } from './Context/Routing'
import Forreview from './Forreview/Forreview';
import { Route, Routes } from 'react-router-dom';
import Ananlytic from './Ananlaytic/Ananlytic';
function Ape() {
  const { page } = useContext(RoutingContext)

  return (
    <>
    
      {(pagesMapping.sidebar === page) && <Forreview />}
      {(pagesMapping.largeside === page) && <Verified />}
      {(pagesMapping.mini=== page) && <Rejected />}

   <Routes>   <Route path='/analytic' element={ <Ananlytic/>}>
       
      </Route></Routes>
    

      
      

    </>
   
  );
}

export default Ape;