import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './components/Page/Shared/Header/Header';
import Footer from './components/Page/Shared/Footer/Footer';
import Home from './components/Page/Home/Home';
import Banner from './components/Page/Banner/Banner';

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

          {/*<Route exact path="/projects" element={<Projects />}>
          </Route>

           <Route exact path="/aboutMe" element={<AboutMe />}>
          </Route>

          

          <Route path="/profile" element={<Profile />}>
          </Route>

          <Route exact path="/contact" element={<Contact />}>
          </Route>



          <Route exact path="/details/:projectsId" element={<Details />}>
          </Route> */}

        </Routes>
        <Footer></Footer>
      </BrowserRouter> 

    </div>
  );
}

export default App;
