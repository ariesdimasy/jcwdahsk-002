var user = '{"name":"dimas", "age":34 }';
console.log(user);
var res = JSON.parse(user);
console.log(res);
var rres = JSON.stringify(res);
console.log(rres);
