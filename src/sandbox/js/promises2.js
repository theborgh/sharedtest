/* eslint-disable no-console */
// EXERCISES

// Create a promise that resolves in 4 seconds and returns "success" string

const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 4000);
})

// Run the above promise and make it console.log "success"

p1.then(res => console.log(res));

// Shorten it with Promise.resolve() and console login "success"

Promise.resolve(setTimeout(() => {
    console.log("success");
}), 4000);

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
    .catch(() => console.log("Something went wrong"));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => fetch(url)
    .then(resp => resp.json())))
    .then(res => {
        console.log(res[0]);
        console.log(res[1]);
        console.log(res[2]);
    })
    .catch(() => console.log("There was an error"));
