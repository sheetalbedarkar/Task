var set = new Set();
set.add("Potato").add("Tomato").add("Tomato");
console.log(set.size)
console.log(set.has("Tomato"))

for(var item of set) {
   console.log(item)
}