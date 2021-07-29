import React from 'react';
import './Advantages.css'

const Advantages = () => {
    return (
        <section className='advantages_section'>
            <h2 className='advantages_header'>
                Преимущества
            </h2>
            <ul className='advantages_list'>
                <li className='advantages_list_item'>
                    <img src={'./assets/images/advantages/advantage_01.svg'} alt={'advantage'}/>
                    <p className='advantages_list_item_text'>
                        Водяное пятно долго сохраняется в зоне растения
                    </p>
                </li>
                <li className='advantages_list_item'>
                    <img src={'./assets/images/advantages/advantage_02.svg'} alt={'advantage'}/>
                    <p className='advantages_list_item_text'>
                        Бутылка, стоящая со стороны солнца, сохраняет растение от пересушивания
                    </p>
                </li>
                <li className='advantages_list_item'>
                    <img src={'./assets/images/advantages/advantage_03.svg'} alt={'advantage'}/>
                    <p className='advantages_list_item_text'>
                        Бережное использование воды
                    </p>
                </li>
                <li className='advantages_list_item'>
                    <img src={'./assets/images/advantages/advantage_04.svg'} alt={'advantage'}/>
                    <p className='advantages_list_item_text'>
                        Повторное использование пластиковой тары
                    </p>
                </li>
                <li className='advantages_list_item'>
                    <img src={'./assets/images/advantages/advantage_05.svg'} alt={'advantage'}/>
                    <p className='advantages_list_item_text'>
                        Способ привлечёт внимание людей
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Advantages;