const readline = require('readline-sync')

function start() {
	//armazena tudo que for encontrado nas pesquisas
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

 	function askAndReturnSearchTerm() {
 		return readline.question('Type a Wikipedia search term: ')
 	}

 	function askAndReturnPrefix() {
 		//prefixo seré o pré-texto que antecede a busca. Será usado no título do vídeo, no YouTube.
 		//TRATA-SE DE UMA LISTA DE POSSIBILIDADES A SER ESCOLHIDA UMA, NA PERGUNTA. 
 		const prefixes = ['Who is', 'What is', 'The history of']
 		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
 		const selectedPrefixText = prefixes[selectedPrefixIndex]

 		return selectedPrefixText
 	}
 	console.log(content)
 	
}

start()