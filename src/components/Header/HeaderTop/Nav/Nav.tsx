import React, {useState} from 'react';
import s from './Nav.module.css'
import linkedInImg from '../../../../assets/img/linkedIn.svg'
import gitImg from '../../../../assets/img/git.svg'
import mailImg from '../../../../assets/img/mail.svg'

export const Nav = () => {

    let [navIconActiveClass, setNavIconActiveClass] = useState<boolean>(false)

    const navIconClass = navIconActiveClass?s.navIcon + ' ' + s.active:s.navIcon
    const navListClass = navIconActiveClass?s.list + ' ' + s.active:s.list

    const navIconHandler = () =>{
        setNavIconActiveClass(!navIconActiveClass)
    }

    return (
        <div className={s.wrapper}>
            <ul className={navListClass}>
                <li className={s.item}>
                    <a href="#">
                        <span>{String.fromCharCode(60)}</span>
                        Home
                        <span>{String.fromCharCode(62)}</span>
                    </a>
                </li>
                <li className={s.item}>
                    <a href="#">
                        <span>{String.fromCharCode(60)}</span>
                        Skills
                        <span>{String.fromCharCode(62)}</span>
                    </a>
                </li>
                <li className={s.item}>
                    <a href="#">
                        <span>{String.fromCharCode(60)}</span>
                        Portfolio
                        <span>{String.fromCharCode(62)}</span>
                    </a>
                </li>
                <li className={s.item}>
                    <a href="#">
                        <span>{String.fromCharCode(60)}</span>
                        Contact
                        <span>{String.fromCharCode(62)}</span>
                    </a>
                </li>
            </ul>
            <div className={s.socialsBox}>
                <a className={s.socialsLink} href="#"><img src={linkedInImg} alt=""/>LinkedIn</a>
                <a className={s.socialsLink} href="#"><img src={gitImg} alt=""/>Github</a>
                <a className={s.socialsMail} href="#"><img src={mailImg} alt=""/></a>
            </div>
            <div className={navIconClass} onClick={navIconHandler}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
};

