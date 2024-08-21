function sumAll (n1,n2) {
    let soma = 0;
    let maior = n1 > n2? n1: n2;
    let menor = n1 > n2? n2: n1;

    if (maior <= 0 && maior <= 0 && Number.isInteger(n1) && Number.isInteger(n2)) {
        for(i=menor; i<=maior; i++) {
            soma += i;
        } 
    } else {
        return "ERROR"
    }
    return soma;
}

console.log(sumAll(-4,4))

