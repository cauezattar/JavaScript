function exemploVar() {
    console.log(x);


    var x = 10;
    
    if (true) {
        var x = 20; // mesma variável x é redeclarada dentro do bloco
        console.log(X); // 20
    }
    console.log(x); // 20 (o valor foi alterado)
}

exemploVar();