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

    //2
    console.log(users.filter((user) => user.languages.length >= 3));


    //3
    console.log(users.map(({ id, email }) => {
        return {
            email,
            id
        };
    }));



    //4
    const totalYears = users.reduce((total, user) => {
        return total + user.yearsOfExperience;
    }, 0);

    let avgYears = totalYears / users.length;
    console.log(avgYears);



    //5
    const longestEmailUser = users.reduce((prev, curr) => {
        return curr.email.length > prev.email.length ? curr : prev;
    });
    console.log(longestEmailUser.email);



    //6
    const nameString = users.reduce((nameString, currentUser) => {
        return nameString + currentUser.name + ', '

    }, '');
    console.log(nameString);




    //Bonus

    const uniqueLanguagesList = (() =>{
        let uniqueLanguages =  users.reduce((allLanguages, currentUser, index, arr) => {
            let connector = ', ';
            if (index === arr.length - 1) {
                connector = '.';
                console.log("working")
            }
            return allLanguages + currentUser.languages.join(', ') + connector

        }, '');
        uniqueLanguages = new Set(uniqueLanguages);
        console.log(uniqueLanguages);

    });


// });