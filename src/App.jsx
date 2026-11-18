// import hero from "./assets/hero.png"
import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Landing from "./Landing.jsx";
import Sportify from "./Sportify.jsx";
import Notfound from "./Notfound.jsx";
import Navbar from "./Navbar.jsx";
import { useLocation } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Usestateclass from "./Usestateclass.jsx";
import Todo from "./Todo.jsx";
import Http from "./Http.jsx";
import Onepost from "./Onepost.jsx";
import Formik from "./Formik.jsx";
import Login from "./Login.jsx";
import { ToastContainer } from "react-toastify/unstyled";
import Counter from "./Counter.jsx";

function App() {
  const location = useLocation();
  console.log(location);
  const pathnames = ["/", "/sportify", "/landing"];

  return (
    <div>
      {/* <h1 className="h1">hello this is my first react class</h1>
        <p>{Math.random()}</p>
        <p style={{color:"blue",fontSize:"50px",fontWeight:"bold"}}>Inline styling</p>
        <button className="btn btn-dark">Click</button>
        <input className="form-control w-50 py-3" type="text" name="" id="" />
        <img src={hero} alt="" /> */}

      {pathnames.includes(location.pathname) && <Navbar />}

      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/sportify" element={<Sportify />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/http" element={<Http />} />
        <Route path="/one/:id" element={<Onepost />} />
        <Route path="/formik" element={<Formik />} />
        <Route path="/login" element={<Login />} />
        <Route path="/count" element={<Counter />} />

        <Route path="/home" element={<Dashboard />}>
          <Route path="/home/dashboard" element={<Usestateclass />} />
          <Route path="/home/profile" element={<Todo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
