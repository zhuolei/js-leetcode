export default (arr) => {
  let group = [];
  let tmp = {};
  // store number of each card
  arr.forEach(item => {
    tmp[item] = tmp[item]? tmp[item] + 1 : 1;
  });
  for (let i of Object.values(tmp)) {
    group.push(i)
  }
  let gcd = (a,b) => {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b)
    }
  }
  while (group.length > 0) {
    let a = group.shift();
    let b = group.shift();
    let v = gcd (a, b);
    if (v === 1) {
      return false;
    } else {
      group.unshift(v)
    }
  }
  return group.length ? group[0] > 1: false;
}


