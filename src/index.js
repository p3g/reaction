import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './routes/index.js';
import './scss/main.scss';
import 'file?name=[name].[ext]!./index.html';
import Navbar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
render(AppRoutes,document.getElementById('app'));
