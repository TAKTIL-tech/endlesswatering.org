import React from 'react';
import './HowItsWork.css';

const HowItsWork = ({data: {title, description, qrText}}) => {
    return (
        <section className='how_its_work_section'>
            <h2 className='how_its_work_header' data-aos={'fade-up'}>
                {title}
            </h2>
            <div className='how_its_work_video_container' data-aos={'fade-up'}>
                <video controls width="100%" height="100%" muted poster={'./assets/images/video/poster.jpg'}>
                    <source
                        src={'./assets/images/video/video.mp4'}
                        type='video/mp4'/>
                </video>
            </div>
            <div className='how_its_work_header_instruction_wrapper' data-aos={'fade-up'}>
                <ul className='how_its_work_instruction_list'>
                    <li className='how_its_work_instruction_item'>
                        {description[0]}
                    </li>
                    <li className='how_its_work_instruction_item'>
                        {description[1]}
                    </li>
                    <li className='how_its_work_instruction_item'>
                        {description[2]}
                    </li>
                    <li className='how_its_work_instruction_item'>
                        {description[3]}
                    </li>
                    <li className='how_its_work_instruction_item'>
                        {description[4]}
                    </li>
                </ul>

                <a className='how_its_work_qr'
                   rel="noreferrer"
                   href={'./assets/qr-endlesswatering.pdf'}
                   target="_blank"
                >
                    {qrText}
                </a>
            </div>
        </section>
    );
};

export default HowItsWork;