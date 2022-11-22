import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import FlashcardsPage from './pages/FlashcardsPage/FlashcardsPage';
import NewThemePage from './pages/NewThemePage/NewThemePage';
import ThemePage from './pages/ThemePage/ThemePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import AccountPage from './pages/AccountPage/AccountPage';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoggedIn } from './redux/auth/user-selectors';
import { useEffect } from 'react';
import authOperations from './redux/auth/auth-operations'

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch])

  if (isLoggedIn) {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/flashcards" element={<FlashcardsPage />} />
          <Route path="/exam" element={<span>Exam</span>} />
          <Route path="/settings" element={<span>settings</span>} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/flashcards/new-theme" element={<NewThemePage />} />
          <Route path="/flashcards/:themeId" element={<ThemePage />} />
          <Route
            path="*"
            element={<Navigate to="/flashcards" replace />}
          />
        </Routes>
        <AppBar />
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;

{/* <div className="App">
  <Routes>
    <Route path="/login" element={<LoginPage login={login} logout={logout} />} />
    <Route exact path="/flashcards" element={<FlashcardsPage />} />
    <Route path="/exam" element={<span>Exam</span>} />
    <Route path="/settings" element={<span>settings</span>} />
    <Route path="/account" element={<AccountPage logout={logout} />} />
    <Route path="/flashcards/new-theme" element={<NewThemePage />} />
    <Route path="/flashcards/:themeId" element={<ThemePage />} />
    <Route
      path="*"
      element={<Navigate to="/flashcards" replace />}
    />
  </Routes>
  <AppBar />
</div> */}
