import { useContext } from 'react'
import Rejected from './Rejected/Rejected';
import Verified from "./Verified/Verified"
import { pagesMapping, RoutingContext } from './Context/Routing'
import Anal from "./Anal/Anal"
import './App.css';

import Forreview from './Forreview/Forreview';
import { Route, Routes } from 'react-router-dom';
import Ananlytic from './Ananlaytic/Ananlytic';

function App() {
  const { page } = useContext(RoutingContext)

  return (
    <>
     <div>
      {(pagesMapping.sidebar === page) && <Forreview />}
      {(pagesMapping.largeside === page) && <Verified />}
      {(pagesMapping.mini=== page) && <Rejected />}
      </div>
      <div>
      <Routes>
        <Route path="/" element={<Forreview/>}/>
       <Route path='/analytic' element={<Ananlytic/>}></Route>
     </Routes>
     </div>
    </>
   
  );
}

export default App;