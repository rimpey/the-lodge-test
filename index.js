import './scss/main.scss'
import $ from "jquery";

// const jokes = require('./jokes');
import { jokes } from './jokes';
jokes.getOne()
    .then(joke => {
        $('#joke').text(joke);
        //document.getElementById('joke').innerHTML = joke; // Vanilla Js
    });

$("#reset").click(function(){
    document.location.reload(true) });

const hamburger = document.querySelector('.hamburger');
const body = document.querySelector("body")

hamburger.onclick = function(event) {
    event.preventDefault();

    if (body.className === "nav-open")
        body.className = "";
    else
        body.className = "nav-open";
};