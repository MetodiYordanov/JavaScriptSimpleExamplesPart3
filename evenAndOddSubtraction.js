function evenAndOddSubtraction(inputArray) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] % 2 === 0) {
            sumEven += inputArray[i];
        }
        else {
            sumOdd += inputArray[i];
        }
    }
    const result = sumEven - sumOdd;
    console.log(result);
}

// example input:
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
evenAndOddSubtraction([3, 5, 7, 9]);
evenAndOddSubtraction([2, 4, 6, 8, 10]);