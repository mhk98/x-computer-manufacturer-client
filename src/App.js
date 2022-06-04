
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import BuyNow from './Pages/BuyNow/BuyNow';
import RequireAuth from './Pages/Login/RequireAuth';
import Footer from './Pages/Shared/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Order from './Pages/Dashboard/Order';
import Review from './Pages/Dashboard/Review';
import Profile from './Pages/Dashboard/Profile';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import NotFound from './Pages/Shared/NotFound';
import Blog from './Pages/Blog/Blog';
import Biodata from './Pages/Biodata/Biodata';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import Payment from './Pages/Dashboard/Payment';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      <Route path='/biodata' element={<Biodata></Biodata>}></Route>
        <Route path='/buynow/:id' element={<RequireAuth>
          <BuyNow></BuyNow>
        </RequireAuth>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route path='order' element={<Order></Order>}></Route>
          <Route path='review' element={<Review></Review>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route index element={<Profile></Profile>}></Route>
          <Route path='product' element={<AddAProduct></AddAProduct>}></Route>
          <Route path='makeadmin' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageOrder' element={<MakeAdmin></MakeAdmin>}></Route>
          <Route path='manageProducts' element={<MakeAdmin></MakeAdmin>}></Route>
          
        </Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
