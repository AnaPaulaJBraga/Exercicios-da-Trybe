
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
    .then(sum => [2, 3, 5 ,10].map(number => sum / number))
    .then(array => array.reduce((acc, number)=> acc + number, 0))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));

};
numeroAoQuadrado()