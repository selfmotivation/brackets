module.exports = function check(str, bracketsConfig) {
  const brackets = str.split('');
  let stack = [];
  let bracketsConf = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsConf[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  for (let i = 0; i < brackets.length; i++) {
    if (stack[0] == brackets[i]) {
      stack.shift();
    } else if (bracketsConf[brackets[i]]) {
      stack.unshift(bracketsConf[brackets[i]]);
    } else {
      return false;
    }
  }

  if (stack.length !== 0) {
    return false;
  }
  return true;
}