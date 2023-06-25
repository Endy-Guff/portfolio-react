import React, {useEffect, useRef} from 'react';
import s from './Header.module.css'
import {HeaderTop} from "./HeaderTop/HeaderTop";
import {HeaderContent} from "./HeaderContent/HeaderContent";

type HeaderPropsType = {
    setHeaderIsVisible: (isVisible: boolean) => void
}

export const Header = (props: HeaderPropsType) => {

    useEffect(()=>{
        window.addEventListener('scroll', scrollHandler)
        return () =>{
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const headerRef = useRef<HTMLDivElement|null>(null)
    const scrollHandler = () =>{
        if (headerRef.current!.offsetTop<window.pageYOffset+window.innerHeight&&(headerRef.current!.offsetTop
            +headerRef.current!.offsetHeight)>window.pageYOffset) {
            props.setHeaderIsVisible(true)
        } else props.setHeaderIsVisible(false)
    }

    return (
        <div className={s.wrapper} id={'home'}>
            <div className={'container'}>
                <div className={s.inner} ref={headerRef}>
                    <HeaderTop/>
                    <HeaderContent/>
                </div>
            </div>
        </div>
    );
};

