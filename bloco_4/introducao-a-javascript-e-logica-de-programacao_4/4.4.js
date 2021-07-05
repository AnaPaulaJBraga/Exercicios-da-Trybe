// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// //   console.log("Bem-vinda," , info.personagem)

//   info.recorrente = "sim";

// // //   console.log(info)


// // for (chaves in info){
// //     console.log(chaves);
// // }

// //   for (chaves in info) {
// //      console.log(info[chaves])
          
// //   }

//   let info2= {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'sim'
//   }

//   for (chaves in info) {
//       if(
//           chaves === "recorrente" &&
//           info[chaves] === "sim" &&
//           info2[chaves] === "sim"
//       ){
//           console.log ('ambos recorrentes');
//       } else{
//         console.log(info[chaves] + ' e ' + info2[chaves]);
//       }
    
         
//  }

function verificaPalindrome(word){
    for(index in word){
      if(word[index] != word[(word.length - 1) - index]){
        return false;
      }
    }
    return true;
}
console.log(verificaPalindrome('Ana')); 
console.log(verificaPalindrome('desenvolvimento')); 

let numbers = [2, 3, 6, 7, 10, 1];
for (indiceMaior in numbers) {
    console.log (math)
}