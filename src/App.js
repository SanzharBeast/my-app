import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './profile';
import Friend from './friend';
import Profiles from './profiles';
import data from './data';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/main' element={<Main data={data.PostPage}/>} />
        <Route path='/profile' element={<Profiles data={data.ProfilePage}/>} />
        <Route path='/friend' element={<Friend />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
