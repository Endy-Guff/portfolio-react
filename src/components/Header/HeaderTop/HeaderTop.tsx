import React from 'react';
import s from './HeaderTop.module.css'
import {Logo} from "./Logo/Logo";
import {Nav} from "./Nav/Nav";

export const HeaderTop = () => {
    return (
        <div className={s.wrapper}>
            <Logo/>
            <Nav/>
        </div>
    );
};

