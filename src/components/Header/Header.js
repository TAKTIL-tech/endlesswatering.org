import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='app_header'>
            <div className='header_container'>
                <div className='header_logo'>
                    <img src={'./assets/images/header/logo.svg'} alt={'site logo'}/>
                </div>

                <div className='header_title'>
                    Вторая жизнь пластика для растений
                </div>

                <div className='header_description'>
                    Простейший капельный полив, который экономит воду и спасает растение
                </div>

                <button className='header_button' type='button'>
                    Узнать больше
                </button>

                <div className='header_background_bottle'>
                    <img src={'./assets/images/header/header_bottle.svg'} alt={'header background bottle'}/>
                </div>
            </div>
        </header>
    );
};

export default Header;