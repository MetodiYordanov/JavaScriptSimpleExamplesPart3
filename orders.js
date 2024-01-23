function calculateTotal(product, quantity) {
    let pricePerOne = 0;
    let total = 0;
    switch (product) {
        case 'coffee':
            pricePerOne = 1.50;
        break;
        case 'coke':
            pricePerOne = 1.40;
        break;
        case 'water':
            pricePerOne = 1.00;
        break;
        case 'snacks':
            pricePerOne = 2.00;
        break;
    }
    total = pricePerOne * quantity;
    console.log(total.toFixed(2));
}

// example input:
calculateTotal('water', 5);
calculateTotal('coffee', 2);