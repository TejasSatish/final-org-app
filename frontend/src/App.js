import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar"
import Login from "./pages/login/login.jsx"
import Register from "./pages/register/register.jsx"
import Donate from "./pages/donate/donate.jsx"
import Receive from "./pages/receive/receive.jsx"
import Dashboard from "./pages/dashboard/dashboard.jsx"
import {Box} from "@mui/material"
import { MoralisProvider } from 'react-moralis';
const linksArray=["Donate", "Receive", "Dashboard"]
function App() {

  return (
    <MoralisProvider initializeOnMount={false}>
      <div>
        <Box display={"flex"}>
          <Router>
            <Navbar links={linksArray}/>
            <Routes>
              <Route path="/" element={ <Login/> } ></Route>
              <Route path="/register" element={ <Register/> } ></Route>
              <Route path="/donate" element={ <Donate/> } ></Route>
              <Route path="/receive" element={ <Receive/> } ></Route>
              <Route path="/dashboard" element={ <Dashboard/> } ></Route>
            </Routes>
          </Router>
        </Box>
      </div>
    </MoralisProvider>
  );
}

export default App;
