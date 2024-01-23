function reverseAndCreateNewArray(lengthNewArray, inputArray) {
    let newArray = [];
    for (let i = 0; i < lengthNewArray; i++) {
        newArray.push(inputArray[i]);
    }
    newArray.reverse();

    console.log(newArray.join(' '));
}

// example input:
reverseAndCreateNewArray(3, [10, 20, 30, 40, 50]);
reverseAndCreateNewArray(4, [-1, 20, 99, 5]);
reverseAndCreateNewArray(2, [66, 43, 75, 89, 47]);