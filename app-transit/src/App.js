import './App.css';
import Navbar from './components/sidebar/Navbar';
import { BrowserRouter as Router,
         Routes,
         Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Stats from './pages/Stats';
import Config from './pages/Config';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact component={Home}/>
        <Route path="/reports" component={Reports} />
        <Route path="/stats" component={Stats} />
        <Route path="/config" component={Config} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
