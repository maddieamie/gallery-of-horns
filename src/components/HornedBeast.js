import React from 'react';

import ImgComp from './ImgComp.js';

class HornedBeast extends React.Component {
  render() {

    const { imageUrl, altText, title , name, description, horns} = this.props;
 
    return (
      <article>
        <h2>Horned Beast: {name}</h2>
        <div>
        <ImgComp imageUrl={imageUrl} altText={altText} title={title}/>
        </div>

        <p>Description: {description}</p>
        <p>Horns: {horns}</p>
      </article>
    )
  }
}

export default HornedBeast;