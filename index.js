// exercise 1
   function generatePyramid(){
    const totalRows = 5;
    let output = '';
    for (let i=1; i<=totalRows; i++){
        for (let j=1; j<=i; j++){
            output += j + ' ';
        }
         console.log(output);
        output = '';
    }
   }

   generatePyramid();

//exercise 2
// let fizzBuzz = function (n) {

//     const arr = []
//     for (i = 1; i <= n; i++) {
//         if (i % 15 === 0) arr.push("FizzBuzz")
//         else if (i % 3 === 0) arr.push("Fizz")
//         else if (i % 5 === 0) arr.push("Buzz")
//         else arr.push(i.toString())
//     }
//     return arr

// };
// console.log(fizzBuzz(15))

function fizzBuzz(n) {
    for (let i=1; i<=n; i++){
        if(i%3 === 0){
            console.log("fizz");
        } else if(i%5 === 0){
            console.log("buzz");
        } else if(i%5 === 0 & i%3 === 0){
            console.log('fizzbuzz');
        } else {console.log(i)}
    }
    // return fizzBuzz;
}

fizzBuzz(15);

//exercise 3


function bodyIndex(weight,height){
    let BMI = weight/height**2;
    if (BMI <18.5){
        console.log("less weight");
    } else if(BMI  >18.5 && BMI <24.9){
        console.log("ideal");
    } else if(BMI >=25 && BMI <=29.9){
        console.log("overweight");
    } else if(BMI >=30 && BMI <=39.9){
        console.log("very overweight");
    } else if(BMI >39.9){
        console.log("obesity");
    }
}

bodyIndex(70,170);

//exercise 4
// function removeOdd(arr){
//     for (let i = 0; i < arr.length; i++) {
//         while (arr[i] % 2) {
//             arr.splice(i, 1);
//         }
//     }
//     return arr;
// }

// removeOdd([15]);

function removeAllOdds(nums){
    let result = []
    for (let i=0; i<nums.length; i++){
        if (nums[i]%2===0){
            result.push(nums[i])
        }
    }
    return result
}

console.log(removeAllOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//exercise 5 tes

const str ='hello world';

const array = str.split(' ');

console.log(array);