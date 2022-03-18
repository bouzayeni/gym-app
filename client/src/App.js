import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

import RPM from "./pages/RPM";



import BodyAttack from "./pages/BodyAttack";
import BodyCombat from "./pages/BodyCombat";
import BodyPump from "./pages/BodyPump";
import Cxworx from "./pages/Cxworx";
import Step from "./pages/Step";
import Post from "./pages/Post";
import List from "./pages/List";
import MyPost from "./pages/MyPost";
import Payment from "./pages/Payment";
import PostAll from "./components/PostAll";
import PostModal from "./components/PostModal";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRouteAdmin from "./components/ProtectedRouteAdmin";
function App() {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      
        <Route path="/register" element={<Register />} />
        <Route path="/RPM" element={<RPM />} />
        
        <Route path="/BodyAttack" element={<BodyAttack/>} />
        <Route path="/BodyCombat" element={<BodyCombat/>} />
        <Route path="/BodyPump" element={<BodyPump/>} />
        <Route path="/Cxworx" element={<Cxworx/>} />
        <Route path="/Step" element={<Step/>} />
        <Route path="/Payment" element={<Payment/>} />
        <Route path="/PostAll" element={<PostAll/>} />
        <Route path="/MyPost" element={<MyPost/>} />
        <Route path="/PostModal" element={<PostModal/>} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/PostAll" element={<PostAll/>} />
        <Route path="/PostModal" element={<PostModal/>} />
        </Route>
        <Route element={<ProtectedRouteAdmin />}>
        <Route path="/Profile" element={<Profile />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/List" element={<List/>} />
          <Route path="/PostAll" element={<PostAll/>} />
        <Route path="/PostModal" element={<PostModal/>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
