//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length
  
}
//count the number of vowels in the given String and return the value

const countVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count

  }


//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  return(str.includes(checkStr));
  
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());

  
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  var LongestWord = str.split(" ")
  var count = 0
  for (var i=0; i<LongestWord.length; i++){
    if (LongestWord[i].length>count){
      count = LongestWord[i].length
    }
  }
  return count
}
module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}