import {Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Number from './components/Number'
import Word from './components/Word'
import Value from './components/Value'
import WordColor from './components/WordColor'
import {useParams} from 'react-router';

function App() {
  return (
    <div className="container">
    <Routes>
      <Route path='/home' element= { <Home /> } />
      <Route path='/:word/:color1/:bg' element= { <WordColor /> } />
      {/* the colon is saying hey heres a var */}
      <Route path='/:value' element= { <Value /> } />
    </Routes>
    </div>
  );
}

export default App;
