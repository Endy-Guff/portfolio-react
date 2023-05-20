import React from 'react';
import s from './FormInput.module.css'

type FormInputPropsType = {
    name: string
}

export const FormInput = (props: FormInputPropsType) => {
    return (
        <div className={s.wrapper}>
            <span className={s.name}>{props.name}</span>
            <input className={s.input} type="text"/>
        </div>
    );
};

