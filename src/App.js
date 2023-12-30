
// import logo from './logo.svg';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { CurrentMatches } from './component/CurrentMatches';
import { LiveScore } from './component/LiveScore';

import CountryList from './component/CountryList';
import PointList from './component/PointList';
import PageNotFound from './PageNotFound/PageNotFound';
import { Topnav } from './Topnav/Topnav';
// import Contact from './component/Contact';

function App() {
  return (
    
    <div >
    
    <Router>
    <Routes>
    <Route path='/' element={<Topnav/>}>
    <Route path='' element={<LiveScore />} />
    <Route path='currentmatches' element={<CurrentMatches />} />
            <Route path='country' element={<CountryList/>} />
            <Route path='point' element={<PointList/>} />
            {/* <Route path='contact'element={<Contact/>}/> */}
            <Route path='*' element={<PageNotFound/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;