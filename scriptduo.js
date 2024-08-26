let perguntas = [

{
	titulo: 'Gato',
	alternativas: ['Gat', 'Cat', 'Gate', 'Dog'],
	correta: 1
},
{
	titulo: 'Fire',
	alternativas: ['Fogo', 'agua', 'Terra', 'Ar'],
	correta: 0
},
{
	titulo: 'Bird',
	alternativas: ['Gato', 'Urubu', 'Pombo', 'Passaro'],
	correta: 3
}

]

let app = {

start: function(){
	this.Atualpos = 0;
	this.Totalpontos = 0;

	let alts = document.querySelectorAll('.alternativa');
	alts.forEach((element,index)=>{
		
		element.addEventListener('click',()=>{
			this.checaResposta(index);
		});
	});
	this.atualizaPontos();
	app.mostraquestao(perguntas[this.Atualpos]);
},

mostraquestao: function(q){
	this.qatual = q;
	// Mostrando o título
	let titleDiv = document.getElementById('titulo');
	titleDiv.textContent = q.titulo;
	// Mostrando as alternativas
	let alts = document.querySelectorAll('.alternativa');
	alts.forEach(function(element,index){
		element.textContent = q.alternativas[index];

	})
},

Proximaperg: function(){
	this.Atualpos++;
	if(this.Atualpos == perguntas.length){
		this.Atualpos = 0;
	}

},

checaResposta: function(user){
	if(this.qatual.correta == user){
		console.log("Correta")
		this.Totalpontos++;
		this.mostraresposta();
	}
	else{
		console.log("Errada")
		this.mostraresposta();
	}
	this.atualizaPontos();
	this.Proximaperg();
	this.mostraquestao(perguntas[this.Atualpos]);
},

atualizaPontos: function(){
	let scoreDiv = document.getElementById('pontos');
	scoreDiv.textContent = `Sua pontuacao eh: ${this.Totalpontos}`;
},

mostraresposta: function(correto){
	let resultDiv = document.getElementById('result');
	let result = '';
	// Formatar como a mensagem será exibida
	if (correto == true){
		result = 'Resposta Correta';
	}
	else{
		// Obtendo a questão atual
		let pergunta = perguntas[this.Atualpos];
		// Obtenha o índice da resposta correta da questão atual
		let cindice = pergunta.correta;
		// Obtenha o texto da resposta correta da questão atual
		let ctexto = pergunta.alternativas[cindice];
		result = `Incorreto! Resposta correta: ${ctexto}`;
	}
	resultDiv.textContent = result;
}

}

app.start();