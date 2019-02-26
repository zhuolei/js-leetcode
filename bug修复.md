## 问题修复

### 卡牌分组问题修复

```js
export default function cardGroup (arr) {
  // 将卡牌按值排序保证相同的卡牌是挨着的
  let str = arr.sort((a, b) => a - b).join('')
  // 分组(单张或者多张)
  let group = str.match(/(\d)\1+|\d/g)
  // 求两个数的最大公约数
  let gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  // 思想：只要所有的分组具有最大公约数(大于1)就满足条件
  // 对所有的分组进行最大公约数验证，相邻两个分组的最大公约数，再与后面的公约数进行验证，以此类推，有一个最大公约数为1就退出
  while (group.length > 1) {
    let a = group.shift().length
    let b = group.shift().length
    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      // 将前两个分组的最大公约数推进数组与下一个分组再次验证是否有最大公约数
      group.unshift('0'.repeat(v))
    }
  }
  // 考虑边界['11']即只有一个分组的时候
  return group.length ? group[0].length > 1 : false
}
```
