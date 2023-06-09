import React from 'react';
import s from './Footer.module.css'
import {Item} from "./Item/Item";
import github from '../../assets/img/footer/github.svg'
import mail from '../../assets/img/footer/mail.svg'
import telegram from '../../assets/img/footer/telegram.svg'
import linkedin from '../../assets/img/footer/linkedin.svg'

export const Footer = () => {
    return (
        <div className='container'>
            <div className={s.wrapper}>
                <div className={s.items}>
                    <Item img={github} alt={'github'} link={'https://github.com/Endy-Guff'}>
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M18.9984 2.15335C9.69681 2.15335 2.15332 9.69583 2.15332 19.0006C2.15332 26.4427 6.97996 32.7575 13.6743 34.9863C14.5172 35.1404 14.8244 34.62 14.8244 34.1734C14.8244 33.7731 14.8099 32.7142 14.8016 31.3087C10.1157 32.3263 9.12696 29.05 9.12696 29.05C8.3606 27.1036 7.2561 26.5853 7.2561 26.5853C5.7265 25.5408 7.37192 25.5616 7.37192 25.5616C9.06284 25.6804 9.95225 27.2979 9.95225 27.2979C11.4549 29.8721 13.8957 29.1285 14.8554 28.6973C15.0085 27.6093 15.4439 26.8668 15.9248 26.4457C12.1841 26.0196 8.25099 24.5749 8.25099 18.1194C8.25099 16.2796 8.9077 14.7769 9.98536 13.5989C9.81162 13.1728 9.23349 11.4602 10.1508 9.14045C10.1508 9.14045 11.5646 8.68746 14.783 10.8665C16.1264 10.4932 17.5681 10.307 19.0005 10.2998C20.4318 10.307 21.8725 10.4932 23.218 10.8665C26.4344 8.68746 27.8459 9.14045 27.8459 9.14045C28.7655 11.4602 28.1874 13.1728 28.0147 13.5989C29.0944 14.7769 29.7459 16.2796 29.7459 18.1194C29.7459 24.5915 25.8066 26.0156 22.0545 26.4323C22.6585 26.9526 23.1973 27.9807 23.1973 29.5526C23.1973 31.804 23.1766 33.6211 23.1766 34.1734C23.1766 34.6243 23.4807 35.1487 24.3349 34.9841C31.0243 32.7514 35.8467 26.4417 35.8467 19.0006C35.8467 9.69583 28.3032 2.15335 18.9984 2.15335Z"
                                  fill="#535458"/>
                        </svg>
                    </Item>
                    <Item img={mail} alt={'mail'} link={'mailto:andreymaranchak@gmail.com'}>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.9749 4.5706H1.02518C0.459664 4.5706 0 5.03027 0 5.59678V7.61493L17 19.0067L34 7.61387V5.59678C34 5.03027 33.5403 4.5706 32.9749 4.5706Z" fill="#535458"/>
                            <path d="M0 11.8214V25.3278C0 27.5939 1.83554 29.4295 4.10264 29.4295H29.8974C32.1645 29.4295 34 27.5939 34 25.3278V11.8203L17 23.2132L0 11.8214Z" fill="#535458"/>
                        </svg>
                    </Item>
                    <Item img={telegram} alt={'telegram'} link={'https://t.me/Endy_Guffi'}>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_57_8)">
                                <path d="M18 3C9.75 3 3 9.75 3 18C3 26.25 9.75 33 18 33C26.25 33 33 26.25 33 18C33 9.75 26.25 3 18 3ZM25.35 12.15L22.8 24.45C22.65 25.35 22.05 25.5 21.45 25.05L17.55 22.05C16.65 22.95 15.75 23.7 15.6 24C15.3 24.15 15.15 24.45 14.85 24.45C14.4 24.45 14.4 24.15 14.25 23.85L12.9 19.35L8.85 18C7.95 17.7 7.95 17.1 9 16.65L24.3 10.8C24.9 10.65 25.65 10.95 25.35 12.15ZM21.75 13.5L13.2 18.9L14.55 23.4L14.85 20.4L22.2 13.8C22.65 13.35 22.35 13.35 21.75 13.5Z" fill="#535458"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_57_8">
                                    <rect width="36" height="36" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Item>
                    <Item img={linkedin} alt={'linkedin'} link={'https://www.linkedin.com/in/endy-guff/'}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.778 1.004H3.218C3.21 1.004 3.201 1.004 3.191 1.004C1.992 1.004 1.019 1.968 1.005 3.163V28.835C1.019 30.031 1.992 30.996 3.191 30.996C3.201 30.996 3.21001 30.996 3.22001 30.996H28.775C28.783 30.996 28.793 30.996 28.803 30.996C30.003 30.996 30.978 30.033 30.997 28.837V28.835V3.165C30.978 1.968 30.003 1.004 28.802 1.004C28.792 1.004 28.783 1.004 28.773 1.004H28.778ZM9.9 26.562H5.446V12.251H9.9V26.562ZM7.674 10.293C6.249 10.293 5.095 9.138 5.095 7.714C5.095 6.29 6.25 5.135 7.674 5.135C9.098 5.135 10.253 6.289 10.253 7.713C10.253 7.714 10.253 7.715 10.253 7.717C10.253 9.14 9.099 10.294 7.676 10.294C7.675 10.294 7.674 10.294 7.673 10.294L7.674 10.293ZM26.556 26.562H22.115V19.603C22.115 17.943 22.081 15.808 19.801 15.808C17.485 15.808 17.132 17.614 17.132 19.481V26.563H12.691V12.252H16.957V14.203H17.015C17.843 12.808 19.341 11.888 21.054 11.888C21.115 11.888 21.175 11.889 21.235 11.891H21.226C25.726 11.891 26.558 14.853 26.558 18.708V26.563L26.556 26.562Z" fill="#535458"/>
                        </svg>
                    </Item>
                </div>
                <p className={s.copy}>2023 All rights reserved</p>
            </div>
        </div>
    );
};

