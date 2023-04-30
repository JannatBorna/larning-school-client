import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Page/Home/Home';
import Banner from './components/Page/Banner/Banner';
import Services from './components/Page/Services/Services/Services';
import NotFound from './components/Page/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import SingleService from './components/Page/SingleService/SingleService';
import Dashboard from './components/Dashboard/Dashboard/Dasboard/Dashboard';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import AddServices from './components/Dashboard/Admin/AddServices/AddServices';
import ManageAllOrder from './components/Dashboard/Admin/ManageAllOrder/ManageAllOrder';
import AddFeedback from './components/Dashboard/User/Feedback/AddFeedback/AddFeedback';
import MyOrders from './components/Dashboard/User/MyOrder/MyOrders/MyOrders';
import ManageServices from './components/Dashboard/Admin/ManageServices/ManageServices';
import GroupStudy from './components/Page/GroupStudy/GroupStudy';
import About from './components/Page/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
       
            <Routes>
              <Route exact path="/" element={<Home />}>
              </Route>

            <Route exact path="/home" element={<Home />}>
            </Route>

            <Route exact path="/banner" element={<Banner />}>
            </Route>

            <Route path="/about" element={<About />}>
            </Route>

            <Route exact path="/ourServices" element={
            <PrivateRoute>
              <Services />
            </PrivateRoute>
            }>
            </Route>
            
            <Route path="/groupStudy" element={<GroupStudy />}>
            </Route>
    
          
         <Route path="/dashboard" element={<PrivateRoute> <Dashboard /> </PrivateRoute>}>  

              <Route  path={`/dashboard/makeAdmin`}
                element={
                  <MakeAdmin></MakeAdmin>  
                } />
    
              <Route path={`/dashboard/addServices`}
                element={
                  <AddServices></AddServices>
                } />
                
              <Route path={`/dashboard/manageAllOrder`}
                element={
                   <ManageAllOrder></ManageAllOrder>
                 } />
              
              <Route path={"/dashboard/manageServices"}
                element={
                 <ManageServices></ManageServices>
                } />
             
 
                  
              <Route path={`/dashboard/addFeedback`}
                element={
                  <AddFeedback></AddFeedback>
                } />
                


              <Route path={`/dashboard/myOrders`}
                element={
                 <MyOrders></MyOrders>
                } />
           </Route>           
                 
           

{/* ----------------------------------*/}

            <Route path="/singleService/:servicesId" element={<SingleService />}>
            </Route>

            <Route path="/login" element={<Login />}>
            </Route>

            <Route path="/register" element={<Register />}>
            </Route>

            <Route exact path="*" element={<NotFound />}>
            </Route>

            </Routes>
        
        </Router> 
      </AuthProvider>

    </div>
  );
}

export default App;
  
          
                
              