interface Programmer {
    name: string,
    age: number,
    skills: string[],
    address: {
        city: string,
        country: string
    },
    drink: boolean | null

}



let programmer: Programmer = {
    name: 'John Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JS'],
    address: {
        city: 'New York',
        country: 'USA'
    },
    drink: false
}

let programmer2: Programmer = {
    name: 'Jane Doe',
    age: 25,
    skills: ['HTML', 'CSS', 'JS', 'React'],
    address: {
        city: 'San Francisco',
        country: 'USA'
    },
    drink: null
}

function sendCv(programmer: Programmer){
    console.log(`Sending CV to ${programmer.name}`)
}

sendCv(programmer2)

//1:16:30