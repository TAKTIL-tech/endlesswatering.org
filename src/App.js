import React, {useEffect} from "react";
import './App.css';

import aos from 'aos';
import "aos/dist/aos.css";
import {YMInitializer} from "react-yandex-metrika";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import BackgroundTree from "./components/BackgroundTree/BackgroundTree";

const App = () => {
    useEffect(() => {
        aos.init({
            duration: 600,
            easing: 'linear',
            once: true
        });
    }, []);

    return (
        <div className='app'>
            <BackgroundTree/>
            <Header/>
            <Main/>
            <Footer/>
            <div>
                <YMInitializer accounts={[83549296]} version='2'
                               options={{webvisor: true, clickmap: true, trackLinks: true, accurateTrackBounce: true}}/>
            </div>
        </div>
    );
}

export default App;