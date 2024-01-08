import React from "react";

import {Footer, Header, Possibility, Features, WhatsGPT3, Blog} from './containers'
import {Cta , Brand, Navbar} from './components';
import './app.css';



function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Brand />  
      <WhatsGPT3 />  
      <Features />  
      <Possibility />  
      <Cta />  
      <Blog/>  
      <Footer />  

    </div>
  );
}

export default App;
 