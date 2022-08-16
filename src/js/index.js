//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/home.jsx";

let ticTac =0;

setInterval(function(){
    const centenaMil = Math.floor(ticTac/100000)
    const decenaMil = Math.floor(ticTac/10000)
    const unidadMil = Math.floor(ticTac/1000)
    const centena = Math.floor(ticTac/100)
    const decena = Math.floor(ticTac/10)
    const unidad = Math.floor(ticTac/1)
    console.log(centenaMil, decenaMil, unidadMil, centena, decena, unidad);
    counter++;

   

ReactDOM.render(<Counter digitUnidad={ticTac.indexOf()}/>, document.querySelector("#app"));

