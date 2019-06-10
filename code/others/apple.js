function solution1(s) {
    if (parseInt(s) === 0) {
      return 0
    }
    
    let index = -1;
    for (let i= 0; i < s.length; i++) {
      if (parseInt(s[i]) === 1) {
        index = i;
        break;
      }
    }
    
    let newString = s.substring(index);
    // console.log(newString)
    let res = 0;
    for (let i = newString.length - 1; i > 0; i--) {
      if(parseInt(newString[i]) === 0) {
        res++;
      } else {
        res += 2;
      }
    }
    
    return res+1;
  }
  console.log('------')
  console.log(solution1('011100'))
  
  
  function solution2(N, K) {
    
    if (K === 0) {
      return N - 1;
    }
    let count = 0;
  // 从一开始
    while (K > 0 && N > 1) {
      if (N%2 === 0) {
        N = N / 2;
        count++;
        K--;
      } else {
        N = (N - 1)/2;
        count=count + 2;
        K--;
      }
    }
    return count + N - 1;
  }
  
  console.log(solution2(9, 0));