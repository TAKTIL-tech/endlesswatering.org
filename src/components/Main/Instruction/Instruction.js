import React from 'react';
import './Instruction.css';

const Instruction = () => {
    return (
        <section className='instruction_section' data-aos={'fade-up'}>
            <h2 className='instruction_header'>
                Как это работает?
            </h2>
            <div className='instruction_image_container' data-aos={'fade-up'}>
                <img src={'./assets/images/instruction/instruction_01.svg'} alt={'instruction'}/>
            </div>
        </section>
    );
};

export default Instruction;