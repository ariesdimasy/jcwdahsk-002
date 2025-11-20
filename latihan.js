let fruits = ['mera-mera', 'moku-moku', 'suna-suna'];
console.log(fruits);
let fruitsParamecia = ['gomu-gomu', 'bari-bari', 'doku-doku']

// let fruits = new Array ['mera-mera', 'moku-moku', 'suna-suna'];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let fruitsData = [
    {name: 'mera-mera', type:'logia', power: 'fire'},
    {name: 'moku-moku', type:'logia', power: 'smoke'},
    {name: 'suna-suna', type:'logia', power: 'sun'}
]

console.log(fruitsData);
console.log(fruitsData.length);
fruits.push('hie-hie');
console.log(fruits);
fruits[2] = 'gura-gura';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift('yami-yami');
console.log(fruits);

// panjang datanya adalah 4
// i dari 0 sampai 4
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

for (let item of fruits) {
    console.log(item)
}

fruits.forEach((item, index) => {
    console.log(index, item)
})

console.log(fruits.concat(fruitsParamecia))

console.log(fruitsParamecia.toString())

fruitsData.map((item)=> {
    console.log(' name : ', item.name)
    console.log(' type : ', item.type)
    console.log(' power : ', item.power)
})

let mySort = fruits.sort((a: String, b: string) => {
    return a>b ? 1 : -1
})

console.log(mySort)

let myFilter = fruitsData.filter((item) => {
    return item.type === 'logia'
})