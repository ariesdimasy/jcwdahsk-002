function splitString(str: string) {
    let result = []
    let res = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            res = res + str[i]
            if (i === str.length - 1) {
                result.push(res)
                res = ""
            }
        } else {
            result.push(res)
            res = ""
        }
    }

    return result
}

console.log(splitString("Hello World"))
console.log(splitString("Hello World Dimas"))

function removeAllOdds(nums: number[]) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            result.push(nums[i])
        }
    }

    return result
}

console.log(removeAllOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

function stairNumber(height: number) {
    let res = "" // string
    for (let i = 1; i <= height; i++) {
        res = res + " " + i // 1 + 2 
        console.log(res)
    }
}

stairNumber(5)
stairNumber(6)

/*
1
12
123

*/


// NOTES
// Pengumpulan PR Yusuf Budiansyah
// yang bagian 01 02 03 saya belum nemu caranya pa

function fizzbuzz(num: number[]) {
    let result = [];
    for(let i = 0; i<num.length; i++){
        if(num[i]%3 == 0 && num[i]%5 == 0){
            result.push("FizzBuzz");
        }else if(num[i]%3 == 0){
            result.push("Fizz");
        }else if(num[i]%5 == 0){
            result.push("Buzz");
        }else{
            result.push(num[i]);
        }
        
}
return result;
}

console.log(fizzbuzz([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]))

console.log("== fizzbuzz ===")

function bmi(weight: number, height: number)  {
    let formula = weight / (height * height);
    if(formula <18.5){
        return "lessweight";
    }else if(formula >= 18.5 && formula <= 24.9){   
        return "Ideal";
    }else if(formula >= 25 && formula <= 29.9){
        return "Overweight";
    }else if (formula >=30 && formula <=39.9){
        return "Very Overweight";
    }else{
        return "Obesity"
    }

}

console.log("berat badan kamu: " + bmi(79, 1.64))
console.log("== bmi ===")

function triangle(height: number){
    for(let i = 1; i<height; i++){
        let num = "";
        for(let j = 1; j<=i; j++){
            num += "" + j
        }
        console.log(num);
}
}
triangle(5)
console.log("== triangle ===")