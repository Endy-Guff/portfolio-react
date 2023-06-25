import React from 'react';
import s from './HeaderContent.module.css'
import {HeaderTextBox} from "./HeaderTextBox/HeaderTextBox";
import person from '../../../assets/img/person.png'

export const HeaderContent = () => {

    return (
        <div className={s.wrapper}>
            <HeaderTextBox/>
            <img className={s.img} src={person} alt=""/>
        </div>
    );
};
