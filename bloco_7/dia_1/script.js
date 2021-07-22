// parte 1
// exercicio 1
const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  
}
  testingScope(true);

//   exercicio 2

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
  
    return oddsAndEvens;
  }
  const sortedArray = sortOddsAndEvens()
  console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); 

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];
  const sortArrayBonus = array => {
    const sortOddsAndEvens = array.sort((a, b) => a - b);
    return sortOddsAndEvens;
  }
  
  const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
  console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);

  oddsAndEvens.sort((a, b) => a - b);
  console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente !`);

//   parte 2 
// exercicio 1

const factorial = number => {
    let result = 1;

    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }

    return result;
}

console.log(factorial(5));

// exercicio 2

const longestWord = text => {
    let wordArray = text.split (" ");
    let maxLength = 0;
    let resultado = " ";

    for(const word of wordArray) {
        if (word.length > maxLength){
            maxLength = word.length;
            resultado = word;
        }
    }
    return resultado
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"))


// exercicio 4
const skills = ["Android", "iOS", "Architecture", "Teach", "Run"];

function novoArray (param1){
    const primeiraParte = paramInner => (
        `Tryber ${paramInner} aqui!
  
        Tudo bem?`
      );
  
      let result = `${primeiraParte(param1)}
      Minhas cinco principais habilidades são:`

      skills.forEach((skill, index) =>
      result = `${result}
  
      - ${skill}`);
  
      result = `
      ${result}
  
      #goTrybe
      `;
  
      return result;
  }
  
  console.log(novoArray("Lucas"));


