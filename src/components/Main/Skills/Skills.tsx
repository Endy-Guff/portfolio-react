import React from 'react';
import s from './Skills.module.css'
import {Title} from "../../Title/Title";
import {Item} from "./Item/Item";
import html from '../../../assets/img/skills/html.svg'
import css from '../../../assets/img/skills/css.svg'
import js from '../../../assets/img/skills/js.svg'
import ts from '../../../assets/img/skills/ts.svg'
import react from '../../../assets/img/skills/react.svg'
import redux from '../../../assets/img/skills/redux.svg'
import sass from '../../../assets/img/skills/sass.svg'
import git from '../../../assets/img/skills/git.svg'
import ps from '../../../assets/img/skills/ps.svg'
import figma from '../../../assets/img/skills/figma.svg'

export const Skills = () => {
    return (
        <div className={s.wrapper}>
            <Title title={'Skills'}/>
            <div className={s.skillsItems}>
                <Item img={html} name={'HTML'} />
                <Item img={css} name={'CSS'} />
                <Item img={js} name={'JS'} />
                <Item img={ts} name={'TS'} />
                <Item img={react} name={'REACT'} />
                <Item img={redux} name={'REDUX'} />
                <Item img={sass} name={'SASS'} />
                <Item img={git} name={'GIT'} />
                <Item img={ps} name={'PHOTOSHOP'} />
                <Item img={figma} name={'FIGMA'} />
            </div>
        </div>
    );
};

