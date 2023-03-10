import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import './utils/style/index.css';
import Header from './components/Header'
import Home from './pages/Home';
import Logement from './pages/Logement'
import About from './pages/About'
import Error from './components/Error'
import Footer from './components/Footer'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Logement/:id" element={<Logement/>} />
          <Route path="/A_propos" element={<About/>} />
          <Route path="*" element={<Error code="404" text="Oups! La page que vous demandez n'existe pas." link="Retourner sur la page d'accueil" />} />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
