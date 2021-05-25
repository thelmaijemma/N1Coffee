import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from '../Components/Nav/Nav';
import TagSearch from '../Components/TagSearch/TagSearch.js';
import About from '../Components/About/About';
import AddListing from '../Components/AddListing/AddLIsting.js';
import Contact from '../Components/Contact/Contact.js';
import Footer from '../Components/Footer/Footer';



export function App(){

    return (

        <div>
            <Nav/>
           
            <TagSearch></TagSearch>
          
      
            <About/>
            <AddListing/>
            <Contact/>
            <Footer/>
        </div>
       
    )
} 

{/*

<div className="flex-container-split-map">
            <Map></Map>
            <TagSearch></TagSearch>
            </div>
*/}