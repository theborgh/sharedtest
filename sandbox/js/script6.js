
const arr = [4, 5, 3, 6, 7, 11];

const double = arr.map(e => e*2);

const gr5 = arr.filter(e => e > 5);

const sum = arr.reduce((acc, sum) => acc + sum); // 36 (default 2nd param of reduce=value of 1st element in the array)

const sum2 = arr.reduce((acc, sum) => acc + sum, 4); // 40

const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  // Create a new list with all user information, adding "!" to the end of each item they own.
  const newList = array.map(e => {
    e.items = e.items.map(e => `${e}!`);
    return e;
  })
  