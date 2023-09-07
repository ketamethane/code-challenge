var sum_to_n_a = function(n) {
    let sum = 0;
    if (n <= 0) {
        for (let i = n; i <= 0; i++) {
            sum += i;
        }
        return sum;
    } else {
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
};

var sum_to_n_b = function(n) {
    if (n < 0) {
        return n + sum_to_n_b(n + 1);
    }
    if (n === 0) {
        return 0;
    } else {
        return n + sum_to_n_b(n - 1);
    }
};

var sum_to_n_c = function(n) {
    if (n < 0) {
        return Math.abs(n)/2 * (2*n + Math.abs(n) - 1)
    }
    return (n * (n + 1)) / 2;
};

console.log(sum_to_n_a(-5));
console.log(sum_to_n_b(7));
console.log(sum_to_n_c(5));