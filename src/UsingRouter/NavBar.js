import  React from 'react'
import {Routes,Route,NavLink} from 'react-router-dom'
import ContactUs from './ContactUs'
import Student from './Student'
import Home from './Home'
import './Style.css'

function NavBar()
{
    return(
        <>
           
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/Student' element={<Student/>}/>
                <Route exact path='/ContactUs' element={<ContactUs/>}/>
            </Routes>

            <header>
            <NavLink to='/' className="NavLink" style={({isActive})=>({color: isActive ? "gray" : "rgb(99, 19, 51)"})}>Home</NavLink>
            <NavLink to='/Student' className="NavLink" style={({isActive})=>({color: isActive ? "gray" : "rgb(99, 19, 51)"})}>Student</NavLink>
            <NavLink to='/ContactUs'className="NavLink" style={({isActive})=>({color: isActive ? "gray" : "rgb(99, 19, 51)"})}>ContactUs</NavLink> 
            </header>
        </>
    )
}
export default NavBar