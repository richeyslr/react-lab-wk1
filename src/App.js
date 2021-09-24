import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast';
import { Component } from 'react';
import data from './components/data.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBeast: '',
      displayModal: false
}
this.selectBeastModal = this.selectBeastModal.bind(this);
this.closeModal = this.closeModal.bind(this);
  }
  selectBeastModal = (name) => {
    const selectedBeast = data.find(beast => name === beast.title);
    this.setState({selectedBeast, displayModal: true})
  }
  closeModal = () => {
    console.log('clicked');
    this.setState({displayModal: false})
  }
  render(){
  return (
    <div className="App">
     <Header />
    <Main selectBeastModal={this.selectBeastModal} />
    <SelectedBeast beast={this.state.selectedBeast} displayState={this.state.displayModal} closemodal={this.closeModal} />
     <Footer />
    </div>
  );
}
}
export default App;
