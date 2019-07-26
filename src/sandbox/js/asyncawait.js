/* An async() function is one that RETURNS A PROMISE
Async/await make things easier to read. 
It's SYNTACTIC SUGAR FOR PROMISES.

For example:
*/

movePlayer(100, 'Left')
.then(() => movePlayer(400, 'Up'))
.then(() => movePlayer(300, 'Right'))
.then(() => movePlayer(100, 'Down'));

// becomes...

async function playerStart() {
    await movePlayer(100, 'Left');
    await movePlayer(400, 'Up');
    await movePlayer(300, 'Right');
    await movePlayer(100, 'Down');
}

// and this...

const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "1");
}).then(res => console.log(res));

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "2");
}).then(res => console.log(res));

// becomes this

async function a() {
    await setTimeout(() => console.log("1"), 5000);
    await setTimeout(() => console.log("2"), 2000);
}

// Other examples below

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data);
} // why not await fetch('https://jsonplaceholder.typicode.com/users').json()? 

// PROMISE.ALL VS ASYNC/AWAIT

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
];

Promise.all(urls.map(url => {
    return fetch(url)
    .then(resp => resp.json());
}))
.then(results => {
    results.forEach(r => console.log(r));
})
.catch(() => console.log("There was an error"));

const getData = async function() {
    try {
        const { users, posts, albums } = await Promise.all(urls.map(url => fetch(url)
        .then(resp => resp.json())
        ));
        console.log(users);
        console.log(posts);
        console.log(albums);
    } catch (err) {
        console.log("oops", err);
    }
}

// EXERCISES

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
.then(response => response.json())
.then(console.log)

async function logSWData() {
    const resp = await fetch('https://swapi.co/api/starships/9/');
    const json = await resp.json();
    console.log(json);
}

// #2) ADVANCED: Update the function below to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        }));
        console.log('users', users);
        console.log('posta', posts);
        console.log('albums', albums);
    } catch (err) {
        console.log('ooooooops', err);
    }
}