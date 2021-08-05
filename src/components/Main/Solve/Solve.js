import React from 'react';
import './Solve.css';

const Solve = ({data: {title, description}}) => {
    return (
        <section className='solve_section' data-aos={'fade-up'}>
            <h2 className='solve_header'>
                {title}
            </h2>
            <p className='solve_text'>
                <span>{description[0]} </span>
                {description[1]}
            </p>
            <p className='solve_text'>
                {description[2]}
            </p>
        </section>
    );
};

export default Solve;