function outerFunction() {
    let count = 0
    function innerFunction() {
        count++
        return count
    }
    function innerFunction2() {
        count--
        return count
    }
    return {
        innerFunction,
        innerFunction2
    }
}

const innerFunc = outerFunction()
console.log(innerFunc.innerFunction());
console.log(innerFunc.innerFunction());
console.log(innerFunc.innerFunction());
console.log(innerFunc.innerFunction2());
