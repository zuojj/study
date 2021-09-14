
import React, {Component} from 'react';
import {HeaderWrapper} from './style';
import Logo from './logo'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
            </HeaderWrapper>
        );
    }
}

export default Header;