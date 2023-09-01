import React from 'react';
import './HornedBeast.css';
import ImgComp from './ImgComp.js';

class HornedBeast extends React.Component {
  render() {

    const { imageURL, idx, title , description, keyword, horns} = this.props;
 
    return (
      <article className="HornedBeast">
        <h2>Horned Beast: {title}</h2>
        <div>
        <img src={imageURL} alt={keyword} title={title} idx={idx}/>
        </div>

        <p>Description: {description}</p>
        <p>Horns: {horns}</p>
      </article>
    )
  }
}

export default HornedBeast;