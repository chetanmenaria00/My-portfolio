import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from '../aboutUs/AboutUs'
import Connect from '../connect/Connect';
import HomePage from '../homePage/HomePage';
import Projects from '../projects/Projects';
import Experience from '../experience/Experience';

const Mainpage = () => {
    return (
        <>


            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    {/* <Route index element={<HomePage />} /> */}
                    <Route path="/connect" element={<Connect />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/project" element={<Projects/>} />
                    <Route path="/experience" element={<Experience/>} />
                    {/* <Route path="*" element={<NoPage />} /> */}

                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Mainpage