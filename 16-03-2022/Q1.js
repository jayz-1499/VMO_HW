//Question 1
function filterOddElement(array) {
  let oddArray = array.filter((element) => element % 2 != 0);
  return oddArray;
}
function filterEvenElement(array) {
  let evenArray = array.filter((element) => element % 2 == 0);
  return evenArray;
}

//Question 2
function sumOfEvenElement(array) {
  let sum = array
    .filter((element) => element % 2 == 0)
    .reduce((accumulator, element) => accumulator + element);
  return sum;
}

//Question 3
function upOneTimeOddElement(array) {
  let newArray = array.map((element) => {
    if (element % 2 == 0) {
      element += 1;
    }
    return element;
  });
  return newArray;
}

//Question 4
function findSubString(subString, string) {
  if (string.includes(subString)) {
    return "YES";
  }
  return "NO";
}

//Question 5
function simpleString(string) {
  let stringArray = string.toLowerCase().split(",");
  let newString = stringArray
    .map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1);
    })
    .join(",");
  return newString;
}

//Question 6
function revertArray([x, ...array]) {
  if (x !== undefined) {
    return [...revertArray(array), x];
  }
  return [];
}
//Question 7
function getValue(object) {
  const { a, b, c } = object;
  return `${a},${b.a},${c.a}`;
}
//Question 8
function replaceString(s1, s2, currenString) {
  currenString = currenString.replaceAll(s1, s2);
  return currenString;
}
//Question 9
function fibo(f1, f2, n) {
  let next = f1 + f2;
  for (let index = 3; index <= n; index++) {
    f1 = f2;
    f2 = next;
    next = f1 + f2;
  }
  return next;
}
//Question 10
function isPrime(number) {
  if (number <= 1) return false;
  for (let i = 2; i <= Math.sqrt(number); i++)
    if (number % i == 0) return false;
  return true;
}
function SumPrimeNumber(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      arr.push(i);
    }
  }
  return arr.toString();
}
//Question 11
function primeFactorization(number) {
  let index = 2;
  let arr = [];
  while (number > 1) {
    if (number % index == 0) {
      arr.push(index);
      number = number / index;
    } else {
      index++;
    }
  }
  return arr.toString();
}
//Question 12
function checkEnoughElementInArrayToN(array, n) {
  let tempAray = [];
  for (let index = 1; index < n; index++) {
    tempAray.push(index);
  }
  let stringFind = tempAray.join(",");
  let oriString = array.join(",");
  let rs = oriString.includes(stringFind);
  return rs;
}
//Question 13
function changeBaseNumber(number){
      
}
//Question 14
function changeString(string) {
  let stringArr = string.split("");
  let rs = "";
  let count = 1;
  let com = stringArr[0];
  for (let index = 1; index < stringArr.length; index++) {
    if (com == stringArr[index]) {
      count++;
    } else {
      rs += `${count}${com}`;
      com = stringArr[index];
      count = 1;
    }
    if (index == stringArr.length - 1) {
      rs += `${count}${com}`;
    }
  }
  return rs;
}
//Question 15
function gcd(a, b) {
  while (a * b != 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
function main() {
  //Question 1
  let newArray = [1, 3, 4, 5, 6, 9, 21, 34, 12];
  console.log("Q1: Odd element in array: " + filterOddElement(newArray));
  console.log("Q1: Even element in array: " + filterEvenElement(newArray));
  //Question 2
  let newArray2 = [1, 3, 4, 5, 6, 9, 21, 34, 12];
  console.log(
    "Q2: Sum of even element in array: " + sumOfEvenElement(newArray2)
  );
  //Question 3
  let newArray3 = [1, 3, 4, 5, 6, 9, 21, 34, 12];
  console.log(
    "Q3: Up 1 times odd element in array: " + upOneTimeOddElement(newArray3)
  );
  //Question 4
  let newString1 = "string1 string2 string10";
  let subString1 = "string1";
  console.log(
    `Q4: String ${subString1} in ${newString1}: ${findSubString(
      subString1,
      newString1
    )}`
  );
  //Question 5
  let newString2 = "StrinG1,striNg2,ABSC";
  console.log(`Q5: Simple string ${newString2} is ${simpleString(newString2)}`);
  //Question 6
  console.log("Q6: " + revertArray([1, 2, 3, 4]));

  //Question 7
  const obj = { a: 1, b: { a: 2 }, c: { a: 3 } };
  console.log("Q7: " + getValue(obj));

  //Question 8
  let newString3 = "string1, string2, string3";
  let s1 = "str";
  let s2 = "char";
  console.log("Q8:" + replaceString(s1, s2, newString3));
  //Question 9
  console.log("Q9: " + fibo(0, 1, 3));
  //Question 10
  let n = 10;
  console.log("Q10: " + SumPrimeNumber(n));
  //Question 11
  console.log("Q11: " + primeFactorization(17));
  //Question 12
  let newArray4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("Q12: " + checkEnoughElementInArrayToN(newArray4, 8));
  //Question 13
  //console.log("Q13: " + base10ToBase2(12));
  //Question 14
  let string14 = "122344111";
  console.log("Q14: " + changeString(string14));

  //Question 15
  console.log("Q15 gcd: " + gcd(25, 30));
  console.log("Q15 lcm: " + lcm(25, 30));

  //10->2->8
}
main();
