import React from "react";
import './App.css';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import BackgroundTree from "./components/BackgroundTree/BackgroundTree";

const App = () => {
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