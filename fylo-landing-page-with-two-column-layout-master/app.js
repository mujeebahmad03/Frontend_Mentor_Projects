function capitalize(str) {
    let evenLetter;
    let oddLetter;
    let newArr = [oddLetter, evenLetter]
    let splitStr;
    splitStr = str.split();
    splitStr.map((letter, idx) => idx % 2 ? letter.toLowerCase() : letter.toUpperCase()).join('')
};