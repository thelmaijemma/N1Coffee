import React from 'react';
import Map from '../Components/Map/Map.js';
import './App.css';
import Nav from '../Components/Nav/Nav';


export function App(){
    return (
        <div>
            <Nav/>
            <Map></Map>
            <div className="ListBox">
               
            </div>
        
        </div>
    )
}