import React, {useEffect, useState} from "react";
import './App.css';

import aos from 'aos';
import "aos/dist/aos.css";
import {YMInitializer} from "react-yandex-metrika";
import localization from './localization.json';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import BackgroundTree from "./components/BackgroundTree/BackgroundTree";

const App = () => {
    const [locale, setLocale] = useState(null);

    useEffect(() => {
        const language = (window.navigator.language).substring(0, 2).toLowerCase();
        setLocale(language);

        aos.init({
            duration: 600,
            easing: 'linear',
            once: true
        });
    }, []);

    if (!locale) {
        return null;
    }

    return (
        <div className='app'>
            <BackgroundTree/>
            <Header localization={localization[locale].header}/>
            <Main localization={localization[locale].main}/>
            <Footer localization={localization[locale].footer}/>
            <div>
                <YMInitializer accounts={[83549296]} version='2'
                               options={{webvisor: true, clickmap: true, trackLinks: true, accurateTrackBounce: true}}/>
            </div>
        </div>
    );
}

export default App;