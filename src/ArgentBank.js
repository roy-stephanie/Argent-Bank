import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./views/login/Login";
import Layout from "./Layout";
import Profile from "./views/profile/Profile";
import Home from "./views/home/Home";

const ArgentBank = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path="login" element={<Login/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Route>
    </Routes>
  </Router>
);

export default ArgentBank;
