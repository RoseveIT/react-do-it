import React from 'react';

import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://static.vecteezy.com/system/resources/previews/001/191/989/non_2x/circle-logo-png.png" alt="two green leaf"/>
        </header>
    );
};

export {Header};