import React from 'react';
import './Problem.css';

const Problem = () => {
    return (
        <section className='problem_section'>
            <h2 className='problem_header'>
                В чем проблема?
            </h2>
            <ul className='problem_list'>
                <li className='problem_list_item'>
                    <div className='problem_list_item_number'>1</div>
                    <img src={'./assets/images/problem/problem_01.svg'} alt={'problem'}/>
                    <p className='problem_list_item_description'>
                        В жаркие дни растения не получают достаточно воды, поэтому начинают засыхать
                    </p>
                </li>

                <li className='problem_list_item'>
                    <div className='problem_list_item_number'>2</div>
                    <img src={'./assets/images/problem/problem_02.svg'} alt={'problem'}/>
                    <p className='problem_list_item_description'>
                        Нерациональный полив: много воды уходит глубоко от корней и не даёт роста
                    </p>
                </li>

                <li className='problem_list_item'>
                    <div className='problem_list_item_number'>3</div>
                    <img src={'./assets/images/problem/problem_03.svg'} alt={'problem'}/>
                    <p className='problem_list_item_description'>
                        Пластик не используется повторно и его становится только больше
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Problem;