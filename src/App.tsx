import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Footer} from "./components/Footer/Footer";
import {ButtonToUp} from "./components/common/ButtonToUp";

function App() {
    let [headerIsVisible, setHeaderIsVisible] = useState<boolean>(true)
    return (
        <div className={'appWrapper'}>
            <ButtonToUp headerIsVisible={headerIsVisible}/>
            <Header setHeaderIsVisible={setHeaderIsVisible}/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
