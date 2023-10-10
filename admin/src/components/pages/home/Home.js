import logo from './logo.svg';
import {ThemeToggle} from "../../common";
import './home.css';

export const Home = () => {
    return (
        <div className={"flex flex-col min-h-screen items-center justify-center dark:bg-gray-800 dark:text-white"}>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="text-2xl mb-6">The Administrator Panel</h1>
            <a href={'http://localhost:3000/'} target={'_blank'} rel={'noreferrer'} className={'text-lg bg-gray-200 dark:bg-gray-700 rounded-xl px-8 py-4'}>Go to client homepage</a>
            <ThemeToggle />
        </div>
    )
}