function naiveSearch(long, short) {
    var count = 0;
    for (var i = 0; i < long.length; i++) {
        for (var j = 0; j < short.length; j++) {
            console.log(i, j)
            console.log(long[i], short[j])
            if (short[j] !== long[i + j]) {
                console.log("BREAK")
                break;
            }
            if (j === (short.length - 1)) {
                console.log("COUNT UP")
                count++;
            }
        }
    }
    return count;
}

var answer = naiveSearch("lorie loled", "lol");
console.log(answer);