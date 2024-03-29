/* Arquivo JavaScript principal do site */

// A função abaixo "processa" os dados recebidos do formulário de contato, localizado na página contato.html
function contatoForm(){
	var nome = document.getElementById('nome').value;
	var email = document.getElementById('email').value;
	var assunto = document.getElementById('assunto').value;
	var mensagem = document.getElementById('nome').value;

	// Verifica se todos os campos do formulário estão preenchidos
	if(!isEmpty(nome) && !isEmpty(email) && isEmail(email) && !isEmpty(assunto) && !isEmpty(mensagem)){
		alert('Mensagem enviada com sucesso! Retornaremos o mais rápido possível!');
	} 
}

function isEmpty(valor){
	return valor.trim().length == 0;
}

function isEmail(valor){
	return (valor.indexOf('@') == -1) ? false : true;
}