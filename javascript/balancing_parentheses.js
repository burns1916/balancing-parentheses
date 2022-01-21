function balancingParentheses(string) {
  // type your code here
  let brackets = [];
  for (let i = 0; i < string.length; i++) {     
      if (string[i] === "(") {
          brackets.push(string[i]);
      } else if (string[i] === ")") {
          if (brackets[brackets.length - 1] === "(") brackets.pop();
          else brackets.push("#");
      }
  }
  return brackets.length;
}

balancingParentheses("()()()")

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
