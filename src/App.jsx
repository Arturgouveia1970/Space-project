import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/nav-bar/NavBar';
import Profile from './components/profile/Profile';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/rockets" />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
