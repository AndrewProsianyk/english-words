import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import AddWordPage from './pages/AddWordPage/AddWordPage';
import BasePage from './pages/BasePage/BasePage';


function App() {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts
  // );

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route exact path="/" element={<AddWordPage />} />
        <Route path="/checking" element={<span>checking</span>} />
        <Route path="/base" element={<BasePage />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
