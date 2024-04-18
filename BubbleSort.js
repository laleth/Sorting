let arr = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
console.log(...arr);

for (let itr = 0; itr < arr.length; itr++) {
    for (let ind = 0; ind < arr.length - 1; ind++) {
        if (arr[ind] > arr[ind + 1]) {
            arr[ind] = arr[ind] + arr[ind + 1];
            arr[ind + 1] = arr[ind] - arr[ind + 1];
            arr[ind] = arr[ind] - arr[ind + 1];
        }
    }
}
console.log(...arr)