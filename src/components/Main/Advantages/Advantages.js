import React from 'react';
import './Advantages.css'

const Advantages = ({data: {title, description}}) => {
    return (
        <section className='advantages_section'>
            <h2 className='advantages_header' data-aos={'fade-up'}>
                {title}
            </h2>
            <ul className='advantages_list'>
                <li className='advantages_list_item' data-aos={'fade-up'}>
                    <img src={'./assets/images/advantages/advantage_01.svg'} alt={'advantage'}/>
                    <p className='advantages_list_item_text'>
                        {description[0]}
                    </p>
                </li>
                <li className='advantages_list_item' data-aos={'fade-up'}>
                    <img src={'./assets/images/advantages/advantage_02.svg'} alt={'advantage'}/>
                    <p className='advantages_list_item_text'>
                        {description[1]}
                    </p>
                </li>
                <li className='advantages_list_item' data-aos={'fade-up'}>
                    <img src={'./assets/images/advantages/advantage_03.svg'} alt={'advantage'}/>
                    <p className='advantages_list_item_text'>
                        {description[2]}
                    </p>
                </li>
                <li className='advantages_list_item' data-aos={'fade-up'}>
                    <img src={'./assets/images/advantages/advantage_04.svg'} alt={'advantage'}/>
                    <p className='advantages_list_item_text'>
                        {description[3]}
                    </p>
                </li>
                <li className='advantages_list_item' data-aos={'fade-up'}>
                    <img src={'./assets/images/advantages/advantage_05.svg'} alt={'advantage'}/>
                    <p className='advantages_list_item_text'>
                        {description[4]}
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Advantages;