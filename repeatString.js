function repeatString(originalString, repeatCount) {
    let newString = '';
    for (let i = 1; i <= repeatCount; i++) {
        newString += originalString;
    }
    console.log(newString);
}

// example input:
repeatString('abc', 3);
repeatString('String', 2);