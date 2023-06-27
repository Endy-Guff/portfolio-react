import React from 'react';
import s from './Contact.module.css'
import {Title} from "../../Title/Title";
import {FormInput} from "./FormInput/FormInput";
import emailjs from "emailjs-com";

export const Contact = () => {

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        emailjs
            .sendForm("service_079tgkb", "template_qbdr31s",  e.currentTarget, "X08r1z5AVN7yl7aV7")
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.currentTarget.reset()
    }

    return (
        <div className={s.wrapper} id={'contact'}>
            <Title title={'Contact With Me'}/>
            <div className={s.formBox}>
                <form className={s.form} onSubmit={sendEmail}>
                    <FormInput namePlaceholder={'Name'} name={'from_name'}/>
                    <FormInput namePlaceholder={'Email'} name={'from_email'}/>
                    <div className={s.textAreaBox}>
                        <span className={s.textAreaName}>Message</span>
                        <textarea className={s.textArea} name={'message'}/>
                    </div>
                    <button className={s.formBtn} type={"submit"}>Send</button>
                </form>
            </div>
        </div>
    );
};

