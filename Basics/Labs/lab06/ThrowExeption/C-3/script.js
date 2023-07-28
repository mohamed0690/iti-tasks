function giveMeArgsToReverse() {
    try {
        if (arguments.length === 0)
            throw new Error("Please pass at least one argument.");
        return Array.prototype.slice.call(arguments).reverse();
    } catch (error) {
        console.error(error);
    }
}

var res = giveMeArgsToReverse(1, "ahmed", 2, 3);
console.log("🚀 ~ file: script.js:12 ~ res:", res)



function giveMeArgsToReverseTheSecondWay() {
    try {
        if (arguments.length === 0)
            throw new Error("Please pass at least one argument.");
        var reversedArgs = [];
        for (var i = arguments.length - 1; i >= 0; i--) {
            reversedArgs.push(arguments[i]);
        }
        return reversedArgs;
    } catch (error) {
        console.error(error);
    }
}
res = giveMeArgsToReverseTheSecondWay(1, "ahmed", 2, 3);
console.log("🚀 ~ file: script.js:30 ~ res:", res)

