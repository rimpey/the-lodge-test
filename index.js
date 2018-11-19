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



// click hamburger to show mobile menu
const hamburger = document.querySelector('.hamburger');
const body = document.querySelector("body")

hamburger.onclick = function(event) {
    event.preventDefault();

    body.classList.toggle("nav-open");
};


// click Go button to display list of songs
const goButton = document.getElementById('go');

goButton.onclick = function(event) {
    event.preventDefault();

    if (body.classList.contains("list-albums")) {
        body.classList.remove("list-albums", "list-albums-loaded");
    } else {
      body.classList.add("list-albums");

      setTimeout(() => {
        body.classList.add("list-albums-loading");

        setTimeout(() => {
          body.classList.remove("list-albums-loading");
          body.classList.add("list-albums-loaded");
        }, 2000);

      }, 300);
    }
}
