// Very inefficient & simplified implementation **for testing purposes only**

class MyArray {
   constructor() {
      this.length = 0;
      this.data = {};
   }

   get(arrIndex) {
      return this.data[arrIndex];
   }

   push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.length;
   }

   pop() {
      if(this.length === 0) {
         return undefined;
      }
      const lastItem = this.data[this.length-1];
      delete this.data[this.length-1];
      this.length--;
      return lastItem;
   }

   delete(index) {
      const item = this.data[index];
      this._shiftItems(index);
      delete this.data[this.length-1];
      this.length--;
   }

   _shiftItems(index) {
      for (let i = index; i < this.length-1; i++) {
         this.data[i] = this.data[i+1];
      }
   }

   find(item) {
      for (let i = 0; i < this.length; i++) {
         if (this.data[i] === item) {
            return i;
         }
      }
      return -1;
   }
}

const s = new MyArray();

s.push('h');
s.push('e');
s.push('l');
s.push('l');
s.push('o');

while(s.length> 0) {
   console.log(s.pop());
}