// // FUNCTION THAT CHECKS FOR VOWELS AND CONSONANTS
let inputElem = document.querySelector("#input-text");
let checkBtn = document.querySelector("#checkButton");
let outputR = document.querySelector("#output");

checkBtn.addEventListener("click", function () {
  let inputValue = inputElem.value;
  let result = vowelChecker(inputValue);
  const { vowelsMessage, consonantMessage, vowels, consonant } = result;
  outputR.innerHTML = `${vowelsMessage} : ${vowels} <br/> ${consonantMessage}: ${consonant}`;
  inputElem.value = "";
});

function vowelChecker(word) {
  let vowels = "aeiouAEIOU";
  let vowelsFound = [];
  let consonantFound = [];
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      vowelsFound.push(word[i]);
    } else {
      if (
        word[i] != " " &&
        word[i] != "'" &&
        word[i] != "_" &&
        word[i] != "$"
      ) {
        consonantFound.push(word[i]);
      }
    }
  }
  return {
    vowelsMessage: "This are the vowels",
    vowels: vowelsFound.join(", "),
    consonantMessage: "This are the consonant",
    consonant: consonantFound.join(", "),
  };
}
console.log(vowelChecker("lionel"));

// FUNCTION THAT CHECKS WHICH NUMBER IS GREATER
function max(a, b) {
  if (a > b) {
    return a + " is greater";
  } else if (b > a) {
    return b + " is greater";
  } else if (a === b || b === a) {
    return "Both numbers are equal";
  } else {
    return "None is greater";
  }
}
console.log(max(10, 200));

// FUNCTION THAT CHECKS IF A WORD IS A PALINDROME
function intact(word) {
  let reverseWord = word.split("").reverse().join("");
  if (word === reverseWord) {
    return word + " is a Palindrome";
  } else {
    return word + " has been rearranged to " + reverseWord;
  }
}
console.log(intact("nurses run"));

// FUNCTION THAT REVERSE A WORD
function reverseWord(word) {
  return word.split("").reverse().join("");
}

// function that multiply three numbers
function multiply(a, b, c) {
  let multiply = a * b * c;
  return multiply;
}

// function that checks if a number is even or odd
function isEven(number) {
  if (number % 2 === 0) {
    return number, "It is an Even Number";
  } else {
    return number, "It is an Odd Number";
  }
}
console.log(isEven(1));

// function that count word length
function countWordLength(input) {
  return input.length;
}
console.log(countWordLength("Mike"));
