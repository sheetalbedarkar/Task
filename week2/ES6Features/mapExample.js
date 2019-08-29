var map = new Map();
map.set("Potato", 12);
map.set("Tomato", 34);

console.log(map.get("Potato"))


for(let item of map) {
   console.log(item)
}


for(let item in map) {
   console.log(item)
}