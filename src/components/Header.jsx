import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

function Header () {
    return (
        <div>
            <h1 className="header header-text">&nbsp;&nbsp;zNote&nbsp;<a className="github" href="https://github.com/zsoltszakal/znote-app" target="_blank" rel="noopener noreferrer"><GitHubIcon /></a></h1>
        </div>
    );

    };

export default Header;