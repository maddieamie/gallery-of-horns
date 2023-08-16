import React from 'react';

import HornedBeast from './components/HornedBeast.js';

class Main extends React.Component {


  render() {
        

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
}


export default Main;