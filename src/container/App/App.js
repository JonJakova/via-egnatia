import React, { Component, Fragment } from "react";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import Roadmap from "../Roadmap/Roadmap";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Roadmap />
        <Footer />
      </Fragment>
    )
  }
}
export default App;
