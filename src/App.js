import React from 'react';
// import './App.css';
import Header from './components/header';
import Ad_bottom from './components/ad_bottom';
import Footer from './components/footer';
import ScrollUp from './components/scroll_up';

function App(props) {
  return (
      <>
          <div className="main-content-wrapper d-flex clearfix">
              <Header/>
              {
                 props.children
              }
          </div>
          <Ad_bottom/>
          <Footer/>
          <ScrollUp/>
      </>
  );
}

export default App;
