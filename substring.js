function substring(inputString, startIndex, numberOfElements) {
    let newString = '';
    for (let i = startIndex; i < inputString.length; i ++) {
        if (numberOfElements <= 0) {
            break;
        }
        newString += inputString[i];
        numberOfElements--;
    }
    console.log(newString);
}

// example input:
substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);