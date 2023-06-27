import React from 'react';
import s from './Footer.module.css'
import {Item} from "./Item/Item";
import github from '../../assets/img/footer/github.svg'
import mail from '../../assets/img/footer/mail.svg'
import telegram from '../../assets/img/footer/telegram.svg'
import linkedin from '../../assets/img/footer/linkedin.svg'

export const Footer = () => {
    return (
        <div className='container'>
            <div className={s.wrapper}>
                <div className={s.items}>
                    <Item img={github} alt={'github'} link={'https://github.com/Endy-Guff'}/>
                    <Item img={mail} alt={'mail'} link={'mailto:andreymaranchak@gmail.com'}/>
                    <Item img={telegram} alt={'telegram'} link={'https://t.me/Endy_Guffi'}/>
                    <Item img={linkedin} alt={'linkedin'} link={'https://www.linkedin.com/in/endy-guff/'}/>
                </div>
                <p>2023 All rights reserved</p>
            </div>
        </div>
    );
};

