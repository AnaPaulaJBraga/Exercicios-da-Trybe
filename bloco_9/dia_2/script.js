const numeroAoQuadrado = ()=> {
    const myPromise = new Promise ((resolve, reject) =>{
        const myArray = Array.from(
            { length: 10},
            ()=> Math.floor(Math.random()* 50) +1,
        );
    
    const sum = myArray.map(number => number * number). reduce((sum, number) => sum + number);

    (sum < 8000) ? resolve(sum) : reject(sum);
    });

    myPromise
    .then((sum)=> console.log (`promise resolvida ${sum}`))
    .catch((sum)=> console.log (`promise rejeitada ${sum}`));
}
numeroAoQuadrado()