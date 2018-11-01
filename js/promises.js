"use strict";


// const wait = (number) => {
//     return new Promise((resolve, reject) => {
//          setTimeout(() => {
//             resolve()
//         }, number);
//     })
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));




// const hackGitHub = (username) => {
//     let fetchRequest = fetch(`https://api.github.com/users/${username}/events`, {
//         headers: {'Authorization': ''}
//     });
//
//     fetchRequest
//         .then((response) => response.json())
//         .then(data => console.log(data))
// };
//
//
// hackGitHub('MattBrozusky');






// Using the Star Wars API, log the homeworld of a searched character


const homeWorld = (character) => {
  fetch(`https://swapi.co/api/people/?search=${character}`, {

  }).then((response) => response.json())
    .then(data => console.log(data));
};

homeWorld('luke');














