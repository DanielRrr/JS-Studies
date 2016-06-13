var power = function(base, exp) {
    var res = 1;
    for (var count = 0; count < exp; count++)
        res = res * base;
    return res;
};
