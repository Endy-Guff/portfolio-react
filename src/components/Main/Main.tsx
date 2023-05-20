import React from 'react';
import s from './Main.module.css'
import {Skills} from "./Skills/Skills";
import {Portfolio} from "./Portfolio/Portfolio";
import {Contact} from "./Contact/Contact";

export const Main = () => {
    return (
        <div className={s.wrapper}>
            <div className="container">
                <Skills/>
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
};

