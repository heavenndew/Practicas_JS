function solution(numbers) {
    return numbers.reduce((sum, element) => sum + element, 0)
  }
  
  console.log(solution([1, 1, 1]));
  console.log(solution([2, 4, 8]));