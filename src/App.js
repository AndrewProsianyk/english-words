import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import AppBar from './components/AppBar/AppBar';
import FlashcardsPage from './pages/FlashcardsPage/FlashcardsPage';
import NewThemePage from './pages/NewThemePage/NewThemePage';
import ThemePage from './pages/ThemePage/ThemePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import AccountPage from './pages/AccountPage/AccountPage';
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import { setCurrentUser, removeUser } from './redux/auth/user-actions'
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from './redux/auth/user-selectors';

function App() {
  const isLoggedIn = useSelector(getIsLoggedIn)
  // const logout = () => {
  //   signOut(auth).then(() => {
  //     dispatch(removeUser())
  //     console.log('signed out')
  //   }).catch(error => console.log(error))
  // }

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
