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

for (el of ['h', 'e', 'l', 'l', 'o']) {
   s.push(el);
}

while(s.length) {
   console.log(s.pop());
}



const reverse = s => {
   if (!s || typeof s !== 'string') {
      throw new Error("Invalid input");
   }

   if (s.length < 2) {
      return s;
   }

   let tmpArr = new MyArray();
   let res = '';

   for (let i = 0; i < s.length; i++) {
      tmpArr.push(s[i]);
   }
   
   for(let i = 0; i < s.length; i++) {
      res = res.concat(tmpArr.pop());
   }
   
   return res;
}

const reverse2 = s => {

   for (let i = 0; i < s.length/2; i++) {
      let tmp = s[i];
      s[i] = s[s.length-1-i];
      s[s.length-1-i] = tmp;
    }
   return s;
}

const reverse3 = s => [...s].reverse().join('');

console.log(reverse("hello world"));
console.log(reverse2("hello world"));
console.log(reverse3("hello world"));

const mergeSortedArrays = (arr1, arr2) => {
   let i = 0, j = 0;
   let res = [];

   if(!Array.isArray(arr1) || !Array.isArray(arr2)) {
      return "ERROR: invalid input";
   }

   while (i < arr1.length && j < arr2.length) {
      if (arr1[i] >= arr2[j]) {
         res.push(arr2[j++]);
      } else {
         res.push(arr1[i++]);
      }
   }

   if (i === arr1.length) {
         res.push(...arr2.slice(j, arr2.length));
   } else {
      res.push(...arr1.slice(i, arr1.length));
   }

   return res;
}

console.log(mergeSortedArrays([-3, 2, 5, 5, 7], [0, 2, 5, 6, 99, 255]));