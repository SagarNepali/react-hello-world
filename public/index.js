import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link } from 'react-router-dom';
import AppContainer from '../src/components/AppContainer/AppContainer.jsx';
import Home from '../src/components/Home/Home.jsx';
import About from '../src/components/About/About.jsx';
import Repos from '../src/components/Repos/Repos.jsx';
import './style.css';


ReactDOM.render(<AppContainer/>, document.getElementById('root'));


