/* eslint-disable no-console */
// Simplified & inefficient implementation, for conceptual demonstration only

class MyHash {
   constructor(size) {
       // Map() or an object is better
      this.data = new Array(size);
   }

   _hashFunction(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
         hash = (hash + key.charCodeAt(i)*i) % this.data.length;
      }
      return hash;
   }

   insert(key, value) {
      let index = this._hashFunction(key);
      if (!this.data[index]) {
         this.data[index] = [];
      }
      
      this.data[index].push([key, value]);
   }

   get(key) {
      let index = this._hashFunction(key);
      for (let i = 0; i < this.data[index].length; i++) {
         if (this.data[index][i][0] === key)
            return this.data[index][i][1];
      }
      return null;
   }

   getAllKeys() {
      const keys = [];

      for(let i = 0; i < this.data.length; i++) {
         if (this.data[i]) {
            for (let j = 0; j < this.data[i].length; j++) {
               keys.push(this.data[i][j][0]);
            }
         }
      }
      return keys;
   }
}

const hash = new MyHash(3);
hash.insert('grapes', 5);
hash.insert('water', 3);
hash.insert('strawberries', 9);
hash.insert('chestnuts', 1);
hash.insert('walnuts', 4);
hash.insert('apples', 4);
hash.insert('pears', 22);

console.log(hash.get('pears'));
console.log(hash.get('water'));
console.log(hash.get('parmegian'));

console.log(hash.getAllKeys());