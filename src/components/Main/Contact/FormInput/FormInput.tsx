import React from 'react';
import s from './FormInput.module.css'

type FormInputPropsType = {
    namePlaceholder: string
    name: string
}

export const FormInput = (props: FormInputPropsType) => {
    return (
        <div className={s.wrapper}>
            <span className={s.name}>{props.namePlaceholder}</span>
            <input className={s.input} type="text" name={props.name}/>
        </div>
    );
};

