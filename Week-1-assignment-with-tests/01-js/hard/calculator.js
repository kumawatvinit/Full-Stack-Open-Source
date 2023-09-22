/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result+= num;
  }

  subtract(num) {
    this.result-= num;
  }

  multiply(num) {
    this.result*= num;
  }

  divide(num) {
    if(num === 0) throw new Error('Cannot divide by zero');
    this.result/= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(exp)
  {
    exp = clean(exp);

    // throw error if division by zero
    // search for / and check if next character is 0
    for(let i=0; i<exp.length; i++)
    {
      if(exp[i] === '/')
      {
        if(i+1 < exp.length && exp[i+1] === '0') throw new Error('Cannot divide by zero');
      }

    }

    // evaluate expression using inbuilt eval function
    try {
      this.result = eval(exp);
      return this.result;
    }
    catch(err) {
      throw new Error('Invalid expression');
    }

    return 0;

  }
};

/*
  0-9, +,-,*,/,., (, )
  ' '
*/
function clean(exp) {
  let allowed = '0123456789+-*/.()';
  allowed = new Set(allowed.split(''));

  let ans = '';

  // check for extra chars
  for(let i=0; i<exp.length; i++)
  {
    if(allowed.has(exp[i])) ans+= exp[i];
    else if(exp[i] == ' ') continue;
    else throw new Error('Invalid expression');
  }

  // validate brackets
  let stack = [];
  for(let i=0; i<ans.length; i++)
  {
    if(ans[i] === '(') stack.push(ans[i]);
    else if(ans[i] === ')') {
      if(stack.length === 0) throw new Error('Invalid expression');
      stack.pop();
    }
  }
  if(stack.length !== 0)  throw new Error('Invalid expression');

  return ans;
}

calc = new Calculator();
// console.log(calc.divide(0));
// calc.calculate('10 + (2 + 3');
// calc.calculate('10 + 2 * (6 -   (4 + 1) / 2) +  7');
// calc.calculate('10 + 2) + 3');
// calc.calculate(')10 + 2(');

// console.log(calc.calculate('10 / 0'));

module.exports = Calculator;
