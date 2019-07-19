/* eslint-disable no-console */
var user = {
    username: "Pasquale",
    password: "Ciliegia"
}

var database = [];
database.push(user);

var newsfeed = [
    {
        username: "Pippy",
        timeline: "shared a bunch of stuff"
    },
    {
        username: "Gossy",
        timeline: "Gimli says hi"
    },
    {
        username: "Gorbev",
        timeline: "Mishaps mishappen"
    }
]

var newUser = {};

newUser.username = prompt("Username: ");
newUser.password = prompt("Password: ");

// Foreach example
var fd = [3, 2, 4, 1, 5];

fd.forEach(i => {
    console.log(i**2);
});

// The database should really be in a hash table, this is just for practice
var logged = false;
for (var i = 0; i < database.length; i++) {
    if (database[i].username === newUser.username &&
        database[i].password === newUser.password) {
        logged = true;
        console.log("Logged in");
    }
}
if (!logged) {
    console.log("Not logged in");
}

// Same thing with foreach loop
logged = false;
database.forEach(function(i) {
    if (i.username === newUser.username &&
        i.password === newUser.password) {
            logged = true;
            console.log("Logged with foreach");
        }
});
if (!logged) {
    console.log("Not logged with foreach");
}

// assigning and pushing the same "user" instead of newUser would create 2 identical records! A new object must be created
database.push(newUser);
database.pop(newUser);