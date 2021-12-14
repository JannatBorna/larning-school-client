import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Header from './components/Page/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
         {/*  <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/home" element={<Home />}>
          </Route>

          <Route exact path="/projects" element={<Projects />}>
          </Route>

          <Route exact path="/aboutMe" element={<AboutMe />}>
          </Route>

          <Route exact path="/blog" element={<Blog />}>
          </Route>

          <Route path="/profile" element={<Profile />}>
          </Route>

          <Route exact path="/contact" element={<Contact />}>
          </Route>



          <Route exact path="/details/:projectsId" element={<Details />}>
          </Route> */}

        </Routes>
      </BrowserRouter> 

    </div>
  );
}

export default App;
