import "./App.css"
import React from "react";
import Rejected from "./Rejected/Rejected"
import Verified from "./Verified/Verified"
import Forreview from "./Forreview/Forreview";
import { Route, Routes} from "react-router-dom"
function App() {
 
  return (
    <div className="App">
<Routes>
 
 
<Route path="/" element={<Forreview/>}></Route>
<Route path="/verified" element={<Verified/>}></Route>
<Route path="/rejected" element={<Rejected/>}></Route>

</Routes>
    </div>
  );
}

export default App;
