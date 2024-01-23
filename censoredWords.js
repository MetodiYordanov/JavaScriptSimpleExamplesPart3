function hideCensoredWords(sentence, censoredWord) {
    let censoredSentence = sentence.replace(censoredWord, '*'.repeat(censoredWord.length));
    while (censoredSentence.includes(censoredWord)) {
        censoredSentence = censoredSentence.replace(censoredWord, '*'.repeat(censoredWord.length));
    }
    console.log(censoredSentence);
}

// example input:
hideCensoredWords('A small sentence with some words', 'small');
hideCensoredWords('Find the hidden word', 'hidden');