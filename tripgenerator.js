"use strict";

let destinations = ["Milwaukee", "Door County", "Wisconsin Dells", "Lake Geneva"];

let resturants = ["Rock Bottom", "Oakfire", "Fireside", "Olive Garden"];

let transportation = ["Bus", "Uber", "Lyft", "Rental"];

let entertainmentIdeas = ["Waterpark", "Horseback riding", "Zip line", "Arcade", "Summerfest", "Kite-surfing", "Shopping", "Boating"];

function getRandomElement(array){
    let randomIndex = Math.floor(Math.random() * array.length);
    let element = array[randomIndex]
    return element;
}

function newRandomGet(destinationsArray, resturantsArray, transportationArray, entertainmentIdeasArray){
    
    let destination = getRandomElement(destinationsArray);
    
    let resturant = getRandomElement(resturantsArray);
    
    let transport = getRandomElement(transportationArray);
    
    let entertainment = getRandomElement(entertainmentIdeasArray);
    
    let dayTrip = [];
    
    dayTrip.push(destination, resturant, transport, entertainment);
    
    alert(dayTrip);
}

newRandomGet(destinations, resturants, transportation, entertainmentIdeas);