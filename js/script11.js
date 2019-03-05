// Spread operator
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const { tiger, ...rest} = animals; // rest = { lion: 5, monkey: 2 }

const arr = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}

sum(...arr) // 15

const luke = {
    name: 'Luke', 
    hasForce: true, 
    hasSister: true
};
 
const copy = {...luke};

// Finally (gets called whether an error was thrown or not)
const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
  ]
  
  Promise.all(urls.map(url => fetch(url).then(people => people.json())))
    .then(array => {
      throw Error
      console.log('1', array[0]) // Unreachable
      console.log('2', array[1])
      console.log('3', array[2])
      console.log('4', array[3])
    })
    .catch(err => console.log('Error!', err))
    .finally(() => console.log('extra action here'))

// FOR AWAIT OF loops through the async/await calls

const getData2 = async function() {
    const arrayOfPromises = urls.map(url => fetch(url));
  
    for await (const request of arrayOfPromises) {
      const data = await request.json(); 
      console.log(data)
    }
    // For-await takes each item from the array and waits for it to resolve. You'll get the first response even if the second response isn't ready yet, but you'll always get the responses in the correct order.
  }