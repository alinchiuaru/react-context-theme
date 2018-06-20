import React from 'react';
import logo from './logo.svg';
import { ThemeConsumer } from './ThemeProvider/ThemeProvider';
import ThemeDropdown from './ThemeDropdown';

export default class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>


          <ThemeConsumer>
            {
              ({ changeTheme }) => (
                <div>
                  <ThemeDropdown changeTheme={changeTheme}/>
                </div>
              )
            }
          </ThemeConsumer>
      </header>
    );
  }
}