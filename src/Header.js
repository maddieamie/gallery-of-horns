import React from 'react';

class Header extends React.Component {

render () 
{
    return (
        <header>
        <h1>Horned Beasts App {this.props.favorites}</h1>
        </header>);
}
};

export default Header;