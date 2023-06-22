import React from 'react';
import s from './HeaderTextBox.module.css'
import titleBg from '../../../../assets/img/headerTitle-bg.svg'
import ReactTypingEffect from "react-typing-effect";


export const HeaderTextBox = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.titleBg} src={titleBg} alt=""/>
            <h1 className={s.title}>
                Hello <br/>
                Im <span>Andrey</span>, <br/>
                Web developer
            </h1>
            {/*<h3 className={s.subtitle}>front-end developer</h3>*/}
            <ReactTypingEffect className={s.subtitle}
                               text={'front-end developer'}
                               eraseDelay={10000000}
            />
        </div>
    );
};

