function selecionaEstado(){
let opcoesEstado = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
let estado = document.getElementById('estado');


  for (let index=0; index < opcoesEstado.length; index +=1){
	let opcoes = document.createElement('option');
	estado.appendChild(opcoes).innerText = opcoesEstado[index];
	estado.appendChild(opcoes).value = opcoesEstado[index];
	}
}
selecionaEstado()