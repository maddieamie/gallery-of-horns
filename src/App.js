// 1. import React
import React from 'react';
// import component files that I want to use in App
import Main from './Main.js';
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
       <Main
       name1="UniWhal"
       imageUrl1="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
       altText1="narwhal"
       title1="UniWhal"
       description1="A unicorn and a narwhal nuzzling their horns."
       horns1="1"


       name2="Rhino"
       imageUrl2="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"
       altText2="Rhino Family"
       title2="Rhino Family"
       description2="Parent rhino with two babies"
       horns2="2"
       />
        <Footer />
      </>
    );
    
  }
};

// 3. export the class
export default App;
