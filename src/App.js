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



function App() {
  const [userA, setUserA] = useState('')
  const user = auth.currentUser;
  console.log(user)
  // ДАЛІ ДІСПАТЧ


  const login = () => {
    signInWithPopup(auth, provider).then(data => setUserA(data.user.displayName)).catch(error => console.log(error))
  }

  const logout = () => {
    signOut(auth).then(() => {
      console.log('signed out')
      setUserA('')
    }).catch(error => console.log(error))
  }


  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage name={userA} login={login} logout={logout} />} />
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
