let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log(...arr);

for (let ind = 0; ind < arr.length; ind++) {
    let minInd = ind;
    for (let secInd = minInd + 1; secInd < arr.length; secInd++) {
        if (arr[minInd] > arr[secInd]) {
            minInd = secInd;
        }
    }
    if (ind != minInd) {
        let temp = arr[ind];
        arr[ind] = arr[minInd];
        arr[minInd] = temp;
    }
}

console.log(...arr)