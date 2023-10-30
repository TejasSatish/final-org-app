import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import Login from "./pages/login/login.jsx"
import {Box} from "@mui/material"
const linksArray=["Donate", "Receive", "Dashboard"]
function App() {

  return (
    <div>
      <Box xs={{flexDirection:"row"}}>
        <Router>
          <Navbar links={linksArray}/>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register"></Route>
            <Route path="/donate" ></Route>
            <Route path="/receive" ></Route>
            <Route path="/dashboard"></Route>
          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
