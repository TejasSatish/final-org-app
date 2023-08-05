import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/navbar/navbar'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Donate from './pages/donate/donate';
import { MoralisProvider } from 'react-moralis';
function App() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <div >
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/donate" element={<Donate/>}></Route>
            <Route path="/recieve"></Route>
            <Route path="/dashboard"></Route>
          </Routes>
        </Router>
      </div>
    </MoralisProvider>
  );
}

export default App;
