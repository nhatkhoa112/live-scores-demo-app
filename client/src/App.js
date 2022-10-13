import './App.css';
import { Routes, Route } from 'react-router-dom'
import Scores from './pages/Scores/Scores'
import Navbar from './components/Navbar/Navbar'
import LeftSection from './components/LeftSection/LeftSection';
import RightSection from './components/RightSection/RightSection';
import Favorite from './pages/Favorite/Favorite';
import News from './pages/News/News'
import FootballMatchDetail from './pages/Scores/Football/FootballMatchDetail/FootballMatchDetail';
import TournamentDetail from './pages/Scores/Football/FootballScoresResult/TournamentDetail';
import TeamDetail from './pages/Scores/Football/TeamDetail/TeamDetail';




function App() {

  return (
    <div id="app">
      <LeftSection />
      <div id="layout-wrapper" className="">
        <Navbar />
        <Routes>
          <Route path="/">
            <Route exact index element={<Scores />} />
            <Route exact path="/:index" index element={<Scores />} />
            <Route exact path="favorite" element={<Favorite />} />
            <Route exact path="news" element={<News />} />
            <Route exact path='football/:countryId/:tourId' element={<TournamentDetail />} />
            <Route path='football/:countryId/:tourId/:matchId' element={<FootballMatchDetail />} exact />
            <Route path='football/team/:tourId/:teamId' element={<TeamDetail />} exact />
          </Route>
        </Routes>
      </div>
      <RightSection />
    </div>
  );
}

export default App;
