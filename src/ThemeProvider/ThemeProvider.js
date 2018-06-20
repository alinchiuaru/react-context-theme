import React from 'react';

const ThemeContext = React.createContext();
export const ThemeConsumer = ThemeContext.Consumer;

export class ThemeProvider extends React.Component {
  state = {
    theme: 'light'
  }

  changeTheme = theme => {
    console.log('CHANGE THEEMEEMEMEM', theme);
    this.setState({ theme: theme });
  }

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          changeTheme: this.changeTheme
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}