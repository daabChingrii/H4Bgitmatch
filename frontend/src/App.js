import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Onboarding } from './pages/Onboarding';
import { Assets } from './pages/Assets/Assets';

import './App.css';
import { Team } from './pages/Devs/Team';
import { LogIn } from './pages/AuthModal/Login';
import { CreateAcc } from './pages/AuthModal/CreateAcc';
import { Home } from './pages/Home/Home';
import { About } from './pages/About';
import { Home1 } from './pages/Home1/Home1';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<CreateAcc />} />
          <Route path="/chats" element={<Home />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/home" element={<Home1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
