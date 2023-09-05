import React from 'react';
import './HornedBeast.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css'; 

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    };
  }

  countFaves= () => {
    this.setState({ favorites: this.state.favorites + 1 });
  }

  render() {

    const { imageURL, idx, title , description, keyword, horns} = this.props;
 
    return (
      <article className="HornedBeast">
       
        <Card border="warning" style={{ width: '18rem' }}>
        
        <Card.Img variant="top" src={imageURL} alt={keyword} title={title} idx={idx}/>
        <Card.Body>
        <Card.Title><h2>Horned Beast: {title}</h2></Card.Title>
        <Card.Text>
        <p>Description: {description}</p>
        <p>Horns: {horns}</p>
        <Button variant="warning" onClick={this.countFaves}>Favorite this beast!</Button>
        <span> ❤️ {this.state.favorites} Favorites</span>
        </Card.Text>
        </Card.Body>
        </Card>
       
  
      </article>
    )
  }
}

export default HornedBeast;