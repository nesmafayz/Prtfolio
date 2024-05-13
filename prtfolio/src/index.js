import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css';
import App from './App';
import Header from './components/Header/Header.jsx'
import About from './components/About/About.jsx'
import Skills from './components/Skills/Skills.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx'
import Footer from './components/Footer/Footer.jsx'

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header/>
    <About />
    <Skills />
    <Portfolio />
    <Footer />
    

  </React.StrictMode>
);

reportWebVitals();
