const user = '{"name":"dimas", "age":34 }'
console.log(user)
const res = JSON.parse(user)
console.log(res)

const rres = JSON.stringify(res)
console.log(rres)