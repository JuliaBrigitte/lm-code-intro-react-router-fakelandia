import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Confession from './Confession'
import Misdemeanours from './Misdemeanours'
import PageNotFound from './PageNotFound'
import MainLayout from './MainLayout'
import { useState, useEffect } from 'react';
import generateMisdemeanours from './generate_misdemeanours';
import {MisdemeanourEntry} from "./MisdemeanourEntry";

// You can import the generateMisdemeanours async function and call it like it's an external API.
// 👉 When the application first loads, use hooks to call generateMisdemeanours and store the results in some state.
// ❗ The function is asyncronous so be sure to await the results.
// ❗ If you're doing this correctly you should be able to navigate between different pages without changing this state - it should be constant until you hit F5 to refresh the page when it calls generateMisdemeanours again. Call it only once on application load!)
// 👉 Make this state accessible via useContext so you can consume it in sub-components you will write next

const AppRoutes: React.FC = () =>
{
    const firstEntry: MisdemeanourEntry =
        {
            citizenId: 0,
            misdemeanour: "rudeness",
            date: "today"
        }

    const initialValues: Array<MisdemeanourEntry> =
        [firstEntry]

    const [misdemeanourList, setMisdemeanourList] = useState(initialValues);

    useEffect(() => {
        async function getMisdemeanorsList() {
            const result=await generateMisdemeanours(10);
            setMisdemeanourList(result);
        }
        getMisdemeanorsList();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path='confession' element={<Confession misdemeanorsList={misdemeanourList} misdemeanorsListUpdate={setMisdemeanourList}/>}/>
                    <Route path='misdemeanours' element={<Misdemeanours myMisdemeanorsList={misdemeanourList}/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>

    );

}


export default AppRoutes;