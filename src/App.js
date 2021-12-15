import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Page/Shared/Header/Header';
import Footer from './components/Page/Shared/Footer/Footer';
import Home from './components/Page/Home/Home';
import Banner from './components/Page/Banner/Banner';
import Services from './components/Page/Services/Services/Services';
import NotFound from './components/Page/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/home" element={<Home />}>
          </Route>

          <Route exact path="/banner" element={<Banner />}>
          </Route>

          <Route exact path="/ourServices" element={<Services />}>
          </Route>

           {/*<Route exact path="/aboutMe" element={<AboutMe />}>
          </Route>

          

          <Route path="/profile" element={<Profile />}>
          </Route>

           <Route exact path="/details/:projectsId" element={<Details />}>
          </Route>*/}

          <Route path="/login" element={<Login />}>
          </Route>

          <Route path="/register" element={<Register />}>
          </Route>

          <Route exact path="*" element={<NotFound />}>
          </Route> 



          

        </Routes>
        <Footer></Footer>
      </BrowserRouter> 

    </div>
  );
}

export default App;
