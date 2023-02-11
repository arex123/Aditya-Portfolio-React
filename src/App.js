import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Experience from './Pages/Experience';
import Landing from './Pages/Landing'
import Project from './Pages/Projects';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/experience' element={<Experience/>} />
          <Route path='/project' element={<Project/>} />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
