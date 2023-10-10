import React from "react";
import {Link} from "react-router-dom";
import logo from '../pages/home/logo.svg';
import {ThemeToggle} from "../common";

export function NotFound() {
    return (
        <div className={'flex items-center justify-center flex-col min-h-screen dark:bg-gray-800 dark:text-gray-100 transition-all'} style={{ padding: "1rem" }}>
            <img src={logo} className="App-logo" alt="logo" />
            <ThemeToggle />
            <h1 className={'text-7xl font-bold'}>404</h1>
            <p className={'md:text-lg text-center mt-6'}>Sorry, we can't seem to find the page you are looking for.</p>
            <Link className={'mt-6'} style={{fontFeatureSettings: '"calt" 1'}} to={'/'}><i className={'la la-arrow-left'} /> <span className={'hover:underline'}>Home</span></Link>
        </div>
    )
}