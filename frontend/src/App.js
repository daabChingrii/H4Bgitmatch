import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Onboarding } from './pages/Onboarding';
import { Assets } from './pages/Assets/Assets';

import './App.css';
import { Team } from './pages/Devs/Team';
import { LogIn } from './pages/AuthModal/Login';
import { CreateAcc } from './pages/AuthModal/CreateAcc';
import { Home } from './pages/Home/Home';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<CreateAcc />} />
          <Route path="/home" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/source" />
          <Route path="/team" element={<Team />} />
          <Route path="/assets" element={<Assets />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
