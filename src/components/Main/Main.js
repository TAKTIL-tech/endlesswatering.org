import React from 'react';
import './Main.css';

import Problem from "./Problem/Problem";
import Solve from "./Solve/Solve";
import HowItsWork from "./HowItsWork/HowItsWork";

const Main = () => {
    return (
        <main className='app_main'>
            <Problem/>
            <Solve/>
            <HowItsWork/>
        </main>
    );
};

export default Main;