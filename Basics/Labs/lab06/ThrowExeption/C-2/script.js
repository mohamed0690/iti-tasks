function giveMeIntegerArgs() {
    try {

        if (arguments.length === 0)
            throw new Error("Please pass at least one argument.");
        for (let i = 0; i < arguments.length; i++) {
            if (!Number.isInteger(arguments[i])) {
                throw new Error("argument " + arguments[i] + " is Not a Number.");
            }
        }
        console.log("Your arguments are valid!");
    } catch (error) {
        console.error(error);
    }
}
giveMeIntegerArgs();
giveMeIntegerArgs(1, 2, "3");
giveMeIntegerArgs(1, 2, 3);