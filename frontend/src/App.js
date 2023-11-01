import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar"
import Login from "./pages/login/login.jsx"
import Register from "./pages/register/register.jsx"
import Donate from "./pages/donate/donate.jsx"
import Receive from "./pages/receive/receive.jsx"
import Dashboard from "./pages/dashboard/dashboard.jsx"
import {Box} from "@mui/material"
import { MoralisProvider } from 'react-moralis';
import AddNewDonor from "./pages/donate/addNewDonor"
import ViewExistingDonor from "./pages/donate/viewExistingDonor"
import AddNewRecipient from "./pages/receive/addNewRecipient"
import ViewExistingRecipient from "./pages/receive/viewExistingRecipient"
import ViewMatches from "./pages/receive/viewMatches"
function App() {

  return (
    <MoralisProvider initializeOnMount={false}>
      <div>
        <Box display={"flex"}>
          <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={ <Login/> } ></Route>
              <Route path="/register" element={ <Register/> } ></Route>
              <Route path="/donate" element={ <Donate/> } >
                <Route path="add" element={<AddNewDonor/>}></Route>
                <Route path="view" element={<ViewExistingDonor/>}></Route>
              </Route>
              <Route path="/receive" element={ <Receive/> } >
                <Route path="add" element={<AddNewRecipient/>}></Route>
                <Route path="view" element={<ViewExistingRecipient/>}></Route>
                <Route path="matches" element={<ViewMatches/>}></Route>
              </Route>
              <Route path="/dashboard" element={ <Dashboard/> } ></Route>
            </Routes>
          </Router>
        </Box>
      </div>
    </MoralisProvider>
  );
}

export default App;
