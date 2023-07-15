import React from 'react';
import s from './Portfolio.module.css'
import {Title} from "../../Title/Title";
import {Item} from "./Item/Item";
import example from '../../../assets/img/portfolio/example.png'
import kinoSearch from '../../../assets/img/portfolio/kino-search.jpg'
import chat from '../../../assets/img/portfolio/chat.jpg'
import socialNetwork from '../../../assets/img/portfolio/socialNetwork.jpg'
import todoList from '../../../assets/img/portfolio/todo.jpg'
import {Zoom} from "react-awesome-reveal";


export const Portfolio = () => {
    return (
        <div className={s.wrapper} id={'portfolio'}>
            <Title title={'Portfolio'} />
            <div className={s.portfolioItems}>
                <Zoom delay={500} triggerOnce>
                <Item name={'Kino Search'} img={kinoSearch} link={'https://endy-guff.github.io/kino-search-react/'}/>
                <Item name={'Chat'} img={chat} link={'https://endy-guff.github.io/React-chat-client/'}/>
                <Item name={'Social Network'} img={socialNetwork} link={'https://endy-guff.github.io/samurai-way'}/>
                <Item name={'Todo List'} img={todoList} link={'https://endy-guff.github.io/todoList/'}/>
                </Zoom>
            </div>
        </div>
    );
};
