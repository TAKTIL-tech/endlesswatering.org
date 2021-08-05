import React from 'react';
import './Problem.css';

const Problem = ({data: {title, description}}) => {

    return (
        <section className='problem_section'>
            <h2 className='problem_header' data-aos={'fade-up'}>
                {title}
            </h2>
            <ul className='problem_list'>
                <li className='problem_list_item' data-aos={'fade-up'}>
                    <div className='problem_list_item_number'>1</div>
                    <img src={'./assets/images/problem/problem_01.svg'} alt={'problem'}/>
                    <p className='problem_list_item_description'>
                        {description[0]}
                    </p>
                </li>

                <li className='problem_list_item' data-aos={'fade-up'}>
                    <div className='problem_list_item_number'>2</div>
                    <img src={'./assets/images/problem/problem_02.svg'} alt={'problem'}/>
                    <p className='problem_list_item_description'>
                        {description[1]}
                    </p>
                </li>

                <li className='problem_list_item' data-aos={'fade-up'}>
                    <div className='problem_list_item_number'>3</div>
                    <img src={'./assets/images/problem/problem_03.svg'} alt={'problem'}/>
                    <p className='problem_list_item_description'>
                        {description[2]}
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Problem;