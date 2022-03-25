function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function getFiveHeads() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return attempts;
}

const fiveHeadsPromise = new Promise((resolve, reject) => {
    let attempts = getFiveHeads();
    if (attempts > 0 && attempts < 101) {
        resolve(`It took ${attempts} tries to flip five "heads"`);
    } else {
        reject(`Can't get to flip five "heads" in less than 100 tries`);
    }
});

fiveHeadsPromise
    .then(res => console.log(res))
    .catch(err => console.log(err))
console.log("This is run after the fiveHeadsPromise promise was call");