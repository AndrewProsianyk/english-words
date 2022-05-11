import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import FlashcardsPage from './pages/FlashcardsPage/FlashcardsPage';
import NewThemePage from './pages/NewThemePage/NewThemePage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<FlashcardsPage />} />
        <Route path="/exam" element={<span>Exam</span>} />
        <Route path="/settings" element={<span>settings</span>} />
        <Route path="/account" element={<span>account</span>} />
        <Route path="/new-theme" element={<NewThemePage />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
      <AppBar />
    </div>
  );
}

export default App;
