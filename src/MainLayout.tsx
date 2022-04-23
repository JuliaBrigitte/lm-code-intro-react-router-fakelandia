import logo from './images/homepage.png';
import './App.css';
import NavBar from './NavBar'
import MyFooter from './Footer'
import {Outlet} from 'react-router-dom'

function MainLayout()  {
    return (

        <main>
            <NavBar/>
            <header>
                <img src={logo} alt="logo"/>
            </header>
            <Outlet />
            <MyFooter/>
        </main>

)
}

export default MainLayout;
