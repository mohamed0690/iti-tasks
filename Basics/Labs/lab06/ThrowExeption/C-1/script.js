function giveMeTwoArgsOnlyUsingTryCatch(firstArg, secondArg) {
    try {
        if (arguments.length !== 2)
            throw new Error("Exactly two arguments are required.");
        console.log("Hello World!");
    } catch (error) {
        console.error(error);
    }
}
giveMeTwoArgsOnlyUsingTryCatch();
giveMeTwoArgsOnlyUsingTryCatch('');
giveMeTwoArgsOnlyUsingTryCatch('', '');


function giveMeTwoArgsOnly(firstArg, secondArg) {
    if (arguments.length !== 2) {
        console.error("Exactly two arguments are required.");
        return;
    }
    console.log("Hello World!");
}
giveMeTwoArgsOnly();
giveMeTwoArgsOnly('');
giveMeTwoArgsOnly('', '');
