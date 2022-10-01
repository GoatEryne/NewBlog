import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Add from './components/Add/Add'
import Details from './components/Blog/Details';
import PageError from './PageError';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />            
            <Route path='/Add'  element= {<Add />} />
            <Route path= '/blogs/:id' element= {<Details/>} />
            <Route path= '*' element= {<PageError/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
