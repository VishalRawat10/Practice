console.log("Starting.");

setTimeout(() => {
    console.log("this is settimeout");
}, 1000);

for (let i = 0; i < 100 * 100; i++) {
    console.log(i);
}

fetch("").then(() => {
    console.log("fetched")
}).catch((err) => {
    console.log("Error occured : ", err);
});


console.log("This is last.");