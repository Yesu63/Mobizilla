import './App.css'
import Navbar from './Navbar'
import  {BrowserRouter as Router , Route, Routes, useLocation} from 'react-router-dom'
import Cart from './Cart'
import Return from './Return'
import ContactUs from './ContactUs'
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import VivoMobiles from './VivoMobiles'
import OppoMobiles from './OppoMobiles'
import SamsungMobiles from './SamsungMobiles'
import RealmeMobiles from './RealmeMobiles'
import Spec from './Spec'
import MyOrder from './MyOrder'
import Profile from './Profile'

function App() {
  return (
    <Router>
      <AppContent />
      </Router>
  );
}
function AppContent() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route  exact path='/' element={<Home />} />
      <Route   path='/home' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
       <Route path='/return' element={<Return />} />
       <Route path='/contactus' element={<ContactUs />} />
       <Route path="/signup" element={<SignUp />} /> 
       <Route path='/login' element={<Login />} />
       <Route path='/vivo' element={<VivoMobiles />} />
       <Route path='/oppo' element={<OppoMobiles/>} />
       <Route path='/samsung' element={<SamsungMobiles/>} />
       <Route path='/realme' element={<RealmeMobiles/>} />
       <Route path='/spec/:id' element={<Spec/>} />
       <Route path='/myorder' element={<MyOrder/>} />
       <Route path='/profile' element={<Profile/>} />
    </Routes>
 </>
  );
}
export default App
