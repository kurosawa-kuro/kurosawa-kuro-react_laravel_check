import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Add from './pages/Add';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import List from './pages/List';
import NoMatch from './pages/NoMatch';
import Setting from './pages/Setting';

function App() {
  return (
    <div className='container'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
