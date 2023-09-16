// 1. import React
import React from 'react';
// import component files that I want to use in App
import Gallery from './Gallery.js';
import Footer from './Footer.js'
import Header from './Header.js'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form';
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
      keyword:  '',
      selectedHorns: '',
      rawData: data,
      filteredData: data
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
  handleHornsChange = (event) => {
    const selectedHorns = event.target.value;
    this.setState({ selectedHorns });

    if (selectedHorns === '1' || selectedHorns === '2' || selectedHorns === '3' || selectedHorns === '100') {
      let newData= this.state.rawData.filter((hornedB) => hornedB.horns === parseInt(selectedHorns));
      this.setState({filteredData: newData});
    }

    else {
    this.setState({filteredData: this.state.rawData});
  }
  };



  render() {

    return (
      <>

      <div id="nav">
        <Header 
        />
       <Form>
       <Form.Select size="lg" value={this.state.selectedHorns} onChange={this.handleHornsChange} className="Dropdown" aria-label="Select Number of Horns">
        <option value="all">All Beasts</option>
        <option value="1">One Horn</option>
        <option value="2">Two Horns</option>
        <option value="3">Three Horns</option>
        <option value="100">One Hundred Horns</option>
      </Form.Select>
      </Form>
      </div>

       <Gallery 
       addFaves={this.addFaves}
       handleShowModal={this.handleShowModal}
       handleHornsChange={this.handleHornsChange}
       filteredData={this.state.filteredData}
      
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
