import React from 'react';
import s from './Portfolio.module.css'
import {Title} from "../../Title/Title";
import {Item} from "./Item/Item";
import example from '../../../assets/img/portfolio/example.png'
import {Zoom} from "react-awesome-reveal";


export const Portfolio = () => {
    return (
        <div className={s.wrapper} id={'portfolio'}>
            <Title title={'Portfolio'} />
            <div className={s.portfolioItems}>
                <Zoom delay={500} triggerOnce>
                <Item name={'Name'} img={example} link={'#'}/>
                <Item name={'Name'} img={example} link={'#'}/>
                <Item name={'Name'} img={example} link={'#'}/>
                </Zoom>
            </div>
        </div>
    );
};
