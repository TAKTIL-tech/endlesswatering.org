import React from 'react';
import './Header.css';

const Header = ({localization: {title, description, more}}) => {

    const handleClickHeaderButton = () => {
        window.scrollTo({
            top: 665,
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
                    {title}
                </div>

                <div className='header_description'>
                    {description}
                </div>

                <button className='header_button' type='button' onClick={handleClickHeaderButton}>
                    {more}
                </button>

                <div className='header_background_bottle_drops'>
                    <object data={'./assets/images/header/footer_bottle.svg'} aria-label='svg' type='image/svg+xml'/>
                </div>
            </div>
        </header>
    );
};

export default Header;