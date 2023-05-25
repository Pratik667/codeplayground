// Implement a function that takes a time (in milliseconds) and returns a Promise that resolves after the specified time has passed

async function resolveIn(milliseconds) {
    console.log("Promise is pending");
    let timer = new Promise((resolve) => {
        setTimeout(() => {           
            resolve('success!!');
            console.log(`Promise is resolved after ${milliseconds}`);
        }, milliseconds);  
    });
    return timer;
}

resolveIn("hello", 5000).then(value => console.log(value)).catch(err => console.error(err));
//.then will print the resolve value