import React from 'react';
import s from './Item.module.css'

type ItemPropsType = {
    img: string
    alt: string
    link: string
}

export const Item = (props: ItemPropsType) => {
    return (
        <a className={s.link} href={props.link}>
            <img src={props.img} alt={props.alt}/>
        </a>
    );
};

