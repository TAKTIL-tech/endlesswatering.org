import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='app_footer'>
            <div className='footer_container'>
                <div className='footer_header'>
                    Помогите распространить идею
                </div>

                <span className='footer_share'>
                    Поделиться в:
                </span>
                <ul className='footer_list'>
                    <li className='footer_list_item'>
                        <a href={'https://www.instagram.com/?url=https://endlesswatering.org'} target="_blank"
                           rel="noopener">
                            <img src={'./assets/images/footer/footer_instagram.svg'} alt={'footer social link'}/>
                        </a>
                    </li>
                    <li className='footer_list_item'>
                        <a href={'https://www.facebook.com/sharer.php?u=https%3A%2F%2Fendlesswatering.org'}>
                            <img src={'./assets/images/footer/footer_facebook.svg'} alt={'footer social link'}/>
                        </a>
                    </li>
                    <li className='footer_list_item'>
                        <a href={'https://twitter.com/intent/tweet?url=https%3A%2F%2Fendlesswatering.org'}>
                            <img src={'./assets/images/footer/footer_twitter.svg'} alt={'footer social link'}/>
                        </a>
                    </li>
                </ul>

                <div className='footer_qr_container'>
                    <img src={'./assets/images/footer/footer_qr.svg'} alt={'footer qr'}/>
                    <a className='footer_qr_text'
                       rel="noreferrer"
                       href={'./assets/qr-endlesswatering.pdf'}
                       target="_blank"
                    >
                        Скачать QR-код
                    </a>
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