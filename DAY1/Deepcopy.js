function deepEqual(var1, var2) {
    if (var1 === var2) return true;
    if (var1 == null || typeof var1 != 'object' ||
    var2 == null || typeof var2 != 'object')
    return false;
    var countA = 0, countB = 0;
    for (var i in var1)
         countA += 1;
    for (var i in var2) {
        countB += 1;
        if (!(i in var1) || !deepEqual(var1[i], var2[i]))
        return false;
}
return countA == countB;
}
let x1 ={
    Name : "Sameer",
    Roll : 59,
    College : "IIITH"
    }
let x2 ={
    Name : "Sameer",
    Roll : 59,
    College : "IIITH"
    }
let x3 = {
    name:'Sameer'
}
let x4 = {
    name:'sameer'
}
console.log(deepEqual(x1,x2))
console.log(deepEqual(x3,x4)) // here the case sensitive testcase is given