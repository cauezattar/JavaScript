function exemploLet() {
    let x = 10;
    if (true) {
        let x = 20; // nova variável x é criada dentro do bloco
        console.log(x); // 20 (dentro do bloco)
    }
    console.log(x); // 10 (fora do bloco)
}

exemploLet();