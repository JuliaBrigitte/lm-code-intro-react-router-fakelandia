import './App.css';
import NavBar from './NavBar'
import MyFooter from './Footer'
import {Outlet} from 'react-router-dom'

function MainLayout()  {

    return (

        <main>
            <NavBar/>
            <header>
            </header>
            <Outlet />
            <MyFooter/>
        </main>

)
}

export default MainLayout;
