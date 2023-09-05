// 1. import React
import React from 'react';
// import component files that I want to use in App
import Gallery from './Gallery.js';
import Footer from './Footer.js'
import Header from './Header.js'


// 2. declare the class
class App extends React.Component {

  // We need to call a render function that will return our JSX 
  // (JSX is the stuff that looks like HTML)
  render() {
    // is called a "Frag" or fractional element
    //  the <> allows use to use multiple tags as siblings
    // it will not render on our page
    return (
      <>
        <Header />
       <Gallery />
       
        <Footer />
      </>
    );
    
  }
};

// 3. export the class
export default App;
