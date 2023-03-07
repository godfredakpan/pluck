// import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Link from "./components/link/link";
import Profile from './components/profile';

// import css
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/default.css';


const App = () => {
  return (
    <>
      <div>
      <Router>
            <Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/profile" element={<Profile/>} />
						<Route path="/:username" element={<Link/>} />
            </Routes>
				</Router>
    </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
