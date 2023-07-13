import React from 'react';
import s from './ButtonToUp.module.css'
import {Link} from "react-scroll";

type ButtonToUpPropsType = {
    headerIsVisible: boolean
}

export const ButtonToUp = (props: ButtonToUpPropsType) => {

    const btnClass = props.headerIsVisible?s.btn:s.btn+' '+s.active

    return (
        <div className={btnClass}>
            <Link to="home"
                  smooth={true}
            >
            <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_ddii_101_8)">
                    <rect id={s.fill} x="15" y="15" width="60" height="60" rx="30" fill="#2A2B2F"/>
                    <rect x="13.5" y="13.5" width="63" height="63" rx="31.5" stroke="#2A2B2F" stroke-width="3"/>
                </g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M60.5323 53.2143C61.1559 52.5664 61.1559 51.5175 60.5323 50.8713L47.3106 37.1705C46.0618 35.8765 44.036 35.8765 42.7872 37.1705L29.4679 50.9705C28.8507 51.6117 28.8427 52.6476 29.4519 53.2971C30.0739 53.9615 31.0989 53.9678 31.7304 53.315L43.9176 40.6846C44.5428 40.0367 45.555 40.0367 46.1801 40.6846L58.2714 53.2143C58.895 53.8621 59.9087 53.8621 60.5323 53.2143Z" fill="#535458"/>
                <defs>
                    <filter id="filter0_ddii_101_8" x="0" y="0" width="91" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="4" dy="4"/>
                        <feGaussianBlur stdDeviation="4.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_8"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="-4" dy="-4"/>
                        <feGaussianBlur stdDeviation="4"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0.15 0"/>
                        <feBlend mode="normal" in2="effect1_dropShadow_101_8" result="effect2_dropShadow_101_8"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_101_8" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="-4" dy="-4"/>
                        <feGaussianBlur stdDeviation="4"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0.27 0"/>
                        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_101_8"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="4" dy="4"/>
                        <feGaussianBlur stdDeviation="4.5"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
                        <feBlend mode="normal" in2="effect3_innerShadow_101_8" result="effect4_innerShadow_101_8"/>
                    </filter>
                </defs>
            </svg>
            </Link>
        </div>
    );
};

