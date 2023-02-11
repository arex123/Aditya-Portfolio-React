import './App.css';
import { BrowserRouter,Router,Route } from 'react-router-dom';
import Experience from './Pages/Experience';
import Landing from './Pages/Landing'
import Project from './Pages/Projects';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Router>
          <Route path='/' element={<Landing/>}/>
          <Route path='/experience' element={<Experience/>} />
          <Route path='/project' element={<Project/>} />
        </Router>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
