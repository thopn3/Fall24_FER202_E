import logo from './logo.svg';
import './App.css';
import Job from './components/Job';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import JobDetails from './components/JobDetails';
import AddNewJob from './components/AddJob';
import Login from './components/Login';
import { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(()=>{
    if(localStorage.getItem("account")){
      setLoggedIn(true);
    }
  }, []);

  function handleLogout(){
    if(localStorage.getItem("account")){
      localStorage.removeItem("account");
      window.location.href = "/";
    }
  }

  return (
    <div>
      <BrowserRouter>
        <header>
          {
            loggedIn == false ? <Link to={"/"}>Login</Link> : <Link to={"#"} onClick={()=>handleLogout()}>Logout</Link>
          }
        </header>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/jobs' element={<Job/>} />
          <Route path='/jobs/:id' element={<JobDetails/>} />
          <Route path='/jobs/create' element={<AddNewJob/>} />
        </Routes>
      </BrowserRouter>
      <footer>Footer template</footer>
    </div>
  );
}

export default App;
