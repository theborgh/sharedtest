// REFERENCE TYPE

[] === []; // false (they're 2 different objects)

let obj1 = {age: 10};
let obj2 = obj1;
let obj2 = {age: 10};

obj1 === obj2 // true
obj1 === obj3 // false

obj2.age = 13;
obj1.age // 13

// CONTEXT

const obj = {
    a: function() {
        console.log(this);
    },
    b: "otherfield"
}

// DO NOT write methods using arrow functions!
// Arrow functions close over the `this` of the LEXICALLY ENCLOSING CONTEXT,
// so the `this` within the arrow function is the one that was current where I defined the object.
// Arrow functions ARE NOT just a shorthand for function()!
// Do not use them for methods or constructors
// They have THEIR OWN BINDINGS to the this, arguments, super, and new.target keywords
const obj2 = {
    a: () => {
        console.log(this); 
    },
	b: "otherfield"
}

obj.a() // obj ("this" is the object that is calling a(); the context of a())

obj2.a() // window

// INSTANTIATION

class Player {
    constructor(name, type) {
        this.name = name; // I don't need to declare class fields!
        this.type = type;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} of type ${this.type}`);
    }
}

let p = new Player("gaga", "wizard");
p.introduce();

class Wizard extends Player {
    spells = ["fireball", "invisibility"];

    constructor(name, type, spell) {
        super(name, type);
        this.spell = spell;
    }

    cast(i) {
        console.log(`Casting the ${spells[i]} spell!`);
    }
}