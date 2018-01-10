import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';

//To make the  bootstrap works
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import BeerRating from './containers/BeerRating/BeerRating';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BeerRating />
        </Layout>
      </div>
    );
  }
}

export default App;
