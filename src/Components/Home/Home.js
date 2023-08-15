import React, { Component } from "react";

import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import CompIntro from "./CompIntro";
import Sales from "./Sales";
import Contact from "./Contact";

import './Home.css';

import Consoles from '../Consoles/Consoles.js';


class Home extends Component {
  render() {
    return (
        <HashRouter>
        <div>
            <h1>Space Magic Retro Gaming</h1>
            <ul className="header">
                <li><NavLink to="/compIntro">Company Intro</NavLink></li>
                <li><NavLink to="/sales">Sell/Repair</NavLink></li>
                <li><NavLink to="/contact">Contact Us!</NavLink></li>
            </ul>
            <div className="content">
            <Routes>
                <Route path="/compIntro" element={<CompIntro />}/>
                <Route path="/sales" element={<Sales />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
            </div>
        </div>
        </HashRouter>
    );
  }
}



export default Home;