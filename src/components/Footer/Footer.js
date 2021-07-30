import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='app_footer'>
            <div className='footer_container' data-aos={'slide-right'} data-aos-offset={'850'}>
                <div className='footer_header'>
                    Помогите распространить идею
                </div>

                <span className='footer_share'>
                    Поделиться в:
                </span>
                <ul className='footer_list'>
                    <li className='footer_list_item'>
                        <img src={'./assets/images/footer/footer_gmail.svg'} alt={'footer social link'}/>
                    </li>
                    <li className='footer_list_item'>
                        <img src={'./assets/images/footer/footer_instagram.svg'} alt={'footer social link'}/>
                    </li>
                    <li className='footer_list_item'>
                        <img src={'./assets/images/footer/footer_facebook.svg'} alt={'footer social link'}/>
                    </li>
                </ul>

                <div className='footer_qr_container'>
                    <img src={'./assets/images/footer/footer_qr.svg'} alt={'footer qr'}/>
                    <div className='footer_qr_text'>Скачать QR-код</div>
                </div>

                <div className='footer_sponsored_container'>
                    <p className='footer_sponsored_text'>
                        Sponsored by
                    </p>
                    <img src={'./assets/images/footer/footer_elang_logo.svg'} alt={'elang logo'}/>
                </div>
            </div>

            <div className='footer_bottle'>
                <img src={'./assets/images/footer/footer_bottle.svg'} alt='footer bottle'/>
            </div>

            <div className='footer_background'
                 style={{backgroundImage: `url("./assets/images/footer/footer_background.svg")`}}>
            </div>

            <div className='footer_root_first'>
                <img src={'./assets/images/footer/footer_root_01.svg'} alt='footer root'/>
            </div>

            <div className='footer_root_second'>
                <img src={'./assets/images/footer/footer_root_02.svg'} alt='footer root'/>
            </div>
        </footer>
    );
};

export default Footer;