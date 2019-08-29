var item = { a:"Potato"}
var set = new WeakSet();
set.add({ a:"Potato"}).add(item).add({ a:"Tomato"}).add({ a:"Tomato"});
console.log(set.size)
console.log(set.has({a:"Tomato"}))
console.log(set.has(item))

for(let item of set) {
   console.log(item)
}