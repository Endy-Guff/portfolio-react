import React from 'react';
import s from './Title.module.css'
import titleImg from '../../assets/img/title-bg.svg'

type TitlePropsType = {
    title: string
}

export const Title = (props: TitlePropsType) => {
    return (
        <>
            <img className={s.img} src={titleImg} alt=""/>
            <h2 className={s.title}>
                {props.title}
            </h2>
        </>
    );
};

