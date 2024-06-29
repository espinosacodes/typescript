"use strict";
let programmer = {
    name: 'John Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JS'],
    address: {
        city: 'New York',
        country: 'USA'
    },
    drink: false
};
let programmer2 = {
    name: 'Jane Doe',
    age: 25,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    address: {
        city: 'San Francisco',
        country: 'USA'
    },
    drink: null
};
function sendCv(programmer) {
    console.log(`Sending CV to ${programmer.name}`);
}
sendCv(programmer2);
//1:16:30
