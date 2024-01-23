function createPerson(firstName, lastName, age) {
    const person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    };
    return person;
}

// example input:
createPerson('Peter', 'Pan', 20);
createPerson('George', 'Smith', 18);