import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Appbar from "./components/appbar.jsx"
import Login from "./pages/login/login.jsx"
import Register from "./pages/register/register.jsx"
import Donate from "./pages/donate/donate.jsx"
import Receive from "./pages/receive/receive.jsx"
import Dashboard from "./pages/dashboard/dashboard.jsx"
import {Box, Grid} from "@mui/material"
import { MoralisProvider } from 'react-moralis';
import AddNewDonor from "./pages/donate/addNewDonor"
import ViewExistingDonor from "./pages/donate/viewExistingDonor"
import AddNewRecipient from "./pages/receive/addNewRecipient"
import ViewExistingRecipient from "./pages/receive/viewExistingRecipient"
import ViewMatches from "./pages/receive/viewMatches"
import Sidebar from "./components/sidebar.jsx"
function App() {
  const SidebarList=[
    {option : 'DONATE',
    icon:'',
    linkTo:'' },
    {option : 'Add New Donor',
    icon:'PersonAddIcon',
    linkTo:'/donate/add' },
    {option : 'View Existing Donor',
    icon: 'ViewListIcon',
    linkTo:'/donate/view' },
    {option : 'RECEIVE',
    icon:'',
    linkTo:'' },
    {option : 'Add New Recipient',
    icon:'PersonAddIcon',
    linkTo:'/receive/add' },
    {option : 'View Existing Recipients',
    icon: 'ViewListIcon',
    linkTo:'/receive/view' },
    {option : 'View Recipient Matches',
    icon:'PreviewIcon',
    linkTo:'/receive/matches' },
    {option : 'DASHBOARD',
    icon:'',
    linkTo:'' },
]
  return (
    <MoralisProvider initializeOnMount={false}>
      <div>
        <Box display={"flex"}  justifyItems={"center"}xs={12}>
          <Router>
            <Appbar/>
            <Grid xs={10} style={{width:"100%"}}container direction="row" >
              <Grid>
                <Sidebar xs={1}tabList={SidebarList}/>            
              </Grid>
              <Grid item xs={10} style={{ position: "relative", top: "120px", left:"20%"}}>
                <Routes>
                  <Route path="/" element={ <Login/> } ></Route>
                  <Route path="/register" element={ <Register/> } ></Route>
                  <Route path="/donate/add" element={<AddNewDonor/>}></Route>
                  <Route path="/donate/view" element={<ViewExistingDonor/>}></Route>
                  <Route path="/receive/add" element={<AddNewRecipient/>}></Route>
                  <Route path="/receive/view" element={<ViewExistingRecipient/>}></Route>
                  <Route path="/receive/matches" element={<ViewMatches/>}></Route>              
                  <Route path="/dashboard" element={ <Dashboard/> } ></Route>
                </Routes>
              </Grid>
              <Grid item xs={1}/>
            </Grid>  
          </Router>
        </Box>
      </div>
    </MoralisProvider>
  );
}

export default App;
