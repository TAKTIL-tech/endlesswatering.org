import React, {useEffect, useRef} from 'react';
import './HowItsWork.css';

const HowItsWork = () => {
    const videoRef = useRef();

    useEffect(() => {
        document.addEventListener('scroll', (eo) => {
            if (videoRef.current) {
                if (window.scrollY > 1800 && window.scrollY < 2500) {
                    videoRef.current.play();
                } else {
                    videoRef.current.pause();
                }
            }
        });
    }, []);

    return (
        <section className='how_its_work_section'>
            <h2 className='how_its_work_header' data-aos={'fade-up'}>
                Как это работает?
            </h2>
            <div className='how_its_work_video_container' data-aos={'fade-up'}>
                <video ref={videoRef} controls width="100%" height="100%" muted>
                    <source
                        src={'./assets/images/video/video.mp4'}
                        type='video/mp4'/>
                </video>
            </div>
            <div className='how_its_work_header_instruction_wrapper' data-aos={'fade-up'}>
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

                <a className='how_its_work_qr'
                   href={'https://drive.google.com/file/d/1dqGhOvILzQQuBTdmiW1LkLScXW8NKSlf/view'}
                >
                    Скачать QR-код здесь
                </a>
            </div>
        </section>
    );
};

export default HowItsWork;