import React from 'react';
import './Gallery.css';
import HornedBeast from './components/HornedBeast.js';


class Gallery extends React.Component {

  render() {

   
    // iterate over the data array and create a Person component for each item in the array
    // each item in my data array I'm calling pep as I iterate over the data
    
   let beasts= this.props.data.map((hornedB, idx) => {
      // create an instance of my Person component out of each pep and then I'm going to push it onto the people array
      // console.log(pep);
      return(
        <div key={idx} className="gallery-item">
          {<HornedBeast
        key={idx}
        imageURL={hornedB['image_url']}
        title={hornedB['title']}
        description={hornedB['description']}
        keyword={hornedB['keyword']}
        horns={hornedB['horns']}
        handleShowModal={this.props.handleShowModal}
      />}</div>);
    });


    return (
      <div className="gallery-container">
        {beasts}
      </div>
    );
  }
}





export default Gallery;