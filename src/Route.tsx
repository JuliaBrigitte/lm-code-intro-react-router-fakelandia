import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Confession from './Confession'
import Misdemeanours from './Misdemeanours'
import PageNotFound from './PageNotFound'
import MainLayout from './MainLayout'


const AppRoutes: React.FC = () => (
    <BrowserRouter>
    <Routes>
        <Route element={<MainLayout />}>
            <Route index element={<Home/>}/>
            <Route path='confession' element={<Confession/>}/>
            <Route path='misdemeanours' element={<Misdemeanours/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Route>
    </Routes>
    </BrowserRouter>

);

export default AppRoutes;