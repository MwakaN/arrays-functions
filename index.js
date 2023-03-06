/*Question 1

Mutation arrays methods change the array itself instead of returning a new array with the new changes. 
While Non-Mutation array methods return a whole new array which has all the changes.

Examples of Mutation array methods:
array.prototype.pop()
array.prototype.push()
array.prototype.shift()
array.prototype.unshift()
array.prototype.reverse()

Examples of Non-Mutation array methods:
array.concat()
array.includes()
array.indexOf
array.join()
array.lastIndexOf

*/

//Question 2
const language1 = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
language1.splice(5, 0, 'Kotlin');
console.log(language1)
//[ 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python', 'Kotlin' ] 

const language2 = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
language2.splice(3, 0, "Java");
console.log(language2)
//[ 'C#', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python' ]

const language3 = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
language3.shift();
console.log(language3)
//[ 'JavaScript', 'Ruby', 'PHP', 'Python' ]

const language4 = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
language4.unshift('Scale', 'Swift');
console.log(language4)
//[ 'Scale', 'Swift', 'C#', 'JavaScript', 'Ruby', 'PHP', 'Python' ]

const language5 = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
language5.splice(3, 1, 'Go', 'Rust');
console.log(language5)
//[ 'C#', 'JavaScript', 'Ruby', 'Go', 'Dust', 'Python' ]

//Question 3
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) 
        {
    			fruit[2] = "orange";
    			return fruit;
		}
console.log(fruit)
//[ 'apple', 'mango', 'banana' ]

//Question 4
function max(numbers) {
    return Math.max.apply(null, numbers);
  }

  console.log("Maximum value is " + max([4, 5, 10, -2]));
  //Maximum value is 10


  //Question 5



