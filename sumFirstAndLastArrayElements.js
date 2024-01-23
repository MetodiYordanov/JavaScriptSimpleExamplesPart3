function sumFirstAndLastElement(inputArray) {
    const firstElement = inputArray[0];
    const lastElement = inputArray[inputArray.length - 1];
    const result = firstElement + lastElement;

    console.log(result);
}

//example input:
sumFirstAndLastElement([20, 30, 40]);
sumFirstAndLastElement([10, 17, 22, 33]);
sumFirstAndLastElement([11, 58, 69]);