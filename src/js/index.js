//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

function Counter(props){
  return (<div className="Contador">
  <div className="relojito"> 🕒 </div>
    <div className="centenaMil">{props.digCentenaMil % 10}</div>
    <div className="decenaMil">{props.digDecenaMil % 10}</div>
    <div className="unidadMil">{props.digUnidadMil % 10}</div>
    <div className="centena">{props.digCentena % 10}</div>
    <div className="decena">{props.digDecena % 10}</div>
    <div className="unidad">{props.digUnidad % 10} </div>
  </div>);
}

Counter.PropTypes ={
  digCentenaMil: PropTypes.number,
  digDecenaMil: PropTypes.number,
  digUnidadMil: PropTypes.number,
  digCentena: PropTypes.number,
  digDecena: PropTypes.number,
  digUnidad: PropTypes.number
};

let ticTac =0;

setInterval(function(){
  const centenaMil = Math.floor(ticTac/100000);
  const decenaMil = Math.floor(ticTac/10000);
  const unidadMil = Math.floor(ticTac/1000);
  const centena = Math.floor(ticTac/100);
  const decena = Math.floor(ticTac/10);
  const unidad = Math.floor(ticTac/1);
 console.log(centenaMil, decenaMil, unidadMil, centena, decena, unidad);
 ticTac++;

   

ReactDOM.render(<Counter digUnidad={unidad} digDecena={decena} digCentena={centena} digUnidadMil={unidadMil} digDecenaMil={decenaMil} digCentenaMil={centenaMil}/>, document.querySelector("#app")); },1000);

