
import './App.css';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import BeerDetails from './pages/BeerDetails';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import ErrorPage from './pages/ErrorPage';
import {Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='beers' element={<AllBeers/>}/>
      <Route path='beers/:beerId' element={<BeerDetails/>}/>
      <Route path='random-beer' element={<RandomBeer/>}/>
      <Route path='new-beer' element={<NewBeer/>}/>
      <Route path='*' element={<ErrorPage/>}/>

    </Routes>
      
    </div>
  );
}

export default App;
