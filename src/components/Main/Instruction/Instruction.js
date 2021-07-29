import React from 'react';
import './Instruction.css';

const Instruction = () => {
    return (
        <section className='instruction_section'>
            <h2 className='instruction_header'>
                Как это работает?
            </h2>
            <div className='instruction_image_container'>
                <img src={'./assets/images/instruction/instruction_01.svg'} alt={'instruction'}/>
            </div>
        </section>
    );
};

export default Instruction;