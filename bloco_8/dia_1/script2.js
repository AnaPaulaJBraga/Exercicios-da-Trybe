const sorteio = (numeroApostado, funcao) => {
const numero = Math.floor((Math.random() * 5) + 1);
return funcao (numero, numeroApostado) ? "Parabéns voce ganhou" : "tente novamente";
};


const checaNumero = (numero, numeroApostado) => numero === numeroApostado;
  
console.log(sorteio(3, checaNumero))