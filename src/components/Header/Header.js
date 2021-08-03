import React from 'react';
import './Header.css';

const Header = () => {
    const handleClickHeaderButton = () => {
        window.scrollTo({
            top: 700,
            behavior: "smooth"
        });
    }

    return (
        <header className='app_header'>
            <div className='header_container'>
                <div className='header_logo'>
                    <img src={'./assets/images/header/logo.svg'} alt={'site logo'}/>
                </div>

                <div className='header_title'>
                    Спаси растение
                </div>

                <div className='header_description'>
                    Простейший капельный полив, который экономит воду и спасает растение
                </div>

                <button className='header_button' type='button' onClick={handleClickHeaderButton}>
                    Узнать больше
                </button>

                <div className='header_background_bottle_drops'>
                    <object data={'./assets/images/header/footer_bottle.svg'} aria-label='svg' type='image/svg+xml'/>
                </div>
            </div>
        </header>
    );
};

export default Header;