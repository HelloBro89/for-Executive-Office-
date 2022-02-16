const numberHandler = (num: number): void => {
    if (!Number.isInteger(num)) {
        console.log('The parameter cannot be a fractional number');
        return;
    }

    if (num % 22 === 0) {
        console.log('candybar');
    } else if (num % 11 === 0) {
        console.log('bar');
    } else if (num % 2 === 0) {
        console.log('candy');
    } else {
        console.log(num);
    }
};

numberHandler(33);
