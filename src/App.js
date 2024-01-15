import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Experience from './Pages/Experience';
import Landing from './Pages/Landing'
import Project from './Pages/Projects';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ProjectDetail from './Pages/ProjectDetail';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/experience' element={<Experience/>} />
          <Route path='/projects' element={<Project/>} />
          <Route path='/project/:id' element={<ProjectDetail/>} />
        </Routes>
          {/* <Footer/> */}
      </BrowserRouter>

      
    </div>
  );
}

export default App;
