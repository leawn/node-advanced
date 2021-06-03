for (var i = 1; i <= 100; i++) {
    var t = i % 3 === 0, f = i % 5 === 0;
    console.log(t && f ? "FizzBuzz"
        : t ? "Fizz"
            : f ? "Buzz"
                : i);
}
