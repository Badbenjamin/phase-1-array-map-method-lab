const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(sentence => titleCaseSentence(sentence));
}

function splitSentence(sentence) {
  return sentence.split(" ");
}

function upperCaseWords(word) {
  const firstLeter = word[0].toUpperCase();
  return firstLeter + word.slice(1);
}

function buildSentence(wordList) {
  return wordList.join(" ");
}

function titleCaseSentence(sentence) {
  const sentenceArray = splitSentence(sentence);
  const titleCaseArray = sentenceArray.map((word) => upperCaseWords(word));
  const finalSentence = buildSentence(titleCaseArray);
  return finalSentence;
}