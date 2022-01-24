import {BrowserRouter, Route, Routes} from "react-router-dom";
import Mainpage from "./Pages/Mainpage";

export default function App(){
  return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Mainpage />}/>
              <Route path="/:wichList" element={<ListPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}