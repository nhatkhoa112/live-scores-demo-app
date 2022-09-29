import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Scores from './pages/Scores/Scores'
import Navbar from './components/Navbar/Navbar'
import LeftSection from './components/LeftSection/LeftSection';
import RightSection from './components/RightSection/RightSection';
import Favorite from './pages/Favorite/Favorite';
import News from './pages/News/News'
import FootballMatchDetail from './pages/Scores/Football/FootballMatchDetail/FootballMatchDetail';
import TournamentDetail from './pages/Scores/Football/FootballScoresResult/TournamentDetail';



function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <LeftSection />
        <div id="layout-wrapper" className="">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Scores />} />
            <Route exact path="/favorite" element={<Favorite />} />
            <Route exact path="/news" element={<News />} />
            <Route exact path='/football/:countryId/:tourId'  element={<TournamentDetail/>}  />]
            <Route exact path='/football/:countryId/:tourId/:matchId'  element={<FootballMatchDetail />}  />]
          </Routes>
        </div>
        <RightSection />
      </BrowserRouter>
    </div>
  );
}

export default App;
