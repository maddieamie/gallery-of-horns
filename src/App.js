// 1. import React
import React from 'react';
// import component files that I want to use in App
import Gallery from './Gallery.js';
import Footer from './Footer.js'
import Header from './Header.js'
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Modal from 'react-bootstrap/Modal';
import data from './data.json';
import SelectedBeast from './components/SelectedBeast.js';
import './App.css';



// 2. declare the class
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favorites: '',
      isModalDisplaying: false,
      beastName: '',
      beastImg: '',
      beastDes: '',
      keyword:  ''
    }
  }

  addFaves = () => {
    this.setState({
      favorites: this.state.favorites + '❤️'
    });
  }

  
  handleShowModal = (title, imageURL, description, keyword) => {
    this.setState({
      isModalDisplaying: true,
      beastName: title,
      beastImg: imageURL,
      beastDes: description,
      keyword: keyword
    });
  }

  handleCloseModal = () => {
    this.setState({
      isModalDisplaying: false
    });
  }




  // We need to call a render function that will return our JSX 
  // (JSX is the stuff that looks like HTML)
  render() {
    // is called a "Frag" or fractional element
    //  the <> allows use to use multiple tags as siblings
    // it will not render on our page
    return (
      <>

      
        <Header 
        favorites={this.state.favorites}
        />
       
      
       <Gallery 
       addFaves={this.addFaves}
       handleShowModal={this.handleShowModal}
       data={data}
       />
      
        <Footer />

        <Modal
          // show is a boolean, true or false, should the modal display
          show={this.state.isModalDisplaying}
          // onHide is the method that will change the value of our boolean (show)
          onHide={this.handleCloseModal}

          className="modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Beast: {this.state.beastName}</Modal.Title>
            <Modal.Body>
              <SelectedBeast
            beastImg={this.state.beastImg}
            keyword={this.state.keyword}
            beastDes={this.state.beastDes} 
           
            />
            </Modal.Body>
          </Modal.Header>
        </Modal>
       
      </>
    );
    
  }
};

// 3. export the class
export default App;
