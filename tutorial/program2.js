var sum = 0;
process.argv.forEach(function(val, index, array) {
    if (index > 1) {
        sum += Number(val)
    }
});
console.log(sum);
