import React from 'react';
import './App.css';
import TmpUseState from './components/TemUseState';
import Market from './components/Market';
import Form from './components/Form';
import CarouselApp from './components/CarouselApp';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <CarouselApp />
        <TmpUseState />
        <Market />
        <Form />
      </Layout>
    </div>
  );
}

export default App;
