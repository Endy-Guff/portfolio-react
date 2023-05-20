import React from 'react';
import s from './HeaderTextBox.module.css'
import titleBg from '../../../../assets/img/headerTitle-bg.svg'


export const HeaderTextBox = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.titleBg} src={titleBg} alt=""/>
            <h1 className={s.title}>
                Hello <br/>
                Im <span>Andrey</span>, <br/>
                Web developer
            </h1>
            <h3 className={s.subtitle}>front-end developer</h3>
        </div>
    );
};

