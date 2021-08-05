import React from 'react';
import './Main.css';

import Problem from "./Problem/Problem";
import Solve from "./Solve/Solve";
import HowItsWork from "./HowItsWork/HowItsWork";
import Instruction from "./Instruction/Instruction";
import Advantages from "./Advantages/Advantages";

const Main = ({localization: {problem, solve, howItsWork, instruction, advantages,}}) => {
    return (
        <main className='app_main'>
            <Problem data={problem}/>
            <Solve data={solve}/>
            <HowItsWork data={howItsWork}/>
            <Instruction data={instruction}/>
            <Advantages data={advantages}/>
        </main>
    );
};

export default Main;