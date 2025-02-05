function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}

const original = { name: "Alice", hobbies: ["reading", "traveling"] };
const cloned = deepClone(original);

// console.log(cloned)
cloned.hobbies.push("cycling")

console.log(original)
console.log(cloned)
