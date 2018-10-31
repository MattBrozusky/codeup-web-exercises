// $(document).ready(() => {
    "use strict";

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    //1
    console.log(users.filter((user) => user.languages.length >= 3));


    //2
    console.log(users.map((user) => user.email));



    //3
    const totalYears = users.reduce((total, user) => {
        return total + user.yearsOfExperience;
    }, 0);

    let avgYears = totalYears / users.length;
    console.log(avgYears);



    //4
    const longestEmailUser = users.reduce((longestUserEmail, currentUser) => {
        return currentUser.email.length >= longestUserEmail.email.length ? currentUser : longestUserEmail;
    });
    console.log(longestEmailUser.email);



    //5
    const nameString = users.reduce((nameString, currentUser) => {
        return nameString + currentUser.name + ', '

    }, '');
    console.log(nameString);




    //6
    const uniqueLanguages =  users.reduce((allLanguages, currentUser) => {
        return allLanguages + currentUser.languages.join(', ') + ', '

    }, '');
    console.log(uniqueLanguages);

    let uniqueList = uniqueLanguages.split(',').filter((item, i, allItems) => {
        return i === allItems.indexOf(item);
    }).join(',');
    console.log(uniqueList);


// });