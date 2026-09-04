function exemploConst() {
    const x = 10;
    console.log(x); // 10
    // x = 20; // Isso causará um erro porque x foi declarado como const
    if (true) {
        const y = 30;
        console.log(y); // 30
    }
    // console.log(y); // Isso causará um erro porque y não existe fora do bloco
}
exemploLet();