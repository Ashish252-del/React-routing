import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Page404 from './components/Page404';
import { User } from './components/User';
import { Navbar } from './components/Navbar';
import { Filter } from './components/Filter';
import { Contact } from './components/Contact';
import { Channel } from './components/Channel';
import { Company } from './components/Company';
import { Login } from './components/Login';
import  Protected  from './components/Protected';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
    <Routes>
    <Route path='/' element = {<Protected Component = {Home}/>}/>
    <Route path='/about' element = {<About/>}/>  
    <Route path='/filter' element = {<Filter/>}/>  
    <Route path='/*' element = {<Page404/>}/>     
    {/* <Route path='/*' element = {<Navigate  to="/"/>}/>      */} 
    <Route path='/user/:name' element ={<User/>}   />
    <Route path='/contact/' element = {<Contact/>}>
    <Route path='company' element = {<Company/>}/>  
    <Route path='channel' element = {<Channel/>}/>  
     </Route>
     <Route path='/login' element ={<Login/>} />
    </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
