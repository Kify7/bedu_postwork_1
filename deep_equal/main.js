//Function Deep equals

function isObject(object) {
    return typeof object === "object" && object != null;
}

function deepEqual(a, b) {
    if (isObject(a) && isObject(b)) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        for (let propiedad in a) {
            if (!deepEqual(a[propiedad], b[propiedad])) {
                return false;
            }
        }
        return true;
    } else return a === b;
}

const Rachel = {
    firstName: ('Rachell'),
    lastName: ('Dguez')
}

console.log('Test 1', deepEqual(3, 3)) //true
console.log('Test 2', deepEqual(3, '3')) //false
console.log('Test 3', deepEqual(Rachel, Rachel)) //true
console.log('Test 4', deepEqual(Rachel, { firstName: "Rachell", lastName: "Dguez" })) //true
console.log('Test 5', deepEqual(Rachel, { firstName: "Rachell" })) //false