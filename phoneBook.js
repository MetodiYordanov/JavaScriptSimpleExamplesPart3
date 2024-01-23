
function solve(input) {
    let uniqueNames = {};
    input.forEach(element => {
        const keyValuePair = element.split(' ');
        const name = keyValuePair[0];
        const phoneNumber = keyValuePair[1];
        uniqueNames[name] = phoneNumber;
    });

    for (const info in uniqueNames) {
        console.log(`${info} -> ${uniqueNames[info]}`);
    }
}

// example input:
solve(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);
solve(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);