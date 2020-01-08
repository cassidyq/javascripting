// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).

const obsfuscatePassword = (password)=> {
  let output = '';
  for (let i = 0; i < password.length; i++) {
    if (password[i] === 'a') {
      output += '4';
    } else if (password[i] === 'e') {
      output += '3';
    } else if (password[i] === 'o') {
      output += '0';
    } else if (password[i] === 'l') {
      output += '1';
    } else {
      output += password[i];
    }
  }
  return output;
};

const arrayToString = (array)=> {
  return array.join(' ');
};

let password = process.argv.slice(2);
console.log(password);
password = arrayToString(password);
console.log(obsfuscatePassword(password));
