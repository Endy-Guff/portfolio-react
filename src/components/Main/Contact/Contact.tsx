import React from 'react';
import s from './Contact.module.css'
import {Title} from "../../Title/Title";
import {FormInput} from "./FormInput/FormInput";

export const Contact = () => {
    return (
        <div className={s.wrapper}>
            <Title title={'Contact With Me'}/>
            <div className={s.formBox}>
                <form className={s.form} action="#">
                    <FormInput name={'Name'}/>
                    <FormInput name={'Email'}/>
                    <div className={s.textAreaBox}>
                        <span className={s.textAreaName}>Message</span>
                        <textarea className={s.textArea}/>
                    </div>
                    <button className={s.formBtn} type={"submit"}>Send</button>
                </form>
            </div>
        </div>
    );
};

