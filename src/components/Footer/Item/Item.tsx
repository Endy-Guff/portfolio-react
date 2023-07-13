import React from 'react';
import s from './Item.module.css'

type ItemPropsType = {
    img: string
    alt: string
    link: string
    children?: React.ReactElement
}

export const Item = (props: ItemPropsType) => {
    return (
        <a className={s.link} href={props.link}>
            {props.children}
            {/*<img src={props.img} alt={props.alt}/>*/}
        </a>
    );
};

