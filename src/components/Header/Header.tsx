import React from 'react';
import s from './Header.module.css'
import {HeaderTop} from "./HeaderTop/HeaderTop";
import {HeaderContent} from "./HeaderContent/HeaderContent";

export const Header = () => {
    return (
        <div className={s.wrapper} id={'home'}>
            <div className={'container'}>
                <div className={s.inner}>
                    <HeaderTop/>
                    <HeaderContent/>
                </div>
            </div>
        </div>
    );
};

