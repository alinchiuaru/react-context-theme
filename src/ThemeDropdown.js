import React from 'react';

export default class ThemeDropdown extends React.Component {

  render() {
    return (
      <div>
        <p>Change the site theme:</p>

        <select onChange={(e) => {this.props.changeTheme(e.target.value)}} >
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="pastel">pastel</option>
        </select>
      </div>
    );
  }
}