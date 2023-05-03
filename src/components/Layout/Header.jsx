import { Fragment } from 'react';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>Golden Dragon</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img
                    src='https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
                    alt='sushi restaurant'
                />
            </div>
        </Fragment>
    );
};

export default Header;
