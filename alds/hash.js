
class MyHash {
   constructor(size) {
      this.data = new Array(size);
   }

   _hashFunction(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
         hash = (hash + key.charCodeAt(i)*i) % this.data.length;
      }
      return hash;
   }
}