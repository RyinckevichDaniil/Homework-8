let array = [1, 2, 3, 4, 5, 6];

function map(arr, callback) {
  let result = [];
  for(let i = 0; i<arr.length; i++) {
      const functionVariable = callback(arr[i], i, arr);
      result.push(functionVariable);
  }
  return result;
}

function calculator(item) {
   return item  * 2 + 4;
}

function filter(arr, callback) {
  let result = [];
  for(let i = 0; i<arr.length; i++) {
      const functionCondition = callback(arr[i], i, arr);
      if(functionCondition){
        result.push(arr[i]);
      }
  }
  return result;
}

function checkFilter(item) {
  return item > 2 && item < 6;
}

const notification = [
  {
      createAt: '12/07/2020',
      msg: 'Message 01'
  },
  {
      createAt: '12/07/2020',
      msg: 'Message 02'
  },
  {
      createAt: '10/07/2020',
      msg: 'Message 03'
  },
  {
      createAt: '12/02/2020',
      msg: 'Message 04'
  }
];

const obj = notification.reduce(function(prev, item) {
    const key = item.createAt;

    if (!prev[key]) {
        prev[key] = [];
    }

    prev[key].push(item.msg);

    return prev;
}, {});

console.log(obj);
console.log(map(array, calculator));
console.log(filter(array, checkFilter));