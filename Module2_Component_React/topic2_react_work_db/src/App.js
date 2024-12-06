import logo from './logo.svg';
import './App.css';
import Job from './components/Job';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JobDetails from './components/JobDetails';
import AddNewJob from './components/AddJob';

function App() {
  return (
    <div>
      <header>Header template</header>
      <BrowserRouter>
        <Routes>
          <Route path='/jobs' element={<Job/>} />
          <Route path='/' element={<Job/>} />
          <Route path='/jobs/:id' element={<JobDetails/>} />
          <Route path='/jobs/create' element={<AddNewJob/>} />
        </Routes>
      </BrowserRouter>
      <footer>Footer template</footer>
    </div>
  );
}

export default App;
