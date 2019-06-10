// 696. Count Binary Substrings
// Give a string s, count the number of 
// non-empty (contiguous) substrings that have the same number of 0's 
// and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.
export default (str) => {
  // 建立数据结构，堆栈，保存数据
  let r = []
  // 给定任意子输入都返回第一个符合条件的子串
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  // 通过for循环控制程序运行的流程
  for (let i = 0, len = str.length - 1; i < len; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r
}

var countBinarySubstrings = function(s) {
  if (s.length <= 1) return 0;
  var preRun = 0; 
  var curRun = 1;
  var count = 0 
  for (let i = 1; i < s.length; i++) { 
      if (s[i - 1] === s[i]) {
          curRun++; 
      } else { 
          preRun = curRun; 
          curRun = 1;     
      }
      if (preRun >= curRun) count++;
  }
  return count;  
}
