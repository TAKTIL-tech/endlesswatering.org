import React from 'react';
import './Instruction.css';

const Instruction = ({data: {title}}) => {
    return (
        <section className='instruction_section' data-aos={'fade-up'}>
            <h2 className='instruction_header'>
                {title}
            </h2>
            <div className='instruction_image_container' data-aos={'fade-up'}>
                <img src={'./assets/images/instruction/instruction_01.svg'} alt={'instruction'}/>
            </div>
        </section>
    );
};

export default Instruction;