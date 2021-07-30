import React, {useEffect} from "react";
import './App.css';

import aos from 'aos';
import "aos/dist/aos.css";

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
        </div>
    );
}

export default App;