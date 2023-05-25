// Implement a function that takes a time (in milliseconds) and returns a Promise that resolves after the specified time has passed

async function resolveIn(value, milliseconds) {
    return new Promise(resolve => setTimeout(() => resolve('success'), milliseconds));
}

resolveIn("hello", 5000);
