import React from 'react';
import './HowItsWork.css';

const HowItsWork = () => {
    return (
        <section className='how_its_work_section'>
            <h2 className='how_its_work_header'>
                Как это работает?
            </h2>
            <div className='how_its_work_video_container'>
                <video></video>
            </div>
            <div className='how_its_work_header_instruction_wrapper'>
                <ul className='how_its_work_instruction_list'>
                    <li className='how_its_work_instruction_item'>
                        - Бутылку с водой ставим под растение (с солнечной стороны)
                    </li>
                    <li className='how_its_work_instruction_item'>
                        - Прокалываем бутылку внизу кнопкой (лучше вынуть кнопку и не полностью вставить обратно)
                    </li>
                    <li className='how_its_work_instruction_item'>
                        - Кнопка должна остаться в бутылке
                    </li>
                    <li className='how_its_work_instruction_item'>
                        - Обязательно полностью открутить крышку
                    </li>
                    <li className='how_its_work_instruction_item'>
                        - Чтобы бутылку не выкинули, а использовали повторно другие люди, распечатать и наклеить QR-код
                    </li>
                </ul>

                <a href={'https://drive.google.com/file/d/1dqGhOvILzQQuBTdmiW1LkLScXW8NKSlf/view'}
                   className='how_its_work_qr'>
                    Скачать QR-код здесь
                </a>
            </div>
        </section>
    );
};

export default HowItsWork;