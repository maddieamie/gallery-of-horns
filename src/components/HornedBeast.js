import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css'; 

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
     
    };
  }

  countFaves= () => {
    this.setState({ favorites: this.state.favorites + 1 });
  }

 

  handleTitleClick = () => {
    // handleShowModal is passed down from App
    this.props.handleShowModal(this.props.title, this.props.imageURL, this.props.description, this.props.keyword);
    
    
  }

  render() {

    const { imageURL, idx, title , description, keyword, horns} = this.props;
 
    return (
      
      <CardGroup className="HornedBeast">
       
        <Card border="warning" style={{ width: '18rem' }}>
        
        <Card.Img variant="top" src={imageURL} alt={keyword} title={title} idx={idx}/>
        <Card.Body>
        <Card.Title><h2 onClick={this.handleTitleClick}>Horned Beast: {title}</h2></Card.Title>
        <Card.Text>
        <p>Description: {description}</p>
        <p>Horns: {horns}</p>
        <span> ❤️ {this.state.favorites} Favorites</span>
        <Button variant="warning" onClick={this.countFaves}>Favorite this beast!</Button>
        
        </Card.Text>
        </Card.Body>
        </Card>
       
  
      </CardGroup>
      
    )
  }
}

export default HornedBeast;