//Documento JavaScript
console.log("Hello would");

function soma(valor1, valor2){
	let resultado = valor1 + valor2;
	return resultado;
}

function dobra(){
	let valores = [1,2,3,4,5];
	for (let i = 0; i < valores.length; i++){
		valores[i] = valores[i] * 2;
		console.log(valores[i]);
	}
}

function diasS(){
	let dias = ["segunda", "terça", "quarta", "quinta", "sexta"];
	for(let dia of dias) {
		console.log(dia);
	}
}

function notas(){
	let alunos = [
		{
			nome: "Maria",
			nota:8
		},
		{
			nome: "Pedro",
			nota:4
		},
		{
			nome: "Joao",
			nota:10
		},
		{
			nome: "Paulo",
			nota:9
		},
		{
			nome: "Ana",
			nota:7
		},
		{
			nome: "Bianca",
			nota:6
		}
	];
	for (let i = 0 ; i < alunos.length; i++) {
		if(alunos[i].nota >= 7){
			console.log(alunos[i].nome + " aprovado");
		}
	}
}

function somarSubVetores(vetor){
	let resultado = [];

	for (var indice = 0; indice < vetor.length; indice++) {
		let subVetor = vetor[indice];
		let soma = 0;

		for (var subIndice = 0; subIndice < subVetor.length; subIndice++) {
			soma = soma + subVetor[subIndice];
		}

		resultado[indice] = soma;
	}
	return resultado;
}

function testeFinal(string, numero){
	let retorno;

	switch(string){
		case "mundojs":
			console.log("\nMundo JS");
			retorno = numero;
			break;
		case "soma":
			let metade = (numero/2);
			let quadrado = (numero*numero);
			retorno = metade + quadrado;
			break;
		case "vetor":
			let vetor = [];
			for (var i = 0; i < 5; i++) {
				vetor[i] = numero + (i * 2);
			}
			retorno = vetor;
			break;
		case "booleano":
			let array = [];
			let total = 0;
			for (var i = 0; i < 5; i++) {
				array[i] = numero + (i * 2);
				total = total + array[i];
			}
			retorno = total > 35;
			break;
		default: 
			retorno -1;
	}
	return retorno;
}
