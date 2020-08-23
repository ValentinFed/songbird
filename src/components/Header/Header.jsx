import React, { useContext } from 'react';
import classes from './Header.module.scss';
import {MainContext} from '../../context/context';

const Header = () => {

    const headerContext = useContext(MainContext);

    return (
        <div className={classes.Header}>
            <p>Logo</p>
            <p>{headerContext.scope}</p>
        </div>
    )
}

export default Header