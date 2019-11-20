/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as microsoftTeams from "@microsoft/teams-js";

class App extends React.Component {
  constructor(props,context) {
    super(props,context);
  }
  componentDidMount = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://vision.appreciatehub.com/ui/givewidget/app.bundle.js";
    document.head.appendChild(script);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = "https://vision.appreciatehub.com/ui/givewidget/app.bundle.css";
    document.head.appendChild(link);
    const script1 = document.createElement('script');
    script.async = true;
    script1.src="https://vision.appreciatehub.com/ui/givewidget/giveanywhere.js";
    document.head.appendChild(script1);
    script1.onload = () => {
      initGiveAnywhere("#appreciate", "https://fs-prod.octanner.com/adfs/ls/IdpInitiatedSignOn.aspx?loginToRp=fed.appreciatehub.com")
    }
    console.log("componendDidMount");
    microsoftTeams.initialize();
    microsoftTeams.getContext = (context) => {
      console.log("microsoft teams context", context);
    }
  }  

  render() {
  return (
    <div className="App" ref = {e => (this.div = e)}>
      
    </div>
  );  
  }
}

export default App;
