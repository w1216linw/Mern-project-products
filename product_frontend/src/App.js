import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//pages & component
import Home from './pages/Home';
import ListItem from './pages/ListItem';
import Navbar from './components/Navbar';
//contexts
import { NavProvider } from './contexts/navContext';

function App() {
  return (
    <Router>
      <div className="container">
      <NavProvider>
        <Navbar />
      </NavProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="item/create" element={<ListItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
