import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import AllBeers from './pages/AllBeers';
import BeerDetail from './pages/BeerDetail';
import Home from './pages/Home';
import RandomBeer from './pages/RandomBeer';
import BottomBar from './components/BottomBar';
import { useLocation } from 'react-router-dom';


function App() {

  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/allbeers" element={<AllBeers />} />
          <Route path="/item/:_id" element={<BeerDetail />} />
          <Route path="/randombeer" element={<RandomBeer />} />
          <Route path="*" element={
            <div>
              <h2>404 Page not found</h2>
            </div>
          }
          />
        </Routes>
      </div>
      {!(location.pathname === '/home') && <BottomBar />}
    </div>
  );
}

export default App;
