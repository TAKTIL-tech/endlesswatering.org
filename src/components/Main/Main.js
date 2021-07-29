import React from 'react';
import './Main.css';

import Problem from "./Problem/Problem";
import Solve from "./Solve/Solve";
import HowItsWork from "./HowItsWork/HowItsWork";
import Instruction from "./Instruction/Instruction";
import Advantages from "./Advantages/Advantages";

const Main = () => {
    return (
        <main className='app_main'>
            <Problem/>
            <Solve/>
            <HowItsWork/>
            <Instruction/>
            <Advantages/>
        </main>
    );
};

export default Main;