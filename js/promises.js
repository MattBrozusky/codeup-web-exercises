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




const hackGitHub = (username) => {
    let fetchRequest = fetch(`https://api.github.com/users/${username}/events`, {
        headers: {'Authorization': '5e77ba3d3bed378ed36adf7d4750b5015604d80a'}

    });
    fetchRequest
        .then((response) => response.json())
        .then(data => console.log(data[0].created_at))
};

hackGitHub('MattBrozusky');


