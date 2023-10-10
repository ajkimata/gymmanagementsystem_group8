import React from 'react';
import logo from '../home/logo.svg';
import {ThemeToggle} from "../../common";
import LoginForm from './LoginForm';

export const Login = () => {
    return (
        <div
            className={
                'flex items-center justify-center flex-col min-h-screen dark:bg-gray-800 dark:text-gray-100 transition-all'
            }>
            <img src={logo} className="App-logo" alt="logo" />
            <ThemeToggle />
            <LoginForm />
        </div>
    );
}
