import React from 'react';
import s from './Item.module.css'

type ItemPropsType = {
    img: string
    name: string
}

export const Item = (props: ItemPropsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.item}>
                <img src={props.img} alt=""/>
            </div>
            <p className={s.name}>{props.name}</p>
        </div>
    );
};

