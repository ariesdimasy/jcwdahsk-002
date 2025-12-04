function anagram(str1: string, str2: string) {

    let arr1 = str1.split("").sort().join("")
    let arr2 = str2.split("").sort().join("")

    return arr1 === arr2

}

console.log(anagram("anagram", "nagaram"))
console.log(anagram("kakak", "kakat"))