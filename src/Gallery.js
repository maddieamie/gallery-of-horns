import React from 'react';

import HornedBeast from './components/HornedBeast.js';
import data from './data.json';

class Gallery extends React.Component {

  render() {

    let beasts = [];
    // iterate over the data array and create a Person component for each item in the array
    // each item in my data array I'm calling pep as I iterate over the data
    
    data.forEach((hornedB, idx) => {
      // create an instance of my Person component out of each pep and then I'm going to push it onto the people array
      // console.log(pep);
      beasts.push(<HornedBeast
        key={idx}
        imageURL={hornedB['image_url']}
        title={hornedB['title']}
        description={hornedB['description']}
        keyword={hornedB['keyword']}
        horns={hornedB['horns']}
      />);
    });


    return (
      <main>
        {beasts}
      </main>
    );
  }
}



  /*render() {
        

    return (
      <main>
       <HornedBeast
          name={this.props.name1}
          imageUrl={this.props.imageUrl1}
          altText={this.props.altText1}
          title={this.props.title1}
          description={this.props.description1}
          horns={this.props.horns1}

        />
         <HornedBeast
          name={this.props.name2}
          imageUrl={this.props.imageUrl2}
          altText={this.props.altText2}
          title={this.props.title2}
          description={this.props.description2}
          horns={this.props.horns2}

        />
         

        
      </main>
    );
  }
} */


export default Gallery;