function sumAsync(number1, number2) {
    return new Promise((resolve, reject) => {
        if (typeof number1 !== 'number' || typeof number2 !== 'number')
            reject(new Error('the first and second arguments must be number'));
        const sum = parseInt(number1) + parseInt(number2);
        resolve(sum);
    });
}
sumAsync(1, 2).then(data => {
    console.log(data);
});
// sumAsync(1, 'a').catch(error => {
//     console.log(error)
// });