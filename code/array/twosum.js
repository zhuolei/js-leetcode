const twoSum = (arr, target) => {
    console.log(typeof arr === 'object');
    if (typeof arr != 'object' || typeof target != 'number') {
        return [];
    }
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] === target - arr[i]) {
                res.push(arr[i], arr[j]);
            }
        }
    }
    return res;
}
const twoSum2 = (arr, target) => {
    let map = {}, res = [];
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] !== undefined) {
            res.push(map[arr[i]], arr[i])
        } else {
            map[target - arr[i]] = arr[i]
        }
    }
    return res;
}
const arr = [1, 2, 3, 4, 5, 6];
console.log(twoSum2(arr,10))
// export default twoSum;