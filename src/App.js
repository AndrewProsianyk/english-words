import './App.scss';
import { Routes, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import AddWordPage from './pages/AddWordPage/AddWordPage';
import BasePage from './pages/BasePage/BasePage';


function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route exact path="/" element={<AddWordPage />} />
        <Route exact path="/checking" element={<span>checking</span>} />
        <Route exact path="/base" element={<BasePage />} />
      </Routes>
    </div>
  );
}

export default App;
