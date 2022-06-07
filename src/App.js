import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { signInWithPopup, signOut } from 'firebase/auth'
import AppBar from './components/AppBar/AppBar';
import FlashcardsPage from './pages/FlashcardsPage/FlashcardsPage';
import NewThemePage from './pages/NewThemePage/NewThemePage';
import ThemePage from './pages/ThemePage/ThemePage';
import LoginPage from './pages/LoginPage/LoginPage';
import AccountPage from './pages/AccountPage/AccountPage';
import { auth, provider } from './firebase'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser, removeUser } from './redux/auth/user-actions'



function App() {
  const user = auth.currentUser;
  console.log('Current user: ', user)
  const dispatch = useDispatch()



  const login = () => {
    signInWithPopup(auth, provider)
      .then(data =>
        dispatch(setCurrentUser({
          name: data.user.displayName,
          email: data.user.email,
          token: data.user.accessToken
        })))
      .catch(error => console.log(error))
  }

  const logout = () => {
    signOut(auth).then(() => {
      dispatch(removeUser())
      console.log('signed out')
    }).catch(error => console.log(error))
  }


  return (
    <div className="App">
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
    </div>
  );
}

export default App;
