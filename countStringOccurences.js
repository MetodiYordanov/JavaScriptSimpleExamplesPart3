function countOccurrences(input, searchedWord) {
    const inputAsArray = input.split(' ');
    let countOccurrences = 0;
    for (let i = 0; i < inputAsArray.length; i++) {
        if (inputAsArray[i] === searchedWord) {
            countOccurrences++;
        }
    }
    console.log(countOccurrences);
}

// example input:
countOccurrences('This is a word and it also is a sentence', 'is');
countOccurrences('softuni is great place for learning new programming languages', 'softuni');