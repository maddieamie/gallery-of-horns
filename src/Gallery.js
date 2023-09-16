import React from 'react';
import './Gallery.css';
import HornedBeast from './components/HornedBeast.js';


class Gallery extends React.Component {


  render() {
  

    
   let beasts= this.props.filteredData.map((hornedB, idx) => {
   
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
      <>
    
      <div className="gallery-container">
        {beasts}
      </div>
      </>
    );
  }
}





export default Gallery;