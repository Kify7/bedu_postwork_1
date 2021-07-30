//Function Deep equals

function isObject(object) {
    if (typeof object === "object" && object != null) {
        return true;
    } else {
        return false;
    }
}

function deepEqual(a, b) {
    if (a === b) {
        return true;
    } else if (isObject(a) && isObject(b)) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }
        for (var propiedad in a) {
            if (!deepEqual(a[propiedad], b[propiedad])) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}



const Rachel = {
    firstName: ('Rachell'),
    lastName: ('Dguez')
}

console.log('Test 1', deepEqual(3, 3))
console.log('Test 2',
    deepEqual(3, '3'))
console.log('Test 3', deepEqual(Rachel, Rachel))

console.log('Test 4', deepEqual(Rachel, {
    firstName: "Rachell",
    lastName: "Dguez"
}))

console.log('Test 5', deepEqual(Rachel, {
    firstName: "Rachell"
}))