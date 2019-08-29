var wm = new WeakMap();

var o1  = {}
var o2  = {}
var o3  = {}


wm.set(o1, 1);
wm.set(o2, 2);
wm.set(o3, {a: "a"});
wm.set({}, 4);

console.log(wm.get(o2));
console.log(wm.has({}))

delete o2;

console.log(wm.get(o3));

for(let item in wm) {
   console.log(item)
}


for(let item of wm) {
   console.log(item)
}