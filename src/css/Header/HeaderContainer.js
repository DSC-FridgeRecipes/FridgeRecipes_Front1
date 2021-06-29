import React, { Component } from 'react';
import Header from './Header';
import HomeButton from "./HomeButton";

class HeaderContainer extends Component {
    render() {
        return (
            <Header>
              <HomeButton>

              </HomeButton>
            </Header>
        );
    }
}

export default HeaderContainer;
