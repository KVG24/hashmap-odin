import { HashMap } from "./hashmap.mjs";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
// after this point the whole array gets resized
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
// array gets resized again
test.set("kite", "pink");
test.set("lion", "golden");
test.set("moon", "silver");

// console.log(test.data);

// console.log(test.get("jacket"));

// console.log(test.has("apple"));

// console.log(test.remove("dog"));

// console.log(test.length());

// test.clear();

// console.log(test.keys());

// console.log(test.values());

// console.log(test.entries());
